import {AttributeConfigModel} from "./AttributeConfigModel";
import {DataSelectionType} from "../../enums/dataSelectionType.enum";
export class ConceptConfigModel {
constructor(
  public conceptName:string,
  public dataSelection:DataSelectionType,// naam, value of beiden, if value then specify which attributes
  public attributes:AttributeConfigModel[],
  ) {
}
}
