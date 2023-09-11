import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {BorderModel} from "../BorderModel";
import {BackgroundColorType} from "../../enums/backgroundColorType.enum";
import {TableStylingType} from "../../enums/tableStylingType.enum";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";
import {ButtonSizeType} from "../../enums/buttonSizeType.enum";
import {ButtonMeaningType} from "../../enums/buttonMeaningType.enum";
import {ButtonAppearanceType} from "../../enums/buttonAppearanceType.enum";
import {ButtonFormType} from "../../enums/buttonFormType.enum";
import {IconSizeType} from "../../enums/iconSizeType.enum";
import {IconMeaningType} from "../../enums/iconMeaningType.enum";

export class StylingRenderModel {
constructor(
  public backgroundColor:BackgroundColorType|NoValueType.NA,
  public border:BorderModel|NoValueType.NA,
  public padding:PaddingType|NoValueType.NA,
  public margin:MarginType|NoValueType.NA,
  public fontWeight: FontWeightType|NoValueType.NA,
  public textColor: TextColorType|NoValueType.NA,
  public textDecoration: TextDecorationType|NoValueType.NA,
  public fontSize: FontSizeType|NoValueType.NA,
  public fontStyle: FontStyleType|NoValueType.NA,
  public tableStyle: TableStylingType|NoValueType.NA,
  public responsiveTableLayout: ResponsiveTableLayoutType|NoValueType.NA,
  public tableBreakpoint: number,
  public buttonSize:ButtonSizeType|NoValueType.NA,
  public buttonMeaning:ButtonMeaningType|NoValueType.NA,
  public buttonAppearance:ButtonAppearanceType|NoValueType.NA,
  public buttonForm:ButtonFormType|NoValueType.NA,
  public iconSize:IconSizeType|NoValueType.NA = NoValueType.NA,
  public iconMeaning:IconMeaningType|NoValueType.NA = NoValueType.NA,

  ) {
}
}
