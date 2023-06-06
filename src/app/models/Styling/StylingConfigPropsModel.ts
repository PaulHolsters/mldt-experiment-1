import {ColorType} from "../../enums/colorType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {BorderModel} from "../BorderModel";
import {BackgroundColorType} from "../../enums/backgroundColorType.enum";

export class StylingConfigPropsModel {
  constructor(
    public backgroundColor: BackgroundColorType = BackgroundColorType.Background_Color_Primary,
    public padding: PaddingType = PaddingType.All_0,
    public margin: MarginType = MarginType.All_0,
    public fontWeight: FontWeightType = FontWeightType.Normal,
    public textColor: TextColorType = TextColorType.Primary,
    public textDecoration: TextDecorationType = TextDecorationType.Normal,
    public fontSize: FontSizeType = FontSizeType.BASE,
    public border:BorderModel= new BorderModel(),
    public fontStyle?: FontStyleType,

  ) {
  }
}
