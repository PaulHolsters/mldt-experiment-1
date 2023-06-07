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

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storeService: StoreService, private apollo: Apollo) {
  }
  // todo een taal bedenken voor extra calculated fields based on related data and concepts
  // todo a way to filter data
  // todo a way to order data
  private data:ConceptComponentModel[] = []
  private capitalizeFirst(text:string):string{
    return text.charAt(0).toUpperCase()+text.substring(1)
  }
  private getAllAttributes(data:ConceptConfigModel):string{
    // todo voorlopig enkel 1 diep
    if(data.attributes && data.attributes instanceof Array && data.attributes.length>0){
      return data.attributes.map(x=>{return x.name||''}).reduce((x,y)=>x+='\n'+y,'')
    }
    // todo haal de verschillende attributen op via de business types configuratie
    return 'name\nbasePrice\ncreationDate'
  }
  private createExtendedConceptModel(componentName:string, data:Object, compConfig:ConceptConfigModel):ConceptComponentModel{
    let newObj: ConceptComponentModel = {conceptName:compConfig.conceptName,attributes:[],errorMessages:NoValueType.NI}
    const configCopy = {...compConfig}
    if(configCopy.attributes && configCopy.attributes instanceof Array)
      configCopy.attributes?.forEach(attr=>{
        const entry = Object.entries(data).find(([k,v])=>{
          return k === attr.name
        })
        if(entry && attr.name){
          // todo hou er rekening mee dat hier in de toekomst ook geen naam kan zijn (en verder dus ook geen configuratie op attribuut niveau)
          const attrExp = {...attr}
          attrExp.dataType = entry[1];
          (newObj.attributes as AttributeComponentModel[]).push(Object.assign(attrExp as AttributeComponentModel,{}))}
      })
    return newObj
  }
  public updateData(name:string,value:number|string|undefined){
    const parts = name.split('_')
    const obj = this.data.find(dataObj=>{
      return dataObj.conceptName === parts[0]
    })
    if(obj && obj.attributes){
      if(parts.length===2){
        const attr = (obj.attributes as AttributeConfigModel[]).find(attr=>{
          return attr.name === parts[1]
        })
        if(attr){
          if(attr.text && typeof value === 'string'){
            attr.text.value = value
          }
          if(attr.number && typeof value === 'number'){
            attr.number.value = value
          }
          // todo alle andere datatypes

          (obj.attributes as AttributeConfigModel[]).splice( (obj.attributes as AttributeConfigModel[]).findIndex(attr=>{
            return attr.name === parts[1]
          }),1,attr)
          this.data.splice(this.data.findIndex(dataObj=>{
            return dataObj.conceptName === parts[0]
          }),1,obj)
        }
      } else{
        // Het gaat om een concept
      }
    }
  }
  public getData(dataLink:string[]):AttributeComponentModel{
    const dataLinkCopy = [...dataLink]
    const obj = this.data.find(dataObj=>{
      return dataObj.conceptName === dataLinkCopy[0]
    })
    if(obj){
      dataLinkCopy.splice(0,1)
      let attributes = [...obj.attributes]
      let currentAttr: AttributeComponentModel|undefined = attributes.find(attr=>{
          return attr.name === dataLinkCopy[0]
      })
      dataLinkCopy.splice(0,1)
      while(currentAttr && dataLinkCopy.length>0){
        if(currentAttr.concept){
          // todo ga na of dit echt wel een lijst met attribute component models zijn en geen config models!!!
          attributes = [...currentAttr?.concept?.attributes]
          currentAttr = attributes.find(attr=>{
            return attr.name === dataLinkCopy[0]
          })
        } else{
          throw new Error('Datalink bevat teveel entries.')
        }
        dataLinkCopy.splice(0,1)
      }
      if(currentAttr!==undefined){
        currentAttr = this.replaceDBIValues(obj,currentAttr)
        return currentAttr
      }
    }
    throw new Error('Data niet gevonden.')
  }
  private setDataState(compConcept:ConceptComponentModel){
    // ga elke component af in de statePropertySubjects
    // en verzend de gevraagde data op basis van een data property of een datalink property
    this.storeService.getStatePropertySubjects().forEach(propSubj=>{
      // todo refactor
      let comp = this.storeService.appConfig?.getComponentConfig(propSubj.componentName)
      if(!comp) comp = this.storeService.appConfig?.getComponentConfigThroughAttributes(propSubj.componentName)
      // todo voorlopig is alle data verondersteld voor elke screensize hetzelfde te zijn
      if(propSubj.propName==='dataConcept' && comp && comp.data){
        if(comp.data.conceptName === compConcept.conceptName) propSubj.propValue.next(compConcept)
      } else if(propSubj.propName==='dataLink'&& comp && comp.attributes?.smartphone?.dataLink){
        const data:AttributeComponentModel = this.getData(comp.attributes?.smartphone?.dataLink)
        this.storeService.getStatePropertySubject(comp.name,'dataAttribute')?.propValue.next(data)
       }
    })
  }
  private query(querySubType: QuerySubType, data: ConceptConfigModel): any {
    switch (querySubType) {
      case QuerySubType.GetDataBluePrint:
        const GET_BLUEPRINT = gql`
                    {
                      getBluePrintOf${this.capitalizeFirst(data.conceptName)}{
                        ${this.getAllAttributes(data)}
                      }
                    }
        `
        return this.apollo
          .watchQuery<any>({
            query: GET_BLUEPRINT
          }).valueChanges
      case QuerySubType.GetDataByID:
        // todo
        break
      case QuerySubType.GetAllData:
        // todo
        break
    }
  }
  private getMutationParams(data:AttributeConfigModel[]|NoValueType.DBI):string{
    if(data===NoValueType.DBI) return ''
    const strVal = data.map(x=>{return `
      ${(x.number?.value||x.text?.value) ? (x.name+':'||'') : ''}
      ${x.text?.value ? '"' : ''}${(x.number?.value||x.text?.value)||''}${x.text?.value ? '"' : ''}`})
      .reduce((x, y)=>x+=`,`+y).trim()
    // todo zorg nog voor een meer ordelijke GQL string hier
    return strVal.charAt(strVal.length-1) === ',' ? strVal.substring(0,strVal.length-1) : strVal
  }
  public mutate(data: ConceptConfigModel|undefined, verb:MutationType): Observable<any>|undefined {
    if(data){
      const currentData = this.data.find(dataObj=>{
        return dataObj.conceptName === data.conceptName
      })
      if(currentData){
        return this.apollo
          .mutate({
            mutation: gql`mutation Mutation {
              ${verb}${this.capitalizeFirst(data.conceptName)}(${this.getMutationParams(data.attributes)}) {
                    id
              }
            }`
          }) as unknown as Observable<any>
      } return undefined
    } else throw new Error('Geen geldige data configuratie.')
  }
  public async persistNewData(action:ActionModel){
    let comp = this.storeService.appConfig?.getParentComponentConfigWithProperty(action.sourceName,'data')
    if(!comp){
      comp = this.storeService.appConfig?.getParentComponentConfigWithPropertyThroughAttributes(action.sourceName,'data')
    }
    await this.mutate(comp?.data,MutationType.Create)?.subscribe(res=>{
      console.log(res,'yeah!')
    })
  }
  private replaceDBIValues(concept:ConceptComponentModel,attr:AttributeComponentModel):AttributeComponentModel{
    if(attr.radio){
      if(attr.radio.conceptName === NoValueType.DBI){
        attr.radio.conceptName = concept.conceptName
      }
      if(attr.radio.values === NoValueType.DBI){
        const dataType = (concept.attributes as AttributeConfigModel[]).find(attrConfig=>{
          return attrConfig.radio !== undefined
        })?.dataType
        if(dataType && dataType.indexOf('enumVal')!==-1){
          const arr1Temp = dataType.split('},{enumVal:')
          if(arr1Temp.length>0 && typeof arr1Temp[0] === 'string')
            arr1Temp[0] = arr1Temp[0].substring(9)
          arr1Temp[arr1Temp.length-1] = arr1Temp[arr1Temp.length-1].substring(0,arr1Temp[arr1Temp.length-1].length-1)
          const arr2Temp = arr1Temp.map(el=>el.trim())
          attr.radio.values = [...arr2Temp]
        }
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
      let compModel = this.storeService.appConfig?.getComponentConfig(action.targetName)?.data
      if (!compModel) {
        compModel = this.storeService.appConfig?.getComponentConfigThroughAttributes(action.targetName)?.data
      }
      if (compModel !== undefined) {
        await this.query(QuerySubType.GetDataBluePrint, compModel).subscribe((res: unknown)=>{
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && compModel) {
            const bluePrintData = (res as { data: {} })['data']
            const bluePrint = Object.values(bluePrintData)[0] as Object
            const compObj = this.createExtendedConceptModel(action.targetName, bluePrint, compModel)
            this.data.push(compObj)
            this.setDataState(compObj)
          }
        })
      }
    }
  }
}
