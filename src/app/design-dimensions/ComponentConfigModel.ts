import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "./datalink";
export class ComponentConfigModel {
  propsByData:[PropertyName,Datalink,Function[]]|undefined
  public setPropertyByData(prop:PropertyName,link:Datalink,pipe?:Function[]){
      // propsByData naar UI sturen
      // elke componenten heeft dan de functionaliteit om de data te extraheren aan de hand van de info in propsByData
      return this
  }
}
