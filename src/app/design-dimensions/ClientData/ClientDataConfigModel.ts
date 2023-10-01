import {ActionIdType, NotAllowed, NotConfigured} from "../../types/type-aliases";

export class ClientDataConfigModel {
  // dit is de data integratie
constructor(
  public actionId:ActionIdType,
  public dataLink:string[]|NotAllowed=undefined,
  public errorMessages:string[]|NotConfigured=undefined,
  public hardcodedData:any|NotAllowed=undefined,
  ) {
}
}
