import {TextAttributeModel} from "./TextAttributeModel";
import {NumberAttributeModel} from "./NumberAttributeModel";
export class ConceptModel {
constructor(
  public conceptName:string,
  public attributes:(TextAttributeModel|NumberAttributeModel)[],
  ) {
}
}
