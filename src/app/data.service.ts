import { Injectable } from '@angular/core';
import {StoreService} from "./store.service";
import {ConceptModel} from "./models/Data/ConceptModel";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // vergelijkbaar met de Responsive Behaviour Service
  // het stuurt data naar de verschillende componenten die daarop zijn ingeschreven
  // op basis van een bepaald (data) event dat zich heeft voorgedaan
  // deze service is de service die dat event capteert en vervolgens de data begint te verzenden
  // de subscriptions op deze events gebeuren in de store service, net zoals het eigenlijke verzenden van de data
  private data:ConceptModel[]=[]
  private setComponentsDataState(){
    // todo
  }
  constructor(private storeService:StoreService) { }
  public changeData(conceptName:string,newData:ConceptModel){
    const index = this.data.findIndex(chunk=>{
      return chunk.conceptName === conceptName
    })
    if(index){
      this.data[index] = newData
      this.setComponentsDataState()
    }
  }
}
