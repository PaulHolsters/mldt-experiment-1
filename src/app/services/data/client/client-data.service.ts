import { Injectable } from '@angular/core';
import {Action} from "../../../effectclasses/Action";
import {ActionType} from "../../../enums/actionTypes.enum";
import {Blueprint} from "./Blueprint";
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {ActionsService} from "../../actions.service";
import {Subject} from "rxjs";
import {ClientData} from "./ClientData";
import {
  ActionIdType,
  ComponentNameType,
  ConceptNameType, isActionIdType,
  isComponentName,
  isConceptName, isDataLink
} from "../../../types/type-aliases";
import {ConfigService} from "../../config.service";
import {QueryService} from "../server/queries/query.service";
import {ServerData} from "../server/ServerData";
import {StateService} from "../../state.service";
import {RenderPropertiesService} from "../../renderProperties.service";
import {
  extractConcept, isDataRecord,
  isList, isNoValueType,
  isOutPutData,
  OutputData,
  ServerData as ServerDataType
} from "../../../types/union-types";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ActionValueModel} from "../../../design-dimensions/ActionValueModel";
@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  // je hebt dus een aantal events die heel typisch zijn voor een bepaalde service
  public clientDataUpdated = new Subject<ClientData>()
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:ActionIdType}>()
  public blueprintNeeded = new Subject<{concept:ConceptNameType,component:ComponentNameType}>()
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
      /* todo stap 1
      * target = CALC => te berekenen op basis van res.data => creatie van meerdere CD instances mogelijk
      * target = concreet => 1 CD
      * todo stap 2
      * concept = datalink of conceptnaam => voor blueprint altijd de data ophalen op basis van deze link of naam
      * concept = CALC => gebruik res.effect.source om de cd te vinden welke BP je mag overnemen (via config)
      * todo stap 3
      * outputdata wordt normaal door server actions bepaald, maar wanneer het op vraag van de gebruiker gebeurt
      * dan mag dit automatisch aangevuld worden op basis van res.data en actionValue uit de Action config */
      if(res){
        const target = res.effect.action.target
        if (isComponentName(target,this.configService)) {
          const clientData = this.getClientData(target)
          if (!clientData) {
            // welke waarden kan res.data nu hebben?
            // data: string | Blueprint | [string, (DataRecordModel | List)] | ClientData
            const concept = extractConcept(res.effect.action.conceptName)
            if((isDataLink(res.effect.action.conceptName,this.configService) ||
                isConceptName(res.effect.action.conceptName,this.configService))
              && concept){
              this.blueprintNeeded.next({concept:concept,component:target})
            } else if(res.effect.action.conceptName === NoValueType.CALCULATED_BY_ENGINE){
              // todo step A: create blueprint

              if(isComponentName(res.effect.trigger.source,this.configService)){
                // todo find parent blueprint in client data array

              } else throw new Error('bad configuration: source has to be an existing component or conceptName cannot be calculated')
              // step B: getOutputData via res.data en res.effect.action.actionValue
              if(res.effect.action.value instanceof ActionValueModel){
                // dit geeft ons een property type en een propertyValue
                 if(res.effect.action.value.value === 'list'){

                 } else if(res.effect.action.value.value === 'object'){

                 } else throw new Error('invalid action value for action Create Client Data')

              } else if(res.data){
                // data: string | Blueprint | [string, (DataRecord | List)] | ClientData

              }
              this.createClientData(res.effect.action.id,target,,)
            } else throw new Error('conceptName has an invalid configuration for action create client data instance')
            /*          if (res?.data instanceof Array && res.data.length === 2) {
                        const blueprint = this.getClientData( res.data[0])?.blueprint
                        if (!blueprint) throw new Error('No parent blueprint found for component with name ' + res.data[0])
                        if (res.data[1] instanceof Array) {
                          // todo voeg branded type toe zodat je automatisch kan zien dat je alle mogelijkheden hebt gecheckt if(isDataRecordArray) else isDataRecordModel
                          this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, res.data[1],  [])
                        } else if (res.data[1].hasOwnProperty('id') && res.data[1].hasOwnProperty('__typename')) {
                          this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, res.data[1], undefined)
                        } else throw new Error('data has not a correct format ' + res.data[1])
                      } else if (res?.data instanceof Blueprint) {
                        this.createClientData(res.effect.action.id, res.effect.action.target, res.data, undefined, undefined)
                      }*/
          }

        } else if(target===NoValueType.CALCULATED_BY_ENGINE){
          //  target = CALC => todo te berekenen op basis van res.data => creatie van meerdere CD instances mogelijk

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
  public updateClientData(id:ActionIdType|ComponentNameType,data:Blueprint|OutputData) {
    const instance =  this.getClientData(id)
    if(instance){
      instance.update(data)
      this.clientDataUpdated.next(instance)
    } else throw new Error('Client data instance does not exist')
  }
  public createClientData(
    actionId:ActionIdType,
    componentName:ComponentNameType,
    blueprint:Blueprint,
    data?:ServerDataType|undefined,
    errorMessages?:string[]|undefined
  ){
    if(blueprint)
      for(let [k,v] of blueprint.properties.properties){
        if(v instanceof Array && v.length===2 && typeof v[0]==='string' && v[1] instanceof Array && v[1].length===2 && v[1][0] instanceof Blueprint){
          switch (v[0]){
            case 'list':
              // wat hier gebeurt is dat op basis van de blueprint de bijhorende data wordt opgehaald
              this.queryService.getAllRecords(v[1][0].conceptName,v[1][0]).subscribe(res=>{
                const data = ServerData.getData(res.data)
                if(data?.dataMultiple){
                  blueprint.properties.setValuesProperties(k,data.dataMultiple)
                }
              })
              break
            case 'object':
              throw new Error('object property blueprint not implemented yet')
            default:
              throw new Error('type of blueprint property unknown '+v[0])
          }
        }
        // todo komt de enum waarde automatisch mee de eerste keer al, heeft die geen blueprint? => ik denk het niet maar controleer
      }
    if(isOutPutData(data)){
      this.clientData.push(new ClientData(actionId,componentName,blueprint,data,errorMessages))
    }
    const cd = this.getClientData(componentName)
    if(cd) this.clientDataUpdated.next(cd)
  }
  private deleteClientData(name:ActionIdType|ComponentNameType,concept:ConceptNameType){
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

