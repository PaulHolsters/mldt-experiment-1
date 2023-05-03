import {ConceptConfigModel} from "./ConceptConfigModel";
export class AttributeConfigModel {
constructor(
  public name?:string,
  public index?:number,
  public conceptSelection?: ConceptConfigModel
  ) {
}
}
