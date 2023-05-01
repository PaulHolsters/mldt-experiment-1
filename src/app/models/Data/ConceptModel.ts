import {AttributeModel} from "./AttributeModel";
export class ConceptModel {
constructor(
  public conceptName:string,
  public attributes:AttributeModel[],
  ) {
}
}
