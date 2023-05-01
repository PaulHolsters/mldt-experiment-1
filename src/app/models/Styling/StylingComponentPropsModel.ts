import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {BorderRadiusType} from "../../enums/borderRadiusType.enum";
import {BorderWidthType} from "../../enums/borderWidthType.enum";
import {BorderStyleType} from "../../enums/borderStyleType.enum";
import {BorderColorType} from "../../enums/borderColorType.enum";
import {BorderModel} from "../BorderModel";

export class StylingComponentPropsModel {
constructor(
  public backgroundColorPrimary:boolean|undefined,
  public backgroundColorWhite:boolean|undefined,
  public backgroundColorDanger:boolean|undefined,
  public border:BorderModel|undefined,
  public padding:PaddingType|undefined,
  public margin:MarginType|undefined,
  public fontWeight: FontWeightType|undefined,
  public textColor: TextColorType|undefined,
  public textDecoration: TextDecorationType|undefined,
  public fontSize: FontSizeType|undefined,
  public fontStyle?: FontStyleType|undefined,

  ) {
}
}
