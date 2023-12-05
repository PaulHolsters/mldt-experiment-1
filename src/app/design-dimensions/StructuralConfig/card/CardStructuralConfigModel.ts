import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";
import {DataLink} from "../../../types/type-aliases";
export class CardStructuralConfigModel extends ComponentStructuralConfigModel{
  public title:string|DataLink|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public subtitle:string|DataLink|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  constructor() {
    super()
  }
  setTitle(title:string|DataLink|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED){
    this.title=title
    return this
  }
  setSubTitle(subtitle:string|DataLink|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED){
    this.subtitle=subtitle
    return this
  }
}