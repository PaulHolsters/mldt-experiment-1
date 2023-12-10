import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";
export class CardStructuralConfigModel extends ComponentStructuralConfigModel{
  public title:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public subtitle:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  constructor() {
    super()
  }
  setTitle(title:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED){
    this.title=title
    return this
  }
  setSubTitle(subtitle:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED){
    this.subtitle=subtitle
    return this
  }
}
