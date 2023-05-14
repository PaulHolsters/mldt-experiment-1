import {Injectable} from '@angular/core';
import {StoreService} from "./store.service";
import {ConceptComponentModel} from "./models/Data/ConceptComponentModel";
import {ConceptConfigModel} from "./models/Data/ConceptConfigModel";
import {Apollo, gql} from "apollo-angular";
import {TextAttributeComponentModel} from "./models/Data/TextAttributeComponentModel";
import {ActionModel} from "./models/ActionModel";
import {QuerySubType} from "./enums/querySubType.enum";
import {TargetType} from "./enums/targetTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storeService: StoreService, private apollo: Apollo) {
  }
  // todo een taal bedenken voor extra calculated fields based on related data and concepts
  // todo a way to filter data
  // todo a way to order data
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
  private query(querySubType:QuerySubType,data: ConceptConfigModel): any {
    switch(querySubType){
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
  private fakeMutation(data: ConceptComponentModel) {

  }
  public mutationEvent(data: ConceptComponentModel) {
    this.fakeMutation(data)
  }
/*  public componentReady(name: string) {
    let componentConfig = this.storeService.getComponent(name)
    if (!componentConfig) {
      componentConfig = this.storeService.getComponentThroughAttributes(name)
    }
    if (componentConfig && componentConfig.data) {
      this.fakeQuery(componentConfig.data).subscribe((res:unknown)=>{
        const productData = (res as {data:{getProducts:any[]}})['data']
          if (componentConfig && componentConfig.data) {
            const val = productData['getProducts'][0]
            if (typeof val === 'object') {
              const attr:AttributeModel[] = []
              Object.entries(val).forEach(([k,v])=>{
                if(k!=='__typename') attr.push(new AttributeModel(k,v as (string|number|ConceptModel|Date|undefined)))
              })
              const conceptName = val.__typename
              this.storeService.setDataState( name, new ConceptModel(conceptName, attr),componentConfig.data)
            }
          }
      })
    }
  }*/
  public getDataBluePrint(action:ActionModel){
    if(action.targetType === TargetType.Component){
      const compModel = this.storeService.getComponent(action.targetName)?.data
      if(compModel){
        this.query(QuerySubType.GetDataBluePrint, compModel).subscribe((res:unknown)=>{
          if(res && typeof res === 'object' && res.hasOwnProperty('data')){
            const bluePrintData = (res as {data:{}})['data']
            const bluePrint = Object.values(bluePrintData)[0] as ConceptComponentModel
            this.storeService.setDataState(action.targetName,bluePrint,compModel)
          }
        })
      }
    }
  }
}
