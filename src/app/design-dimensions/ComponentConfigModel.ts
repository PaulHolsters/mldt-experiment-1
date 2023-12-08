import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "./datalink";

export class ComponentConfigModel {
  private propsByData: [PropertyName, Datalink, Function[]][] = []

  public setPropertyByData(prop: PropertyName, link: Datalink, pipe?: Function[]) {
    this.propsByData.push([prop,link,pipe ? pipe:[]])
    return this
  }
}
