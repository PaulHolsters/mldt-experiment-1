import {MenuItem} from "primeng/api";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class MenubarStructuralConfigModel {
  public menuItems: MenuItem[]|NoValueType.NO_VALUE_YET=NoValueType.NO_VALUE_YET
  constructor() {
  }
}
