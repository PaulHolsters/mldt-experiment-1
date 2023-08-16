import {AttributeConfigModel} from "./AttributeConfigModel";
import {NoValueType} from "../../enums/no_value_type";
export class ClientDataConfigModel {
constructor(
  public conceptName:string,
  public attributes:AttributeConfigModel[]|NoValueType.DBI=NoValueType.DBI,
  public errorMessages:string[]|NoValueType.NI=NoValueType.NI // error boodschap op concept ipv attribuut niveau
  ) {
}
}
