import {AttributeComponentModel} from "./AttributeComponentModel";
import {NoValueType} from "../../enums/no_value_type";

export class ConceptComponentModel {
constructor(
  public conceptName:string,
  public attributes:AttributeComponentModel[],
  public errorMessages:string[]|NoValueType.NI // error boodschap op concept ipv attribuut niveau
  ) {
}
}
