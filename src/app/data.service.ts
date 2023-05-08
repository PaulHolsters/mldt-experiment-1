import {Injectable} from '@angular/core';
import {StoreService} from "./store.service";
import {ConceptModel} from "./models/Data/ConceptModel";
import {ConceptConfigModel} from "./models/Data/ConceptConfigModel";
import {Apollo, gql} from "apollo-angular";
import {AttributeModel} from "./models/Data/AttributeModel";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private setDataState(data: ConceptModel, compName: string, compDataConfig: ConceptConfigModel) {
    // deze methode verzendt de data naar de componenten, ervan uitgaande dat de caller weet dat de data effectief werd gewijzigd
    // todo hou rekening met de dataPipe
    console.log(data,compName,compDataConfig)
    this.storeService.setDataState(compName,data,compDataConfig)
  }
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
  private fakeMutation(data: ConceptModel) {

  }
  public mutationEvent(data: ConceptModel) {
    this.fakeMutation(data)
  }
  public componentReady(name: string) {
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
              this.setDataState(new ConceptModel(conceptName, attr), name, componentConfig.data)
            }
          }
      })
    }
  }
}
