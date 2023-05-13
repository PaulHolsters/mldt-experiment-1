import {TextAttributeConfigModel} from "./TextAttributeConfigModel";
import {NumberAttributeConfigModel} from "./NumberAttributeConfigModel";
export class ConceptConfigModel {
constructor(
  public conceptName:string,
  public attributes?:(TextAttributeConfigModel|NumberAttributeConfigModel)[],
  ) {
}
}
