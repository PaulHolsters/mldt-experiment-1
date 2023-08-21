import {Injectable} from '@angular/core';
import {UpdateViewService} from "./updateView.service";
import {ClientDataRenderModel} from "../models/Data/ClientDataRenderModel";
import {ClientDataConfigModel} from "../models/Data/ClientDataConfigModel";
import {AttributeComponentModel} from "../models/Data/AttributeComponentModel";
import {NoValueType} from "../enums/no_value_type";
import {Subject} from "rxjs";
import {ComponentType} from "../enums/componentTypes.enum";
import {DataObjectModel} from "../models/DataObjectModel";
import {DataRecordModel} from "../models/DataRecordModel";
import {DataSpecificationType} from "../enums/dataSpecifications.enum";
import {FunctionType} from "../enums/functionTypes.enum";
import utilFunctions from "../utils/utilFunctions";
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {ActionType} from "../enums/actionTypes.enum";
import {Action} from "../effectclasses/Action";
import {TriggerType} from "../enums/triggerTypes.enum";
import {Apollo} from "apollo-angular";
import {QueryService} from "./queries/query.service";
import {MutationService} from "./mutations/mutation.service";
import {ActionIdType, BlueprintType, ComponentNameType, ConceptNameType} from "../types/type-aliases";

@Injectable({
  providedIn: 'root'
})
export class DataService{
  //  todo een taal bedenken voor extra calculated fields based on related data and concepts
  //  todo a way to filter data
  //  todo a way to order data (sort)
  public actionFinished = new Subject<{trigger:TriggerType,source:ActionIdType}>()
  constructor(private configService:ConfigService,
              private storeService: UpdateViewService,
              private apollo: Apollo,
              private actionsService:ActionsService,
              private queryService:QueryService,
              private mutationService:MutationService
  ) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){

    /********************     queries     ****************************/

    this.actionsService.bindToAction(new Action(ActionType.GetBluePrint))?.subscribe(async res => {
      if (res) {
        this.queryService.getNumberOfNesting(res.effect.action.conceptName).subscribe(resFirst=>{
          if(typeof resFirst.numberOfNesting === 'number'){
            this.queryService.getBlueprint(res.effect.action.conceptName,resFirst.numberOfNesting).subscribe(resOrErr=>{
              if(resOrErr.blueprint){
                // todo voeg code toe die effectief omgaat met errors
                //      nu ga ik er voor het gemak van uit dat dit nooit errored
                this.createClientData(
                  new ClientDataRenderModel(
                    res.effect.action.conceptName,
                    res.effect.action.target,
                    [],
                    NoValueType.NI,
                    undefined,
                    undefined,
                    this.createBlueprint(resOrErr.blueprint)
                    )
                )
              }
              this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
            })
          }
        })
      }
    })
    this.actionsService.bindToAction(new Action(ActionType.GetInstance))?.subscribe(async res => {
      if (res) {
        if (typeof res.data === 'string') {
          // todo zie dat je hier van een ObjectId type kan uitgaan
          const blueprint = this.getClientData(res.effect.action.conceptName, res.effect.action.target)?.blueprint
          if (blueprint) {
            this.queryService.getSingleRecord(res.effect.action.conceptName, blueprint, res.data).subscribe(errorOrResult=>{
              if(errorOrResult && errorOrResult.dataSingle){
                this.updateClientData(res.effect.action.conceptName,res.effect.action.target,errorOrResult.dataSingle)
              }
              this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
            })
          }
        }
      }
    })
    this.actionsService.bindToAction(new Action(ActionType.GetAllInstances))?.subscribe(async res => {
      if (res) {
        const blueprint = this.getClientData(res.effect.action.conceptName, res.effect.action.target)?.blueprint
        if (blueprint) {
          this.queryService.getAllRecords(res.effect.action.conceptName, blueprint).subscribe(errorOrResult=>{
            if(errorOrResult && errorOrResult.dataMultiple){
              this.updateClientData(res.effect.action.conceptName,res.effect.action.target,errorOrResult.dataMultiple)
            }
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          })
        }
      }
    })

    /********************     mutations     ****************************/

    this.actionsService.bindToAction(new Action(ActionType.DeleteInstance))?.subscribe(res => {
      // todo werk data als any weg
      if (res) {
        // todo verder uitwerken
        this.mutationService.deleteRecordOrHandleError(res.data.id)?.subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })
      }
    })
    this.actionsService.bindToAction(new Action(ActionType.CreateInstance))?.subscribe(res=>{
      if(res){
        const clientData = this.getClientData(res.effect.action.conceptName,res.effect.action.target)
        if(!clientData) throw new Error('No valid clientData found')
        this.mutationService.createRecordOrHandleError(clientData).subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })
      }
    })
    this.actionsService.bindToAction(new Action(ActionType.UpdateInstance))?.subscribe(res=>{
      if(res){
        this.mutationService.persistUpdatedData(res.effect.trigger)
      }
    })
  }
  /***********************************     CLIENT DATA ARRAY        ***************************************************************/
  private clientData: ClientDataRenderModel[] = []
  /***********************************     CLIENT DATA ACTIONS         ***************************************************************/
  public createClientData(clientDataInstance:ClientDataRenderModel){
    this.clientData.push(clientDataInstance)
  }
  private createBlueprint(blueprintStr:string):BlueprintType{
    const bp = new Map<string,string|(DataRecordModel|null)[]>()

    return bp
  }
  public getClientData(conceptName:ConceptNameType,component:ComponentNameType,dataLink?: string[]): ClientDataRenderModel | undefined {
    const isDataObject = function(self:DataService,specs:DataSpecificationType[],obj:ClientDataRenderModel):boolean{
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
      /*        && (dataSpecs.reduce(
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
              ))*/
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
    return undefined
  }
  public updateClientData(concept: ConceptNameType, component: ComponentNameType,data:BlueprintType|DataRecordModel|(DataRecordModel|null)[]) {
    const instance =  this.clientData.find(cd=>{
      return cd.componentName === component && cd.conceptName === concept
    })
    if(instance){
      if(data instanceof Array){
        instance.listOfRecords = data
      }  else if(data instanceof Map){
        instance.blueprint = data
      } else if(data.hasOwnProperty('id') && data.hasOwnProperty('__typename')){
        instance.record = data
      } else throw new Error('Data has an invalid format: '+data.toString())
    } else throw new Error('Client data instance does not exist')
/*    // todo id moet meegegeven worden of iets gelijkaardigs zodat
    //      update weet waar het moet zoeken
    debugger
    const parts = name.split('_')
    // todo ook hier wordt nu het verkeerde objecdt genomen
    //      HOOG TIJD OM HIER DUIDELIJKE SELECTIE LOGICA VAN TE MAKEN!
    const obj = this.clientData.find(instance => {
      return instance.record && instance.record.id === id
        || (instance.conceptName === parts[0] && !instance.listOfRecords) // todo dit is te algemeen als voorwaarde
    })
    debugger
    if (obj && obj.attributes) {
      debugger
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
          debugger
        }
      } else {
        // Het gaat om een concept
      }
    }*/
  }
  public deleteClientData(name:ComponentNameType,concept:ConceptNameType){
    // wanneer een component gedestroyed wordt
  }
  /***********************************     data manipulation ACTIONS         ***************************************************************/

  private createExtendedConceptModel(componentName: string, data: DataObjectModel, compConfig: ClientDataConfigModel | string[] | ClientDataConfigModel[]): ClientDataRenderModel | undefined {
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
  }
  private isCorrectType(attr: AttributeComponentModel, componentType: ComponentType): boolean {
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
  }
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
  private pipeValue(concept:ClientDataRenderModel, attr:AttributeComponentModel):AttributeComponentModel{
    if (attr.radio && attr.radio.pipe instanceof Array) {
      const pipeCopy = attr.radio.pipe
      if(attr.radio.radioValues instanceof Array && pipeCopy)
      attr.radio.radioValues = attr.radio.radioValues.map(val =>{ return this.calculatePipeValue(val,pipeCopy)})
    }
    return attr
  }
  private replaceDBIValues(concept: ClientDataRenderModel, attr: AttributeComponentModel): AttributeComponentModel {
    const bp = attr.dataBlueprint?.get(attr.name)
    if (attr.radio) {
      if (attr.radio.conceptName === NoValueType.DBI) {
        attr.radio.conceptName = concept.conceptName
      }
      if (attr.radio.radioValues === NoValueType.DBI) {
        if (bp && typeof bp === 'string' && bp.indexOf('enumVal') !== -1) {
          const arr1Temp = bp.split('},{enumVal:')
          if (arr1Temp.length > 0 && typeof arr1Temp[0] === 'string')
            arr1Temp[0] = arr1Temp[0].substring(9)
          arr1Temp[arr1Temp.length - 1] = arr1Temp[arr1Temp.length - 1].substring(0, arr1Temp[arr1Temp.length - 1].length - 1)
          const arr2Temp = arr1Temp.map(el => el.trim()).map(el=>{
            return {label:el,value:el}
          })
          attr.radio.radioValues = [...arr2Temp]
        }
      }
    } else if (attr.multiselect) {
      if (attr.multiselect.conceptName === NoValueType.DBI) {
        attr.multiselect.conceptName = concept.conceptName
      }
      if (attr.multiselect.options === NoValueType.DBI) {
        if (bp instanceof Array) {
          attr.multiselect.options = [...bp]
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
      // todo voor het gebruik van een functie zou je een function value type kunnen aanmaken?
      //    vervang novaluetype maar gewoon gelijk door valuetype
    }
    return attr
  }
  private replaceNVYValues(concept: ClientDataRenderModel, attr: AttributeComponentModel): AttributeComponentModel {
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
