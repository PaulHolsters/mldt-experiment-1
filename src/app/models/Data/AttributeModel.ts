import {ConceptModel} from "./ConceptModel";
export class AttributeModel {
constructor(
  public name?:string,
  public value?:number|string|Date|ConceptModel
  ) {
}
}
