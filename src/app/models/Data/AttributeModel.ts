import {ConceptModel} from "./ConceptModel";
import {InputDimensionType} from "../../enums/inputDimensionType.enum";
import {ConceptConfigModel} from "./ConceptConfigModel";
export class AttributeModel {
constructor(
  public name?:string,
  public value?:number|string|Date|ConceptModel,
  public advisoryText?:string,
  public errorMessage?:string[],
  public formControl?:InputDimensionType,
  public attributes?:ConceptConfigModel[],
  public dataPipe?:Function[]
  ) {
}
}
