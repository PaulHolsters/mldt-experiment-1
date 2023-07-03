import {Injectable} from '@angular/core';
import {StoreService} from "./store.service";
import {ConceptComponentModel} from "./models/Data/ConceptComponentModel";
import {ConceptConfigModel} from "./models/Data/ConceptConfigModel";
import {Apollo, gql} from "apollo-angular";
import {ActionModel} from "./models/ActionModel";
import {QuerySubType} from "./enums/querySubType.enum";
import {TargetType} from "./enums/targetTypes.enum";
import {AttributeComponentModel} from "./models/Data/AttributeComponentModel";
import {NoValueType} from "./enums/no_value_type";
import {MutationType} from "./enums/mutationTypes.enum";
import {AttributeConfigModel} from "./models/Data/AttributeConfigModel";
import {Observable} from "rxjs";
import {ComponentModel} from "./models/ComponentModel";
import {RootComponent} from "./configuration/root/rootComponent";
import {ComponentType} from "./enums/componentTypes.enum";
import {DataObjectModel} from "./models/DataObjectModel";
import {DataRecordModel} from "./models/DataRecordModel";
import {DataSpecificationType} from "./enums/dataSpecifications.enum";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storeService: StoreService, private apollo: Apollo) {
  }
  // todo een taal bedenken voor extra calculated fields based on related data and concepts
  // todo a way to filter data
  // todo a way to order data (sort)
  private objectData: ConceptComponentModel[] = []
  capitalizeFirst(text: string): string {
    return text.charAt(0).toUpperCase() + text.substring(1)
  }
  private getAllAttributes(compName: string, data: ConceptConfigModel | string[]): string {
    if (data instanceof ConceptConfigModel && data.attributes && data.attributes instanceof Array && data.attributes.length > 0) {
      return data.attributes.map(x => {
        if(x.concept && x.concept.attributes && x.concept.attributes instanceof Array){
          // todo zie dat je eindeloos kan gaan indien nodig
          return x.name+`{\nid\n${x.concept.attributes.map(attr=>attr.name).join('\n')}}`
        }
        return x.name || ''
      }).reduce((x, y) => x += '\n' + y, '')
    } else if (!(data instanceof ConceptConfigModel)) {
      let compConfig = RootComponent.getParentComponentConfigWithProperty(compName, 'data')
      if (!compConfig) compConfig = RootComponent.getParentComponentConfigWithPropertyThroughAttributes(compName, 'data')
      if (!compConfig) throw new Error('attributen voor ' + data.toString() + ' en component met naam ' + compName +
        ' werden niet gevonden. Kijk je configuratie na.')
      if (compConfig.data
        && (compConfig.data instanceof ConceptConfigModel)
        && typeof compConfig.data.attributes !== 'string'
        && compConfig.data?.conceptName === data[0]) {
        const concept = compConfig.data.attributes.find(attr => {
          return attr.name === data[1]
        })?.concept
        if (concept && typeof concept.attributes !== 'string') {
          return concept.attributes.map(a => a.name).join('\n')
        }
      } else {
        throw new Error('Attributen niet gevonden. Kijk je configuratie na.')
      }
    }
    throw new Error('Methode getAllAttributes onvolledig of incorrect')
  }
  private createExtendedConceptModel(componentName: string, data: DataObjectModel, compConfig: ConceptConfigModel | string[]|ConceptConfigModel[]): ConceptComponentModel | undefined {
    if (compConfig instanceof ConceptConfigModel) {
      let newObj: ConceptComponentModel = {
        conceptId: data.dataSingle?.id ?? NoValueType.NA,
        conceptName: compConfig.conceptName,
        attributes: [],
        errorMessages: NoValueType.NI,
        conceptBluePrint:data.blueprint,
        conceptData:data.dataSingle,
        dataList:data.dataMultiple
      }
      const configCopy = {...compConfig}
      if (configCopy.attributes && configCopy.attributes instanceof Array){
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
          if(entry2 && attr.name){
            attrExp.dataBlueprint = new Map();
            attrExp.dataBlueprint.set(attr.name,entry2[1]);
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
  public updateData(name: string, value: DataRecordModel[] | number | string | undefined, id?:string) {
    const parts = name.split('_')
    const obj = this.objectData.find(dataObj => {
      return dataObj.conceptId === id || (dataObj.conceptName === parts[0] && !dataObj.dataList)
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
          // todo alle andere datatypes

          (obj.attributes as AttributeConfigModel[]).splice((obj.attributes as AttributeConfigModel[]).findIndex(attr => {
            return attr.name === parts[1]
          }), 1, attr)
          this.objectData.splice(this.objectData.findIndex(dataObj => {
            return dataObj.conceptId === id || (dataObj.conceptName === parts[0] && !dataObj.dataList)
          }), 1, obj)
        }
      } else {
        // Het gaat om een concept
      }
    }
  }
  private isCorrectType(attr: AttributeComponentModel, componentType: ComponentType): boolean {
    switch (componentType) {
      case ComponentType.MultiSelect:
        return attr.multiselect !== undefined
      case ComponentType.InputNumber:
        return attr.number !== undefined
      case ComponentType.InputText:
        return attr.text !== undefined
      case ComponentType.RadioButton:
        return attr.radio !== undefined
      default:
        return true
    }
  }
  public getDataObject(dataLink: string[], componentType: ComponentType,dataSpecs:DataSpecificationType[]): AttributeComponentModel|undefined {
    const dataLinkCopy = [...dataLink]
    const obj = this.objectData.find(dataObj => {
      return dataObj.conceptName === dataLinkCopy[0] && (dataSpecs.reduce(
        (specA,specB)=>
          // todo de getValueFor wordt niet gebruikt
        ((specA.toString() in dataObj && dataObj.getValueFor && dataObj.getValueFor(specA.toString())) && (specB.toString() in dataObj
          && dataObj.getValueFor && dataObj.getValueFor(specB.toString())))
      )
      )
    })
    debugger
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
        currentAttr = this.replaceNVYValues(obj,currentAttr)
         const [k,v] = Object.entries(obj.conceptBluePrint ?? {}).find(([k,v])=>{
          return k===spliced[0]
        }) ?? []
        if(k){
          currentAttr.dataBlueprint = new Map([[k,v]])
        }
        return currentAttr
      }
    }
    return undefined
  }
  private setDataObjectState(nameComponent: string, componentType: ComponentType,dataSpecs:DataSpecificationType[], compConcept?: ConceptComponentModel) {
    this.storeService.getStatePropertySubjects().forEach(propSubj => {
      // todo refactor
      let comp = this.storeService.appConfig?.getComponentConfig(propSubj.componentName)
      if (!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(propSubj.componentName)
      // todo voorlopig is alle data verondersteld voor elke screensize hetzelfde te zijn
      if (propSubj.propName === 'dataConcept' && comp && comp.data instanceof ConceptConfigModel && comp.name === nameComponent) {
        propSubj.propValue.next(compConcept)
      } else if (propSubj.propName === 'dataLink' && comp && comp.attributes?.smartphone?.dataLink) {
        const data: AttributeComponentModel|undefined = this.getDataObject(comp.attributes?.smartphone?.dataLink, componentType,dataSpecs)
        this.storeService.getStatePropertySubject(comp.name, 'dataAttribute')?.propValue.next(data)
      }
    })
  }
  private query(querySubType: QuerySubType, compConfig: ComponentModel,id?:string): any {
    switch (querySubType) {
      case QuerySubType.GetDataBluePrint:
        if (compConfig.data instanceof ConceptConfigModel) {
          const GET_BLUEPRINT = `
                    {
                      get${this.capitalizeFirst(compConfig.data.conceptName)}(blueprint:true){
                      blueprint{
                        ${this.getAllAttributes(compConfig.name, compConfig.data)}
                      }
                      }
                    }
        `
          return this.apollo
            .watchQuery<any>({
              query: gql`${GET_BLUEPRINT}`
            }).valueChanges
        }
        break
      case QuerySubType.GetDataByID:
        if (compConfig.data instanceof ConceptConfigModel) {
          const GET_BY_ID = `{
        get${this.capitalizeFirst(compConfig.data.conceptName)}(id:"${id}",blueprint:true){
        dataSingle{
        ${this.getAllAttributes(compConfig.name, compConfig.data)}
        }
        blueprint{${this.getAllAttributes(compConfig.name, compConfig.data)}}
        }
        }`
          return this.apollo
            .watchQuery<any>({
              query: gql`${GET_BY_ID}`
            }).valueChanges
        }
        break
      case QuerySubType.GetAllData:
        // typisch voor een component zoals een tabel
        if (compConfig.data && !(compConfig.data instanceof ConceptConfigModel)) {
          const GET_ALL = `
                    {
                      get${this.capitalizeFirst(compConfig.data[compConfig.data.length - 1])}{
                      id
                        ${this.getAllAttributes(compConfig.name, compConfig.data)}
                      }
                    }
        `
          return this.apollo
            .watchQuery<any>({
              query: gql`${GET_ALL}`
            }).valueChanges
        } else if(compConfig.data instanceof ConceptConfigModel){
          // het bovenste is voor als je enkel een subconcept nodig zou hebben, mogelijk is dat zelfs nooit het geval
          const GET_ALL = `
                    {
                      get${this.capitalizeFirst(compConfig.data.conceptName)}(multiple:true){
                              dataMultiple{
        ${this.getAllAttributes(compConfig.name, compConfig.data)}
        }
                      }
                    }
        `
          return this.apollo
            .watchQuery<any>({
              query: gql`${GET_ALL}`
            }).valueChanges
        }
        break
    }
  }
  private getMutationParams(data: AttributeConfigModel[] | NoValueType.DBI): string {
    if (data === NoValueType.DBI) return ''
    const strVal = data.map(x => {
        return `\
${(x.number?.value || x.text?.value || x.radio?.value || x.multiselect?.selectedOptions) ? (x.name + ':' || '') : ''}\
${(x.text?.value || x.radio?.value) ? '"' : (x.multiselect?.selectedOptions) ? '[' : ''}${(x.multiselect?.selectedOptions?.length ?? 0) > 0 ? '"' : ''}\
${(x.number?.value || x.text?.value || x.radio?.value || x.multiselect?.selectedOptions?.map(opt => {
          return opt.id
        }).join('","')) || ''}${(x.multiselect?.selectedOptions?.length ?? 0) > 0 ? '"' : ''}\
${(x.text?.value || x.radio?.value) ? '"' : (x.multiselect?.selectedOptions) ? ']' : ''}
`
      }
    )
      .reduce((x, y) => x += `,` + y).trim()
    // todo zorg nog voor een meer ordelijke GQL string hier
    return strVal.charAt(strVal.length - 1) === ',' ? strVal.substring(0, strVal.length - 1) : strVal
  }
  public mutate(data: ConceptConfigModel | string[] | undefined, verb: MutationType,id?:string): Observable<any> | undefined {
    if (data instanceof ConceptConfigModel) {
      const currentData = this.objectData.find(dataObj => {
        return dataObj.conceptName === data.conceptName
      })
      if (currentData) {
        const toEdit = id ? `id:"${id}",`: ''
        const MUTATION = `mutation Mutation {
              ${verb}${this.capitalizeFirst(data.conceptName)}(${toEdit}${this.getMutationParams(data.attributes)}) {
                    dataSingle{id}
              }
            }`
        return this.apollo
          .mutate({
            mutation: gql`${MUTATION}`
          }) as unknown as Observable<any>
      }
      return undefined
    } else throw new Error('Geen geldige data configuratie.')
  }
  private replaceDBIValues(concept: ConceptComponentModel, attr: AttributeComponentModel): AttributeComponentModel {
    const bp = attr.dataBlueprint?.get(attr.name)
    if (attr.radio) {
      if (attr.radio.conceptName === NoValueType.DBI) {
        attr.radio.conceptName = concept.conceptName
      }
      if (attr.radio.values === NoValueType.DBI) {
        if(bp && typeof bp === 'string' && bp.indexOf('enumVal') !== -1){
          const arr1Temp = bp.split('},{enumVal:')
          if (arr1Temp.length > 0 && typeof arr1Temp[0] === 'string')
            arr1Temp[0] = arr1Temp[0].substring(9)
          arr1Temp[arr1Temp.length - 1] = arr1Temp[arr1Temp.length - 1].substring(0, arr1Temp[arr1Temp.length - 1].length - 1)
          const arr2Temp = arr1Temp.map(el => el.trim())
          attr.radio.values = [...arr2Temp]
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
    return attr
  }
  private replaceNVYValues(concept: ConceptComponentModel, attr: AttributeComponentModel): AttributeComponentModel {
    if(attr.text && attr.text.value === NoValueType.NVY && attr.dataServer && typeof attr.dataServer === 'string'){
      attr.text.value = attr.dataServer
    }
    if(attr.number && attr.number.value === NoValueType.NVY && attr.dataServer && typeof attr.dataServer === 'number'){
      attr.number.value = attr.dataServer
    }
    if (attr.radio && attr.radio.value === NoValueType.NVY && attr.dataServer && typeof attr.dataServer === 'string') {
      attr.radio.value = attr.dataServer
    }
    if (attr.multiselect && attr.multiselect.selectedOptions.length===0 && attr.dataServer && attr.dataServer instanceof Array) {
      attr.multiselect.selectedOptions = attr.dataServer
    }
    return attr
  }
  public async persistNewData(action: ActionModel) {
    let comp = this.storeService.appConfig?.getParentComponentConfigWithProperty(action.sourceName, 'data')
    if (!comp) {
      comp = this.storeService.appConfig?.getParentComponentConfigWithPropertyThroughAttributes(action.sourceName, 'data')
    }
    await this.mutate(comp?.data, MutationType.Create)?.subscribe(res => {
      console.log(res, 'yeah!')
    })
  }
  public async persistUpdatedData(action: ActionModel) {
    let comp = this.storeService.appConfig?.getParentComponentConfigWithProperty(action.sourceName, 'data')
    if (!comp) {
      comp = this.storeService.appConfig?.getParentComponentConfigWithPropertyThroughAttributes(action.sourceName, 'data')
    }
    if(comp && comp.data && comp.data instanceof ConceptConfigModel && comp.data.conceptName){
      const cname = comp.data.conceptName
      const conceptId = this.objectData.find(d=>{
        return d.conceptName === cname && d.conceptId !== NoValueType.NA
      })?.conceptId
      if(this.objectData.find(obj=>{return obj.conceptId===conceptId})){
        await this.mutate(comp?.data, MutationType.Update,conceptId)?.subscribe(res => {
          console.log(res, 'yeah!')
        })
      }
    } else throw new Error('No valid conceptId could be found')
  }
  public getDataBluePrint(action: ActionModel) {
    if (action.targetType === TargetType.Component) {
      let compModel = this.storeService.appConfig?.getComponentConfig(action.targetName)
      if (!compModel) {
        compModel = this.storeService.appConfig?.getComponentConfigThroughAttributes(action.targetName)
      }
      if (compModel !== undefined) {
        this.query(QuerySubType.GetDataBluePrint, compModel).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && compModel?.data) {
            const bluePrintData = (res as { data: {} })['data']
            const value = Object.values(bluePrintData)[0] as DataObjectModel
            const compObj = this.createExtendedConceptModel(action.targetName, value, compModel.data)
            if (compObj) {
              this.objectData.push(compObj)
              this.setDataObjectState(compModel.name, compModel.type,[DataSpecificationType.Blueprint], compObj)
            }
          }
        })
      }
    }
  }
  public async getAllData(action: ActionModel) {
    if (action.targetType === TargetType.Component) {
      let comp = this.storeService.appConfig?.getComponentConfig(action.targetName)
      if (!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(action.targetName)
      if (comp !== undefined && comp.data) {
        await this.query(QuerySubType.GetAllData, comp).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && comp?.data) {
            const allData = (res as { data: {} })['data']
            const data = Object.values(allData)[0] as DataObjectModel
            const compObj = this.createExtendedConceptModel(action.targetName, data, comp.data)
            debugger
            if (comp.data && !(comp.data instanceof ConceptConfigModel)) {
              const attributeModel = this.getDataObject(comp.data, comp.type,[DataSpecificationType.DataList])
              // TODO ik denk niet dat een datalist nog nodig is
              if(attributeModel){
                attributeModel.dataList = []
                data?.dataMultiple?.forEach(record => {
                  if (comp && comp.data && !(comp.data instanceof ConceptConfigModel)) {
                    attributeModel?.dataList?.push(record)
                  }
                })
                this.setDataObjectState(comp.name, comp.type,[DataSpecificationType.DataList])
              }
            } else if(compObj) {
              this.objectData.push(compObj)
              this.setDataObjectState(comp.name, comp.type, [DataSpecificationType.DataList],compObj)
            }
          }
        })
      }
    }
    // todo maak een flow waarbij je data kan doorpompen naar een volgende actie
  }
  public async getDataByID(action: ActionModel,id:string) {
    if (action.targetType === TargetType.Component) {
      let comp = this.storeService.appConfig?.getComponentConfig(action.targetName)
      if (!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(action.targetName)
      if (comp !== undefined && comp.data) {
        await this.query(QuerySubType.GetDataByID, comp,id).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && comp?.data) {
            const dataByID = (res as { data: {} })['data']
            const data = Object.values(dataByID)[0] as DataObjectModel
            const compObj = this.createExtendedConceptModel(action.targetName, data, comp.data)
            if (compObj) {
              this.objectData.push(compObj)
              this.setDataObjectState(comp.name, comp.type, [DataSpecificationType.Id,DataSpecificationType.Blueprint],compObj)
            }
          }
          debugger
        })
      }
    }
    // todo maak een flow waarbij je data kan doorpompen naar een volgende actie
  }
  saveConceptId(data: string, action: ActionModel) {
    if (action.targetType === TargetType.Component) {
      let comp = this.storeService.appConfig?.getComponentConfig(action.targetName)
      if (!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(action.targetName)
      if (comp) {
        const concept = this.objectData.find(conceptM => {
          return conceptM.conceptName === comp?.name
        })
        if (concept) {
          concept.conceptId = data
        } else throw new Error('no concept found matching id ' + data)
      } else throw new Error('configuration not in accordance with components')
    }
  }
}
