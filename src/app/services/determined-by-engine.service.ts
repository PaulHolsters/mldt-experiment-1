import { Injectable } from '@angular/core';
import {Action} from "../effectclasses/Action";
import {ActionType} from "../enums/actionTypes.enum";
import {TriggerType} from "../enums/triggerTypes.enum";
import {ConfigService} from "./config.service";
import {ActionsService} from "./actions.service";
import {DataRecordModel} from "../design-dimensions/DataRecordModel";
import {Effect} from "../effectclasses/Effect";
import {Blueprint} from "./data/client/Blueprint";
import {Subject} from "rxjs";
import {ActionIdType, ComponentNameType} from "../types/type-aliases";
import {ClientData} from "./data/client/ClientData";
import {NoValueType} from "../enums/no_value_type";
import utilFunctions from "../utils/utilFunctions";
import {OutputData} from "../types/union-types";
import {RadioButtonGroup} from "../components/form/radio-button/RadioButtonGroup";
import {Multiselect} from "../components/form/multiselect/Multiselect";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {RenderPropertiesService} from "./renderProperties.service";

@Injectable({
  providedIn: 'root'
})
export class DeterminedByEngineService {
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:ActionIdType}>()

  constructor(    private configService:ConfigService,
                  private actionsService:ActionsService,
                  private responsiveBehaviourService:ResponsiveBehaviourService,
                  private renderPropService:RenderPropertiesService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){
    this.actionsService.bindToAction(new Action('',ActionType.UpdateDataRelatedProperties))?.subscribe(res=>{
      if(res){
        const action = this.updateProps(res)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
  }
  public isClientData(data:any):data is ClientData{
    return data instanceof ClientData
  }

  private updateProps(res: {
    effect: Effect,
    data: Blueprint|[ComponentNameType,DataRecordModel|(DataRecordModel|null)[]]|ClientData,
    target: EventTarget | undefined}){
    if(this.isClientData(res.data) && res.effect.action.target){
      const dl = this.configService.getConfigFromRoot(res.effect.action.target)
      if(dl && dl.clientData?.dataLink){
        // todo voeg interface voor getRenderProps toe
        const link = dl.clientData.dataLink
        const value = res.data.blueprint.getBlueprintValueForDataLink(link)
        const input:{
          [key: string]: any
        }|undefined
          = dl.dataInput?.getDataInputRenderProperties(this.responsiveBehaviourService.screenSize,
          value)
        const repres:{
          [key: string]: any
        }|undefined
          = dl.dataRepresentation?.getDataRepresentationRenderProperties(this.responsiveBehaviourService.screenSize,
          value)
        this.renderPropService.getStatePropertySubjects().filter(sp=>{
          return sp.componentName===res.effect.action.target
        }).forEach(prop=>{
          if(input && prop.propName in input){
            prop.propValue.next(input[prop.propName])
          }
          if(repres && prop.propName in repres){
            prop.propValue.next(repres[prop.propName])
          }
        })
      }
    }
    return true
  }
  // todo alle concrete situaties naar de concrete modellen
  private replaceDBIValues(clientData: ClientData): AttributeComponentModel {
    if(attr.tableColumn){
      if(attr.tableColumn.label === NoValueType.DBI){
        attr.tableColumn.label = utilFunctions.capitalizeFirst(attr.name)
      }
    }
    return attr
  }

  private replaceNVYValues(clientData: ClientData, attr: AttributeComponentModel): AttributeComponentModel {
    if (attr.text && attr.text.value === NoValueType.NVY && attr.dataServer && typeof attr.dataServer === 'string') {
      attr.text.value = attr.dataServer
    }
    if (attr.number && attr.number.value === NoValueType.NVY && attr.dataServer && typeof attr.dataServer === 'number') {
      attr.number.value = attr.dataServer
    }
    if (attr.radio && attr.radio.value === NoValueType.NVY && attr.dataServer && typeof attr.dataServer === 'string') {
      attr.radio.value = attr.dataServer
    }
    if (attr.multiselect && attr.multiselect.selectedOptions.length === 0 && attr.dataServer && attr.dataServer instanceof Array) {
      attr.multiselect.selectedOptions = attr.dataServer
    }
    return attr
  }

}
