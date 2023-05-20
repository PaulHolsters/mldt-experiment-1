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
  private fakeQuery(data: ConceptConfigModel): any {
    const GET_PRODUCTS = gql`
                    {
                      getProducts{
                        name
                      }
                    }
        `
    return this.apollo
      .watchQuery<any>({
        query: GET_PRODUCTS
      }).valueChanges
  }
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
          const attrExp = {name:attr.name,dataType:entry[1]}
          const attrCopy = {...attr}
          newObj.attributes.push(Object.assign(attrExp as AttributeComponentModel,attrCopy))}
      })
    return newObj
  }
  public updateData(name:string,value:number|string|undefined){
    const parts = name.split('_')
    const obj = this.data.find(dataObj=>{
      return dataObj.conceptName === parts[1]
    })
    if(obj && obj.attributes){
      if(parts.length===3){
        const attr = obj.attributes.find(attr=>{
          return attr.name === parts[2]
        })
        if(attr){
          if(attr.text && typeof value === 'string'){
            attr.text.value = value
          }
          if(attr.number && typeof value === 'number'){
            attr.number.value = value
          }
          // todo alle andere datatypes

          obj.attributes.splice(obj.attributes.findIndex(attr=>{
            return attr.name === parts[2]
          }),1,attr)
          this.data.splice(this.data.findIndex(dataObj=>{
            return dataObj.conceptName === parts[1]
          }),1,obj)
        }
      } else{
        // Het gaat om een concept
      }
    }
  }
  public getData(dataLink:string[]):AttributeComponentModel{
    const obj = this.data.find(dataObj=>{
      return dataObj.conceptName === dataLink[0]
    })
    if(obj){
      dataLink.splice(0,1)
      let attributes = [...obj.attributes]
      let currentAttr: AttributeComponentModel|undefined = attributes.find(attr=>{
        return attr.name === dataLink[0]
      })
      dataLink.splice(0,1)
      while(currentAttr && dataLink.length>0){
        if(currentAttr.concept){
          // todo ga na of dit echt wel een lijst met attribute component models zijn en geen config models!!!
          attributes = [...currentAttr?.concept?.attributes]
          currentAttr = attributes.find(attr=>{
            return attr.name === dataLink[0]
          })
        } else{
          throw new Error('Datalink bevat teveel entries.')
        }
        dataLink.splice(0,1)
      }
      if(currentAttr!==undefined)
      return currentAttr
    }
    throw new Error('Data niet gevonden.')
  }

  private setDataState(compConcept:ConceptComponentModel){
    // ga elke component af in de statePropertySubjects
    // en verzend de gevraagde data op basis van een data property of een datalink property
    this.storeService.getStatePropertySubjects().forEach(propSubj=>{
      // todo refactor
      let comp = this.storeService.getComponent(propSubj.componentName)
      if(!comp) comp = this.storeService.getComponentThroughAttributes(propSubj.componentName)
      if(propSubj.propName==='dataConcept' && comp && comp.data){
        if(comp.data.conceptName === compConcept.conceptName) propSubj.propValue.next(compConcept)
      } else if(propSubj.propName==='dataLink'&& comp && comp.attributes?.smartphone?.dataLink){
        // todo dit is lastig als de huidige schermgrootte niet voldoet mag de data niet opgestuurd worden
        // todo en omgekeerd als de schermgrootte wijzigt moet ook de data in rekening genomen worden wat nu niet gebeurt
        //      voorlopig houden we er geen rekening mee
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
  public mutate(data: ConceptConfigModel|undefined) {
    if(data){
      // todo get the current data using the configmodel

    } else throw new Error('Geen geldige data configuratie.')
  }
  public async persistData(action:ActionModel){
    let comp = this.storeService.getParentComponentWithProperty(action.sourceName,'data')
    if(!comp){
      comp = this.storeService.getParentComponentWithPropertyThroughAttributes(action.sourceName,'data')
    }
    await this.mutate(comp?.data)
  }
  public async getDataBluePrint(action: ActionModel) {
    // nadat de data opgehaald is van de server wordt deze opgeslagen zodat
    // er door elke component bevraging kan gedaan worden naar deze data
    // eens de data binnen is worden de verschillende componenten die de data
    // of een deel van de data nodig hebben daarvan op de hoogte gebracht door middel van een event
    // welke componenten dat zijn kan worden afgeleid uit de configuratie van de gebruiker
    if (action.targetType === TargetType.Component) {
      let compModel = this.storeService.getComponent(action.targetName)?.data
      if (!compModel) {
        compModel = this.storeService.getComponentThroughAttributes(action.targetName)?.data
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
