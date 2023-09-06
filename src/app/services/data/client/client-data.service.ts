import { Injectable } from '@angular/core';
import {Action} from "../../../effectclasses/Action";
import {ActionType} from "../../../enums/actionTypes.enum";
import {NoValueType} from "../../../enums/no_value_type";
import {AttributeComponentModel} from "../../../models/DataRepresentation/AttributeComponentModel";
import {Blueprint} from "./Blueprint";
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {ActionsService} from "../../actions.service";
import {Subject} from "rxjs";
import {ClientData} from "./ClientData";
import {ActionIdType, ComponentNameType, ConceptNameType} from "../../../types/type-aliases";
import {DataRecordModel} from "../../../models/DataRecordModel";
import {FunctionType} from "../../../enums/functionTypes.enum";
import utilFunctions from "../../../utils/utilFunctions";
import {ConfigService} from "../../config.service";
import {QueryService} from "../server/queries/query.service";
import {ServerData} from "../server/ServerData";

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  public clientDataUpdated = new Subject<ClientData>()
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:ActionIdType}>()
  private clientData: ClientData[] = []
  constructor(private actionsService:ActionsService,private configService:ConfigService,private queryService:QueryService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions() {
    this.actionsService.bindToAction(new Action('', ActionType.CreateClientData))?.subscribe(res => {
      if (res) {
        const clientData = this.getClientData(res.effect.action.id, res.effect.action.target)
        if (!clientData) {
          // todo vul hardcoded data aan!
          if (res.data instanceof Array && res.data.length === 2) {
            const blueprint = this.getClientData(res.effect.action.id, res.data[0])?.blueprint
            if (!blueprint) throw new Error('No parent blueprint found for component with name ' + res.data[0])
            if (res.data[1] instanceof Array) {
              this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, res.data[1], NoValueType.NA, [], [])
            } else if (res.data[1] instanceof AttributeComponentModel) {
              this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, NoValueType.NVY, NoValueType.NA, [res.data[1]], [])
            } else if (typeof res.data[1] === 'string') {
              this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, NoValueType.NVY, NoValueType.NA, [], [res.data[1]])
            } else if (res.data[1].hasOwnProperty('id') && res.data[1].hasOwnProperty('__typename')) {
              this.createClientData(res.effect.action.id, res.effect.action.target, blueprint, res.data[1], NoValueType.NA, [], [])
            } else throw new Error('data has not a correct format ' + res.data[1])
          } else if (res.data instanceof Blueprint) {
            this.createClientData(res.effect.action.id, res.effect.action.target, res.data, NoValueType.NVY, NoValueType.NA, [], [])
          } else throw new Error('data has not a correct format ' + res.data)
        }
        this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
      }
    })
  }
  public updateClientData(id:ActionIdType,data:Blueprint|DataRecordModel|(DataRecordModel|null)[]) {
    const instance =  this.clientData.find(cd=>{
      return cd.id === id
    })
    if(instance){
      instance.update(data)
    } else throw new Error('Client data instance does not exist')
  }
  public createClientData(
    actionId:ActionIdType,
    componentName:ComponentNameType,
    blueprint:Blueprint,
    data:(DataRecordModel|null)[]|DataRecordModel|NoValueType.NVY,
    hardcodedData:any|NoValueType.NA,
    attributes:AttributeComponentModel[],
    errorMessages:string[]|NoValueType.NI
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
    this.clientData.push(new ClientData(actionId,componentName,blueprint,data,hardcodedData,attributes,errorMessages))
  }
  public getAttribute(id:ActionIdType,name:ComponentNameType,dataLink: string[]):AttributeComponentModel|undefined{
    // todo herwerk zodat je een willekeurige nesting kan hebben
    if(dataLink.length<2) throw new Error('Provided datalink array has not all data needed')
    const clientData = this.getClientData(id,name)
    if(!clientData || !clientData.attributes || clientData.attributes.length===0 || clientData.attributes === NoValueType.NA) return undefined
    const attr = clientData.attributes.find(attr=>{
      return attr.name===dataLink[1]
    })
    if(!attr) return undefined
    let currentAttr = {...attr}
    currentAttr = this.replaceDBIValues(clientData, currentAttr)
    currentAttr = this.replaceNVYValues(clientData, currentAttr)
    currentAttr = this.pipeValue(clientData, currentAttr)
    const [k, v] = Object.entries(clientData.blueprint ?? {}).find(([k, v]) => {
      return k === dataLink[1]
    }) ?? []
    if (k) {
      currentAttr.dataBlueprint = new Map([[k, v]])
    }
    return currentAttr
  }
  public getClientData(id:ActionIdType,name:ComponentNameType): ClientData | undefined {
    return this.clientData.find(cd=>{
      return cd.id === id && cd.name === name
    })
    // dit haalt de clientdata op en vervangt ongedefinieerde te berekenen waarden, daarnaast pakt het een specifiek attribuut
    // in deze clientdata
    /*    const isDataObject = function(self:DataService,specs:DataSpecificationType[],obj:ClientDataRenderModel):boolean{
          let isObj = true
          while (specs.length>0){
            const spec:DataSpecificationType = specs.pop() as DataSpecificationType
            if(!(spec in obj && obj.getValueFor && obj.getValueFor(spec))){
              isObj = false
            }
          }
          return isObj
        }
        const dataLinkCopy = [...dataLink]
        const obj = this.clientData.find(clientDataInstance => {
          return clientDataInstance.conceptName === dataLinkCopy[0]
            // geeft de waarde true terug of false naargelang de dataSpecs
            && isDataObject(this,dataSpecs,clientDataInstance)
          /!*        && (dataSpecs.reduce(
                    (specA, specB) => {
                      const copyDataObj = new ClientDataRenderModel(
                        dataObj.conceptName,
                        dataObj.attributes,
                        dataObj.errorMessages,
                        dataObj.dataList,
                        dataObj.conceptData,
                        dataObj.conceptBluePrint)
                      return ((specA.toString() in copyDataObj && copyDataObj.getValueFor && copyDataObj.getValueFor(specA.toString())) && (specB.toString() in copyDataObj
                        && copyDataObj.getValueFor && copyDataObj.getValueFor(specB.toString())))
                    }
                  ))*!/
        })
        if (obj) {
          dataLinkCopy.splice(0, 1)
          let attributes = [...obj.attributes] // leeg bij blueprint
          let currentAttr: AttributeComponentModel | undefined | string = attributes.find(attr => {
            return typeof attr !== 'string' && attr.name === dataLinkCopy[0] && this.isCorrectType(attr, componentType)
          })
          let spliced = dataLinkCopy.splice(0, 1)
          while (currentAttr && dataLinkCopy.length > 0) {
            // todo zoek een use case hiervoor
            //      dit is in het specifieke geval je echt een attribuut wilt hebben in plaats van een volledig concept al
            //      dan niet in een lijst
            if (currentAttr instanceof AttributeComponentModel && currentAttr.concept) {
              // todo ga na of dit echt wel een lijst met attribute component models zijn en geen config models!!!
              attributes = [...currentAttr?.concept?.attributes]
              currentAttr = attributes.find(attr => {
                return typeof attr !== 'string' && attr.name === dataLinkCopy[0] && this.isCorrectType(attr, componentType)
              })
            } else {
              throw new Error('Datalink bevat teveel entries.')
            }
            spliced = dataLinkCopy.splice(0, 1)
          }
          if (currentAttr && typeof currentAttr !== 'string') {
            currentAttr = this.replaceDBIValues(obj, currentAttr)
            currentAttr = this.replaceNVYValues(obj, currentAttr)
            currentAttr = this.pipeValue(obj,currentAttr)
            const [k, v] = Object.entries(obj.blueprint ?? {}).find(([k, v]) => {
              return k === spliced[0]
            }) ?? []
            if (k) {
              currentAttr.dataBlueprint = new Map([[k, v]])
            }
            return currentAttr
          }
        }
        return undefined*/
  }
  updateData(name: string, value: string|number | DataRecordModel[] | NoValueType.DBI | undefined){
    // todo
    /*
    const parts = name.split('_')
    const obj = this.clientData.find(instance => {
      return instance.record && instance.record.id === id
        || (instance.conceptName === parts[0] && !instance.listOfRecords)
    })
    if (obj && obj.attributes) {
      if (parts.length === 2) {
        const attr = (obj.attributes as AttributeConfigModel[]).find(attr => {
          return attr.name === parts[1]
        })
        if (attr) {
          if (attr.text && typeof value === 'string') {
            attr.text.value = value
            attr.dataServer = value
          }
          if (attr.number && typeof value === 'number') {
            attr.number.value = value
            attr.dataServer = value
          }
          if (attr.radio && typeof value === 'string') {
            attr.radio.value = value
            attr.dataServer = value
          }
          if (attr.multiselect && value instanceof Array) {
            attr.multiselect.selectedOptions = value
            attr.dataServer = value
          }
          // todo alle andere datatypes (form controls) => refactor dit is gebonden aan specifieke componenten wat niet goed is

          (obj.attributes as AttributeConfigModel[]).splice((obj.attributes as AttributeConfigModel[]).findIndex(attr => {
            return attr.name === parts[1]
          }), 1, attr)
          this.clientData.splice(this.clientData.findIndex(instance => {
            return instance.record?.id === id || (instance.conceptName === parts[0] && !instance.listOfRecords)
          }), 1, obj)
        }
      } else {
        // Het gaat om een concept
      }
    }*/
  }
  private deleteClientData(name:ComponentNameType,concept:ConceptNameType){
    // todo
    // wanneer een component gedestroyed wordt
  }

  //***********************************     data manipulation ACTIONS         ***************************************************************/
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
  private calculatePipeValue(radioValue:{label:string,value:string},array:FunctionType[]):{label:string,value:string}{
    let valCopy = {...radioValue}
    array.forEach(func=>{
      switch (func){
        case FunctionType.ToLowerCase:
          valCopy.label = utilFunctions.toLowerCase(valCopy.label)
          break
        case FunctionType.ToUpperCase:
          valCopy.label = utilFunctions.toUpperCase(valCopy.label)
          break
        case FunctionType.CreateSpaces:
          valCopy.label = utilFunctions.createSpaces(valCopy.label)
          break
        case FunctionType.CapitalizeFirstLetter:
          valCopy.label = utilFunctions.capitalizeFirst(valCopy.label)
          break
      }
    })
    return valCopy
  }
  private pipeValue(concept:ClientData, attr:AttributeComponentModel):AttributeComponentModel{
    if (attr.radio && attr.radio.pipe instanceof Array) {
      const pipeCopy = attr.radio.pipe
      if(attr.radio.radioValues instanceof Array && pipeCopy)
        attr.radio.radioValues = attr.radio.radioValues.map(val =>{ return this.calculatePipeValue(val,pipeCopy)})
    }
    return attr
  }
  private replaceDBIValues(clientData: ClientData, attr: AttributeComponentModel): AttributeComponentModel {
    const bp = attr.dataBlueprint?.get(attr.name)
    if (attr.radio) {
      if (attr.radio.conceptName === NoValueType.DBI) {
        const cn = this.configService.getEffectsForComponent(clientData.name).find(e=>{
          return e.action.id===clientData.id
        })?.action?.conceptName
        if(cn)
          attr.radio.conceptName = cn
        else throw new Error('no conceptname found for concept '+clientData)
      }
      if (attr.radio.radioValues === NoValueType.DBI) {
        if (bp && bp instanceof Array && bp.length==2 && bp[0]==='enum'){
          if(bp[1].length===0){
            attr.radio.radioValues = []
          } else {
            attr.radio.radioValues = bp[1].map(enumVal=>{
              if(typeof enumVal === 'string'){
                return {label:utilFunctions.createSpaces(utilFunctions.capitalizeFirst(enumVal)),value:enumVal}
              } else throw new Error('Invalid radio button configuration => enum values are not of type string '+enumVal)
            })
          }
        }
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
