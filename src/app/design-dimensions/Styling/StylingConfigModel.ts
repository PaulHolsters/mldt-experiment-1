import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {BorderModel} from "../BorderModel";
import {BackgroundColorType} from "../../enums/backgroundColorType.enum";
import {TableStylingType} from "../../enums/tableStylingType.enum";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";
import {ButtonSizeType} from "../../enums/buttonSizeType.enum";
import {ButtonAppearanceType} from "../../enums/buttonAppearanceType.enum";
import {ButtonMeaningType} from "../../enums/buttonMeaningType.enum";
import {ButtonFormType} from "../../enums/buttonFormType.enum";
import {IconSizeType} from "../../enums/iconSizeType.enum";
import {IconMeaningType} from "../../enums/iconMeaningType.enum";

export class StylingConfigModel {
  constructor(
    public backgroundColor: BackgroundColorType|NoValueType.NA = BackgroundColorType.Background_Color_Primary,
    public padding: PaddingType|NoValueType.NA = PaddingType.All_0,
    public margin: MarginType|NoValueType.NA = MarginType.All_0,
    public fontWeight: FontWeightType|NoValueType.NA = FontWeightType.Normal,
    public textColor: TextColorType|NoValueType.NA = TextColorType.Primary,
    public textDecoration: TextDecorationType|NoValueType.NA = TextDecorationType.Normal,
    public fontSize: FontSizeType|NoValueType.NA = FontSizeType.BASE,
    public border:BorderModel|NoValueType.NA = new BorderModel(),
    public fontStyle: FontStyleType|NoValueType.NA = NoValueType.NA,

    public buttonSize:ButtonSizeType|NoValueType.NA = NoValueType.NA,
    public buttonMeaning:ButtonMeaningType|NoValueType.NA = NoValueType.NA,
    public buttonAppearance:ButtonAppearanceType|NoValueType.NA = NoValueType.NA,
    public buttonForm:ButtonFormType|NoValueType.NA = NoValueType.NA,
    public iconSize:IconSizeType|NoValueType.NA = NoValueType.NA,
    public iconMeaning:IconMeaningType|NoValueType.NA = NoValueType.NA,

  ) {
  }

}
