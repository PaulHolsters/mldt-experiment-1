import {ColorType} from "../../enums/colorType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {BorderRadiusType} from "../../enums/borderRadiusType.enum";
import {BorderWidthType} from "../../enums/borderWidthType.enum";
import {BorderStyleType} from "../../enums/borderStyleType.enum";
import {BorderColorType} from "../../enums/borderColorType.enum";

export class StylingConfigPropsModel {
  constructor(
    public backgroundColor: ColorType = ColorType.primary,
    public padding: PaddingType = PaddingType.All_0,
    public margin: MarginType = MarginType.All_0,
    public fontWeight: FontWeightType = FontWeightType.Normal,
    public textColor: TextColorType = TextColorType.Primary,
    public textDecoration: TextDecorationType = TextDecorationType.Normal,
    public fontSize: FontSizeType = FontSizeType.BASE,
    public borderRadius:BorderRadiusType=BorderRadiusType.No_rounding,
    public borderWidth:BorderWidthType=BorderWidthType.No_width,
    public borderStyle:BorderStyleType=BorderStyleType.Solid,
    public borderColor:BorderColorType=BorderColorType.Border_Color_Primary,
    public fontStyle?: FontStyleType,

  ) {
  }
}
