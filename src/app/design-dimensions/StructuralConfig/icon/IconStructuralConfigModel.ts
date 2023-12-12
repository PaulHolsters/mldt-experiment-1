import {IconType} from "../../../enums/iconType.enum";
import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";

export class IconStructuralConfigModel extends ComponentStructuralConfigModel{
  public spin:boolean=false
  constructor(public icon:IconType){
    super()
  }

}
