import { Injectable } from '@angular/core';
import {Action} from "../../../effectclasses/Action";
import {ActionType} from "../../../enums/actionTypes.enum";
import {Blueprint} from "./Blueprint";
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {ActionsService} from "../../actions.service";
import {Subject} from "rxjs";
import {ClientData} from "./ClientData";
import {ActionIdType, ComponentNameType, ConceptNameType, DataLink} from "../../../types/type-aliases";
import {ConfigService} from "../../config.service";
import {QueryService} from "../server/queries/query.service";
import {ServerData} from "../server/ServerData";
import {StateService} from "../../state.service";
import {RenderPropertiesService} from "../../renderProperties.service";
import {OutputData} from "../../../types/union-types";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  // je hebt dus een aantal events die heel typisch zijn voor een bepaalde service
  public clientDataUpdated = new Subject<ClientData>()
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:ActionIdType}>()
  private _clientData: ClientData[] = []
  constructor(private actionsService:ActionsService,
              private configService:ConfigService,
              private queryService:QueryService,
              private stateService:StateService,
              private renderPropertiesService:RenderPropertiesService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public get clientData(){
    return [...this._clientData]
  }
  public bindActions() {
    this.actionsService.bindToAction(new Action('', ActionType.CreateClientData))?.subscribe(res => {
      // todo wat hier wat raar is dat CreateClientData blijkbaar altijd bedoeld is in relatie met eenbepaalde frontend component met data
      if (res?.effect.action.target) {
        const clientData = this.getClientData(res.effect.action.target)
        if (!clientData) {
          // todo createClientData ook voor kinderen en kleinkinderen ? of hoe moet dit werken ?
          // de data wordt gecreëerd op basis van de data die meekomt van de frontend
          if (res.data instanceof Array && res.data.length === 2) {
            const blueprint = this.getClientData( res.data[0])?.blueprint
            if (!blueprint) throw new Error('No parent blueprint found for component with name ' + res.data[0])
            if (res.data[1] instanceof Array) {
              // todo voeg branded type toe zodat je automatisch kan zien dat je alle mogelijkheden hebt gecheckt if(isDataRecordArray) else isDataRecordModel
              this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, res.data[1],  [])
            } else if (res.data[1].hasOwnProperty('id') && res.data[1].hasOwnProperty('__typename')) {
              this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, res.data[1], undefined)
            } else throw new Error('data has not a correct format ' + res.data[1])
          } else if (res.data instanceof Blueprint) {
            this.createClientData(res.effect.action.id, res.effect.action.target, res.data, undefined, undefined)
          }
        }
        this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
      }
    })
    // todo ik veronderstel dat een service action zal gebruikt worden om data naar de component te krijgen
    //      vandaar dat outPutData private staat, deze actie zal dan in Effects staan met een actionId
    //      dat kan je gebruiken om de ClientData op te halen en dan de outPutData om het nodige te tonen
    //
  }

  // client data CRUD
  public getClientData(target:ActionIdType|ComponentNameType,first:boolean=false): ClientData | undefined {
    return this.clientData.find(cd=>{
      if(first) return cd.id == target
      else return cd.name === target
    })
  }

  // in de volgende twee methodes moet outPutData correct staan
  public updateClientData(id:ActionIdType,data:Blueprint|OutputData) {
    const instance =  this.clientData.find(cd=>{
      return cd.id === id
    })
    if(instance){
      instance.update(data)
      this.clientDataUpdated.next(instance)
    } else throw new Error('Client data instance does not exist')
  }
  public createClientData(
    actionId:ActionIdType,
    componentName:ComponentNameType,
    blueprint:Blueprint,
    data:OutputData,
    errorMessages:string[]|NoValueType.NO_VALUE_NEEDED
  ){
    if(blueprint)
      for(let [k,v] of blueprint.properties.properties){
        if(v instanceof Array && v.length===2 && typeof v[0]==='string' && v[1] instanceof Array && v[1].length===2 && v[1][0] instanceof Blueprint){
          switch (v[0]){
            case 'list':
              // todo dit lijkt de zaken wat minder rechtuit te maken ...
              this.queryService.getAllRecords(v[1][0].conceptName,v[1][0]).subscribe(res=>{
                const data = ServerData.getData(res.data)
                if(data){
                  blueprint.properties.setValuesProperties(k,data)
                }
              })
              break
            case 'object':
              throw new Error('object property blueprint not implemented yet')
            default:
              throw new Error('type of blueprint property unknown '+v[0])
          }
        }
      }
    this.clientData.push(new ClientData(actionId,componentName,blueprint,data,errorMessages))
    const cd = this.getClientData(componentName)
    if(cd) this.clientDataUpdated.next(cd)
  }
  private deleteClientData(name:ComponentNameType,concept:ConceptNameType){
    // todo
    // wanneer een component gedestroyed wordt
  }
  public getOutputDataForUIComponent(name:ComponentNameType):OutputData|undefined{
    const cd = this.clientData.find(cd=>{
      return cd.name === name
    })
    return cd?.outputData
  }
  //***********************************     data manipulation methods         ***************************************************************/

}
/*  private createExtendedConceptModel(componentName: string, data: DataObjectModel, compConfig: ClientDataConfigModel | string[] | ClientDataConfigModel[]): ClientDataRenderModel | undefined {
      if (compConfig instanceof ClientDataConfigModel) {
        let newObj: ClientDataRenderModel = {
          conceptName: compConfig.conceptName,
          attributes: [],
          errorMessages: NoValueType.NI,
          blueprint: data.blueprint,
          record: data.dataSingle ? Object.assign(data.dataSingle,{id:data.dataSingle?.id ?? NoValueType.NA}) : undefined,
          listOfRecords: data.dataMultiple
        }
        const configCopy = {...compConfig}
        if (configCopy.attributes && configCopy.attributes instanceof Array) {
          configCopy.attributes?.forEach(attr => {
            const entry = Object.entries(data.dataSingle ?? {}).find(([k, v]) => {
              return k === attr.name
            })
            const entry2 = Object.entries(data.blueprint ?? {}).find(([k, v]) => {
              return k === attr.name
            })
            const attrExp = {...attr}
            if (entry && attr.name) {
              attrExp.dataServer = entry[1];
            }
            if (entry2 && attr.name) {
              attrExp.dataBlueprint = new Map();
              attrExp.dataBlueprint.set(attr.name, entry2[1]);
            }
            (newObj.attributes as AttributeComponentModel[]).push(Object.assign(attrExp as AttributeComponentModel, {}))
          })
          return newObj
        }
      } else {
        throw new Error('unfinished else condition')
      }
      return undefined
    }*/
  /*  private isCorrectType(attr: AttributeComponentModel, componentType: ComponentType): boolean {
      switch (componentType) {
        case ComponentType.MultiSelect:
          return attr.multiselect !== undefined
        case ComponentType.NumberInput:
          return attr.number !== undefined
        case ComponentType.TextInput:
          return attr.text !== undefined
        case ComponentType.RadioButton:
          return attr.radio !== undefined
        default:
          return true
      }
    }*/

