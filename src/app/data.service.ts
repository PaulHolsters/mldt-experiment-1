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
    // deze methode verzendt de data naar de componenten voor dewelke de
    // data is gewijzigd
    // todo hou rekening met de dataPipe

  }
  constructor(private storeService: StoreService, private apollo: Apollo) {
  }
  // todo een taal bedenken voor extra calculated fields based on related data and concepts
  // todo a way to filter data
  // todo a way to order data
  private fakeQuery(data: ConceptConfigModel): ConceptModel|undefined {
    const productData = this.apollo
      .watchQuery({
        query: gql`
                    {
                      getProducts{
                        name
                      }
                    }
        `,
      }).valueChanges
      .subscribe(res => {
      return res.data
      })
    if (productData instanceof Array) {
      const [k, v] = Object.entries(productData[0])[0]
      if (typeof v === 'string') {
        const conceptName = productData[0].__typename
        const attr = [new AttributeModel(k, v)]
        return new ConceptModel(conceptName, attr)
      }
    } else return undefined
    return undefined
  }
  private fakeMutation(data: ConceptModel) {

  }
  public mutationEvent(data: ConceptModel) {
    this.fakeMutation(data)
  }
  public componentReady(name: string) {
    console.log('ok')
    console.log(name)
    let componentConfig = this.storeService.getComponent(name)
    if (!componentConfig) {
      componentConfig = this.storeService.getComponentThroughAttributes(name)
    }
    if (componentConfig && componentConfig.data) {
      console.log(componentConfig)
      debugger
      const result = this.fakeQuery(componentConfig.data)
      console.log(result)
      if (result)
        this.setDataState(result, name, componentConfig.data)
    }
  }
}
