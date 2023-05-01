import {ConceptConfigModel} from "./ConceptConfigModel";
import {DataSelectionType} from "../../enums/dataSelectionType.enum";
export class AttributeConfigModel {
constructor(
  public selection:DataSelectionType,// naam, value of beiden
  public name?:string,
  public index?:number,
  public conceptSelection?: ConceptConfigModel
  ) {
}
}
