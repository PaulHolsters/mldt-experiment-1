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

export class StylingConfigPropsModel {
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
    public tableStyle: TableStylingType|NoValueType.NA = NoValueType.NA

  ) {
  }

}
