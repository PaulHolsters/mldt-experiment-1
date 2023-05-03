import {AttributeConfigModel} from "./AttributeConfigModel";
export class ConceptConfigModel {
constructor(
  public conceptName:string,
  public attributes:AttributeConfigModel[],
  ) {
}
}
