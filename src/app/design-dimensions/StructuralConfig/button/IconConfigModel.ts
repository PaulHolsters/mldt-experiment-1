import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
export class IconConfigModel {
  constructor(public icon:IconType,public position:IconPositionType=IconPositionType.Left){
  }
}
