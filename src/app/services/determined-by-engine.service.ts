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
        const input:{
          [key: string]: any
        }|undefined
          = dl.dataInput?.getDataInputRenderProperties(this.responsiveBehaviourService.screenSize,
          [link,res.data.blueprint])
        const repres:{
          [key: string]: any
        }|undefined
          = dl.dataRepresentation?.getDataRepresentationRenderProperties(this.responsiveBehaviourService.screenSize,
          [link,res.data.blueprint])
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
    // todo waar haal je de overeenksomtige config vandaag: via name component => datarepresentation config (
    //      daarbij juiste screensize gebruiken
    const bp = attr.dataBlueprint?.get(attr.name)
      if (attr.radio.radioValues === NoValueType.DBI) {

      }
    } else if (attr.multiselect) {
      if (attr.multiselect.conceptName === NoValueType.DBI) {
        const cn = this.configService.getEffectsForComponent(clientData.name).find(e=>{
          return e.action.id===clientData.id
        })?.action?.conceptName
        if(cn)
          attr.multiselect.conceptName = cn
        else throw new Error('no conceptname found for concept '+clientData)
      }
      if (attr.multiselect.options === NoValueType.DBI) {
        if (bp instanceof Array && bp.length==2 && bp[0]==='list' && bp[1] instanceof Array && bp[1].length===2 && bp[1][0] instanceof Map
          && bp[1][1] instanceof Array) {
          if(bp[1][1].length===0){
            attr.multiselect.options = []
          } else {
            attr.multiselect.options = [...bp[1][1]]
          }
        }
      }

      if (attr.multiselect.optionLabel === NoValueType.DBI) {
        // todo ik stel voor dat standaard altijd de eerste property wordt genomen => later implementeren nu staat er automatisch 'name'
      }
    }
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
