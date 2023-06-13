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

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storeService: StoreService, private apollo: Apollo) {
  }

  // todo een taal bedenken voor extra calculated fields based on related data and concepts
  // todo a way to filter data
  // todo a way to order data
  private objectData: ConceptComponentModel[] = []
  private listObjectData: ConceptComponentModel[] = []

  private capitalizeFirst(text: string): string {
    return text.charAt(0).toUpperCase() + text.substring(1)
  }

  private getAllAttributes(compName:string,data: ConceptConfigModel|string[]): string {
    // todo voorlopig enkel 1 diep
    if (data instanceof ConceptConfigModel && data.attributes && data.attributes instanceof Array && data.attributes.length > 0) {
      return data.attributes.map(x => {
        return x.name || ''
      }).reduce((x, y) => x += '\n' + y, '')
    } else if(!(data instanceof ConceptConfigModel)){
      let compConfig = RootComponent.getParentComponentConfigWithProperty(compName,'data')
      if(!compConfig) compConfig = RootComponent.getParentComponentConfigWithPropertyThroughAttributes(compName,'data')
      if(!compConfig) throw new Error('attributen voor '+data.toString()+' en component met naam '+compName+
      ' werden niet gevonden. Kijk je configuratie na.')
      if(compConfig.data
        && (compConfig.data instanceof ConceptConfigModel)
        && typeof compConfig.data.attributes !=='string'
        && compConfig.data?.conceptName===data[0]){
        const concept = compConfig.data.attributes.find(attr=>{
          return attr.name===data[1]
        })?.concept
        if(concept && typeof concept.attributes !== 'string'){
          return concept.attributes.map(a=>a.name).join('\n')
        }
      } else{
        throw new Error('Attributen niet gevonden. Kijk je configuratie na.')
      }
      throw new Error('Methode getAllAttributes onvolledig of incorrect')
    }
    return 'name\nbasePrice\ncreationDate'
  }

  private createExtendedConceptModel(componentName: string, data: Object, compConfig: ConceptConfigModel | string[]): ConceptComponentModel|undefined {
    if(compConfig instanceof ConceptConfigModel && !(data instanceof Array)){
      let newObj: ConceptComponentModel = {
        conceptName: compConfig.conceptName,
        attributes: [],
        dataList:NoValueType.NA,
        errorMessages: NoValueType.NI
      }
      const configCopy = {...compConfig}
      if (configCopy.attributes && configCopy.attributes instanceof Array)
        configCopy.attributes?.forEach(attr => {
          const entry = Object.entries(data).find(([k, v]) => {
            return k === attr.name
          })
          if (entry && attr.name) {
            // todo hou er rekening mee dat hier in de toekomst ook geen naam kan zijn (en verder dus ook geen configuratie op attribuut niveau)
            const attrExp = {...attr}
            attrExp.dataType = entry[1];
            (newObj.attributes as AttributeComponentModel[]).push(Object.assign(attrExp as AttributeComponentModel, {}))
          }
        })
      return newObj
    }
    return undefined
  }

  public updateData(name: string, value: number | string | undefined) {
    const parts = name.split('_')
    const obj = this.objectData.find(dataObj => {
      return dataObj.conceptName === parts[0]
    })
    if (obj && obj.attributes) {
      if (parts.length === 2) {
        const attr = (obj.attributes as AttributeConfigModel[]).find(attr => {
          return attr.name === parts[1]
        })
        if (attr) {
          if (attr.text && typeof value === 'string') {
            attr.text.value = value
          }
          if (attr.number && typeof value === 'number') {
            attr.number.value = value
          }
          if (attr.radio && typeof value === 'string') {
            attr.radio.value = value
          }
          // todo alle andere datatypes

          (obj.attributes as AttributeConfigModel[]).splice((obj.attributes as AttributeConfigModel[]).findIndex(attr => {
            return attr.name === parts[1]
          }), 1, attr)
          this.objectData.splice(this.objectData.findIndex(dataObj => {
            return dataObj.conceptName === parts[0]
          }), 1, obj)
          // todo radio button werkt tot hier
        }
      } else {
        // Het gaat om een concept
      }
    }
  }

  private isCorrectType(attr:AttributeComponentModel,componentType:ComponentType):boolean{
    switch (componentType){
      case ComponentType.MultiSelect:
        return attr.multiselect!==undefined
      case ComponentType.InputNumber:
        return attr.number !==undefined
      case ComponentType.InputText:
        return attr.text !== undefined
      case ComponentType.RadioButton:
        return attr.radio !== undefined
      default: return true
    }
  }

  public getDataObject(dataLink: string[],componentType:ComponentType): AttributeComponentModel {
    const dataLinkCopy = [...dataLink]
    const obj = this.objectData.find(dataObj => {
      return dataObj.conceptName === dataLinkCopy[0]
    })
    if (obj) {
      dataLinkCopy.splice(0, 1)
      let attributes = [...obj.attributes]
      let currentAttr: AttributeComponentModel | undefined | string = attributes.find(attr => {
        return typeof attr !== 'string' && attr.name === dataLinkCopy[0] && this.isCorrectType(attr,componentType)
      })
      dataLinkCopy.splice(0, 1)
      while (currentAttr && dataLinkCopy.length > 0) {
        // todo zoek een use case hiervoor
        //      dit is in het specifieke geval je echt een attribuut wilt hebben in plaats van een volledig concept al
        //      dan niet in een lijst
        if (currentAttr instanceof AttributeComponentModel && currentAttr.concept) {
          // todo ga na of dit echt wel een lijst met attribute component models zijn en geen config models!!!
          attributes = [...currentAttr?.concept?.attributes]
          currentAttr = attributes.find(attr => {
            return typeof attr !== 'string' && attr.name === dataLinkCopy[0] && this.isCorrectType(attr,componentType)
          })
        } else {
          throw new Error('Datalink bevat teveel entries.')
        }
        dataLinkCopy.splice(0, 1)
      }
      if (currentAttr && typeof currentAttr !== 'string') {
        // todo probleem is dat getAllData nog niet klaar zit terwijl al wel de cvall gebeurt ???
        currentAttr = this.replaceDBIValues(obj, currentAttr)
        return currentAttr
      }
    }
    throw new Error('Data voor datalink '+dataLink.toString()+' en component type '+componentType+' niet gevonden.')
  }

  private setDataObjectState(nameComponent:string,compConcept: ConceptComponentModel,componentType:ComponentType) {
    // ga elke component af in de statePropertySubjects
    // en verzend de gevraagde data op basis van een data property of een datalink property
    this.storeService.getStatePropertySubjects().forEach(propSubj => {
      if(propSubj.componentName===nameComponent){
        // todo refactor
        let comp = this.storeService.appConfig?.getComponentConfig(propSubj.componentName)
        if (!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(propSubj.componentName)
        // todo voorlopig is alle data verondersteld voor elke screensize hetzelfde te zijn
        if (propSubj.propName === 'dataConcept' && comp && comp.data instanceof ConceptConfigModel) {
          // dit zal er voor zorgen dat multiselect hier niet zal reageren => comp.data is geen instance van
          if (comp.data.conceptName === compConcept.conceptName) propSubj.propValue.next(compConcept)
        } else if (propSubj.propName === 'dataLink' && comp && comp.attributes?.smartphone?.dataLink) {
          // dit zal worden gebruikt bij een multiselect
          const data: AttributeComponentModel = this.getDataObject(comp.attributes?.smartphone?.dataLink,componentType)
          this.storeService.getStatePropertySubject(comp.name, 'dataAttribute')?.propValue.next(data)
        }
      }
    })
  }

  private query(querySubType: QuerySubType, compConfig:ComponentModel): any {
    switch (querySubType) {
      case QuerySubType.GetDataBluePrint:
        if(compConfig.data instanceof ConceptConfigModel){
          const GET_BLUEPRINT = gql`
                    {
                      getBluePrintOf${this.capitalizeFirst(compConfig.data.conceptName)}{
                        ${this.getAllAttributes(compConfig.name,compConfig.data)}
                      }
                    }
        `
          return this.apollo
            .watchQuery<any>({
              query: GET_BLUEPRINT
            }).valueChanges
        }
      break
      case QuerySubType.GetDataByID:
        // todo
        break
      case QuerySubType.GetAllData:
        // todo getAllAttributes geeft "specifications" terug terwijl dit "name" moet zijn ....
        if(compConfig.data && !(compConfig.data instanceof ConceptConfigModel)){
          console.log(`
                    {
                      get${this.capitalizeFirst(compConfig.data[compConfig.data.length-1])}{
                        ${this.getAllAttributes(compConfig.name,compConfig.data)}
                      }
                    }
        `)
          const GET_ALL = gql`
                    {
                      get${this.capitalizeFirst(compConfig.data[compConfig.data.length-1])}{
                      id
                        ${this.getAllAttributes(compConfig.name,compConfig.data)}
                      }
                    }
        `
          return this.apollo
            .watchQuery<any>({
              query: GET_ALL
            }).valueChanges
        }
        break
    }
  }

  private getMutationParams(data: AttributeConfigModel[] | NoValueType.DBI): string {
    if (data === NoValueType.DBI) return ''
    const strVal = data.map(x => {
        return `
      ${(x.number?.value || x.text?.value || x.radio?.value) ? (x.name + ':' || '') : ''}
      ${(x.text?.value || x.radio?.value) ? '"' : ''}${(x.number?.value || x.text?.value || x.radio?.value) || ''}${(x.text?.value || x.radio?.value)  ? '"' : ''}
      `
      }
    )
      .reduce((x, y) => x += `,` + y).trim()
    // todo zorg nog voor een meer ordelijke GQL string hier
    return strVal.charAt(strVal.length - 1) === ',' ? strVal.substring(0, strVal.length - 1) : strVal
  }

  public mutate(data: ConceptConfigModel | string[] | undefined, verb: MutationType): Observable<any> | undefined {
    if (data instanceof ConceptConfigModel) {
      const currentData = this.objectData.find(dataObj => {
        return dataObj.conceptName === data.conceptName
      })
      if (currentData) {
        console.log(`mutation Mutation {
              ${verb}${this.capitalizeFirst(data.conceptName)}(${this.getMutationParams(data.attributes)}) {
                    id
              }
            }`)
/*        mutation Mutation($name: String) {
          createSpecification(name: $name) {
            id
            name
          }
        }*/
        return this.apollo
          .mutate({
            mutation: gql`mutation Mutation {
              ${verb}${this.capitalizeFirst(data.conceptName)}(${this.getMutationParams(data.attributes)}) {
                    id
              }
            }`
          }) as unknown as Observable<any>
      }
      return undefined
    } else throw new Error('Geen geldige data configuratie.')
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

  private replaceDBIValues(concept: ConceptComponentModel, attr: AttributeComponentModel): AttributeComponentModel {
    if (attr.radio) {
      if (attr.radio.conceptName === NoValueType.DBI) {
        attr.radio.conceptName = concept.conceptName
      }
      if (attr.radio.values === NoValueType.DBI) {
        const dataType = (concept.attributes as AttributeConfigModel[]).find(attrConfig => {
          return attrConfig.radio !== undefined
        })?.dataType
        if (dataType && dataType.indexOf('enumVal') !== -1) {
          const arr1Temp = dataType.split('},{enumVal:')
          if (arr1Temp.length > 0 && typeof arr1Temp[0] === 'string')
            arr1Temp[0] = arr1Temp[0].substring(9)
          arr1Temp[arr1Temp.length - 1] = arr1Temp[arr1Temp.length - 1].substring(0, arr1Temp[arr1Temp.length - 1].length - 1)
          const arr2Temp = arr1Temp.map(el => el.trim())
          attr.radio.values = [...arr2Temp]
        }
      }
    } else if(attr.multiselect){
      // op dit punt mag je er al vanuit gaan dat het inderdaad gaat om een multiselect die data nodig heeft
      const dataType = (concept.attributes as AttributeConfigModel[]).find(attrConfig => {
        return attrConfig.multiselect !== undefined
      })?.dataType
      //{name:String}[]
      if (attr.multiselect.conceptName === NoValueType.DBI) {
        attr.multiselect.conceptName = concept.conceptName
      }
      if(attr.multiselect.options === NoValueType.DBI){
        if(dataType && dataType.lastIndexOf('}') === dataType.length-3
          && dataType.lastIndexOf('[') === dataType.length-2
          && dataType.lastIndexOf(']') === dataType.length-1){
          const list = this.listObjectData.find(list=>{
            return list.conceptName == concept.conceptName
          })
          if(list && list.dataList && typeof list.dataList !== 'string'){
            attr.multiselect.options = [...list.dataList]
          }
        }
      }
      if(attr.multiselect.optionLabel === NoValueType.DBI){
        // todo ik stel voor dat standaard altijd de eerste property wordt genomen => later implementeren
      }
    }
    return attr
  }

  public async getDataBluePrint(action: ActionModel) {
    // nadat de data opgehaald is van de server wordt deze opgeslagen zodat
    // er door elke component bevraging kan gedaan worden naar deze data
    // eens de data binnen is worden de verschillende componenten die de data
    // of een deel van de data nodig hebben daarvan op de hoogte gebracht door middel van een event
    // welke componenten dat zijn kan worden afgeleid uit de configuratie van de gebruiker
    if (action.targetType === TargetType.Component) {
      let compModel = this.storeService.appConfig?.getComponentConfig(action.targetName)
      if (!compModel) {
        compModel = this.storeService.appConfig?.getComponentConfigThroughAttributes(action.targetName)
      }
      if (compModel !== undefined) {
        await this.query(QuerySubType.GetDataBluePrint, compModel).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && compModel?.data) {
            const bluePrintData = (res as { data: {} })['data']
            const bluePrint = Object.values(bluePrintData)[0] as Object
            const compObj = this.createExtendedConceptModel(action.targetName, bluePrint, compModel.data)
            if(compObj){
              this.objectData.push(compObj)
              // todo fix bug: hier wordt de data voor multiselect opgehaald terwijl die nog niet klaar is
              this.setDataObjectState(compModel.name,compObj,compModel.type)
            }
          }
        })
      }
    }
  }

  public async getAllData(action: ActionModel) {
    // nadat de data opgehaald is van de server wordt deze opgeslagen zodat
    // er door elke component bevraging kan gedaan worden naar deze data
    // eens de data binnen is worden de verschillende componenten die de data
    // of een deel van de data nodig hebben daarvan op de hoogte gebracht door
    // de data door te sturen via de dataAttribute of dataConcept component property
    if (action.targetType === TargetType.Component) {
      // todo hier aanpassen kan ook in niet data zitten?
      let comp = this.storeService.appConfig?.getComponentConfig(action.targetName)
      if(!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(action.targetName)
      if (comp !== undefined && comp.data) {
        await this.query(QuerySubType.GetAllData, comp).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && comp?.data) {
            const allData = (res as { data: {} })['data']
            const data = Object.values(allData)[0] as []
            if(comp.data && !(comp.data instanceof ConceptConfigModel)){
              const conceptName:string = comp.data[comp.data.length-1]
              const newModel = new ConceptComponentModel(conceptName,NoValueType.NA,[],NoValueType.NI)
              data.forEach(record=>{
                if(comp && comp.data && !(comp.data instanceof ConceptConfigModel) && typeof newModel.dataList !== 'string'){
                  newModel.dataList.push(record)
                }
              })
              this.listObjectData.push(newModel)
              this.setDataListState(comp.name,newModel,comp.type)
            }
          }
        })
      }
    }
    // todo maak een flow waarbij je data kan doorpompen naar een volgende actie
  }

  private setDataListState(nameComponent:string,newModel: ConceptComponentModel, componentType: ComponentType) {
    this.storeService.getStatePropertySubjects().forEach(propSubj => {
      if(propSubj.componentName===nameComponent){
        // todo refactor
        let comp = this.storeService.appConfig?.getComponentConfig(propSubj.componentName)
        if (!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(propSubj.componentName)
        // todo voorlopig is alle data verondersteld voor elke screensize hetzelfde te zijn
        if (propSubj.propName === 'dataConcept' && comp && comp.data instanceof ConceptConfigModel) {
          // dit zal er voor zorgen dat multiselect hier niet zal reageren => comp.data is geen instance van!!!
          debugger
          if (comp.data.conceptName === newModel.conceptName) propSubj.propValue.next(newModel)
          // todo gewoon een extra if toevoegen voor dataConcept maar geeb instance = wellicht ideaal voor multiselect
        } else if (propSubj.propName === 'dataLink' && comp && comp.attributes?.smartphone?.dataLink) {
          // dit zal worden gebruikt bij een multiselect
          const data: ConceptComponentModel|undefined = this.getListData(comp.attributes.smartphone.dataLink,componentType)
          debugger
          // todo probleem dataAttribute is geen ideaal formaat voor deze data
          this.storeService.getStatePropertySubject(comp.name, 'dataAttribute')?.propValue.next(data)
        }
      }
    })
  }

  private getListData(dataLink: string[], componentType: ComponentType):ConceptComponentModel|undefined {
    const dataLinkCopy = [...dataLink]
    return this.listObjectData.find(listDataObj => {
      return listDataObj.conceptName === dataLinkCopy[dataLinkCopy.length-1]
    })
/*    if (obj) {
      dataLinkCopy.splice(0, 1)
      let attributes = [...obj.attributes]
      let currentAttr: AttributeComponentModel | undefined | string = attributes.find(attr => {
        return typeof attr !== 'string' && attr.name === dataLinkCopy[0] && this.isCorrectType(attr,componentType)
      })
      dataLinkCopy.splice(0, 1)
      while (currentAttr && dataLinkCopy.length > 0) {
        // todo zoek een use case hiervoor
        //      dit is in het specifieke geval je echt een attribuut wilt hebben in plaats van een volledig concept al
        //      dan niet in een lijst
        if (currentAttr instanceof AttributeComponentModel && currentAttr.concept) {
          // todo ga na of dit echt wel een lijst met attribute component models zijn en geen config models!!!
          attributes = [...currentAttr?.concept?.attributes]
          currentAttr = attributes.find(attr => {
            return typeof attr !== 'string' && attr.name === dataLinkCopy[0] && this.isCorrectType(attr,componentType)
          })
        } else {
          throw new Error('Datalink bevat teveel entries.')
        }
        dataLinkCopy.splice(0, 1)
      }
      if (currentAttr && typeof currentAttr !== 'string') {
        // todo probleem is dat getAllData nog niet klaar zit terwijl al wel de cvall gebeurt ???
        currentAttr = this.replaceDBIValues(obj, currentAttr)
        return currentAttr
      }
    }*/
    //throw new Error('Data voor datalink '+dataLink.toString()+' en component type '+componentType+' niet gevonden.')
  }
}
