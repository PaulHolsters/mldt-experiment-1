import {ColorType} from "../../enums/colorType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {FontFamilyType} from "../../enums/fontFamilyType.enum";
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";

export class StylingConfigPropsModel {
  constructor(
    public backgroundColor: ColorType = ColorType.primary,
    public padding: PaddingType = PaddingType.All_0,
    public margin: MarginType = MarginType.All_0,
    public fontFamily: FontFamilyType = FontFamilyType.Arial,
    public fontWeight: FontWeightType = FontWeightType.Normal,
    public textColor: TextColorType = TextColorType.Primary,
    public textDecoration: TextDecorationType = TextDecorationType.Normal,
    public fontSize: FontSizeType = FontSizeType.BASE,
    public fontStyle?: FontStyleType,
  ) {
  }

}
