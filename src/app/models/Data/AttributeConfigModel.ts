import {InputDimensionType} from "../../enums/inputDimensionType.enum";
import {ConceptConfigModel} from "./ConceptConfigModel";

export class AttributeConfigModel {
constructor(
  public name?:string,
  public advisoryText?:string,
  public errorMessage?:string[],
  public formControl?:InputDimensionType,
  public attributes?:ConceptConfigModel[]
  ) {
}
}
