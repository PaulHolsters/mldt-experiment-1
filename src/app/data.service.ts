import { Injectable } from '@angular/core';
import {StoreService} from "./store.service";
import {ConceptModel} from "./models/Data/ConceptModel";
import {ComponentModel} from "./models/ComponentModel";
import {ConceptConfigModel} from "./models/Data/ConceptConfigModel";

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
  private setDataState(compName:string,compDataConfig:ConceptConfigModel){
    // deze methode verzendt de data naar de componenten voor dewelke de
    // data is gewijzigd
    // todo hou rekening met de dataPipe

  }
  private setComponentsDataState(newData:ConceptModel){
    // deze methode zorgt er gewoon voor dat alle componenten in de configuratie
    // beschouwd worden
    this.storeService.getComponentsConfig().forEach(compConfig=>{
      if(compConfig.data){
        this.setDataState(compConfig.name,compConfig.data)
      }
      if(compConfig.attributes){
        compConfig.attributes.getComponents().forEach(component=>{
          if(component.data){
            this.setDataState(component.name,component.data)
          }
        })
      }
      if(compConfig.children && compConfig.children.length > 0){
        compConfig.children.forEach(childConfig=>{
          if (typeof childConfig === 'string') {
            // todo
          } else if(childConfig.data) {
            this.setDataState(childConfig.name,childConfig.data)
          }
        })
      }

    })
  }
  constructor(private storeService:StoreService) { }
  public changeData(conceptName:string,newData:ConceptModel){
    // todo is het eigenlijk nodig om de binnenkomende data in een array te bewaren in de frontend?
    //  wellicht idd wel zodat je indien nodig toegang hebt tot de data vanuit eender waar in de applicatie
    //    al lijkt dit overbodig gegeven het feit dat ik met subjects werk
    const index = this.data.findIndex(chunk=>{
      return chunk.conceptName === conceptName
    })
    if(index){
      this.data[index] = newData
    } else{
      this.data.push(newData)
    }
    this.setComponentsDataState(newData)
  }
}
