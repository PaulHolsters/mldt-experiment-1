import {MenuItem} from "primeng/api";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";

export class MenubarStructuralConfigModel extends ComponentStructuralConfigModel{
  public menuItems: MenuItem[]|NoValueType.NO_VALUE_YET=NoValueType.NO_VALUE_YET
}
