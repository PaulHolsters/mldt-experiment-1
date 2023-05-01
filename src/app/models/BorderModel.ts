import {BorderRadiusType} from "../enums/borderRadiusType.enum";
import {BorderColorType} from "../enums/borderColorType.enum";
import {BorderStyleType} from "../enums/borderStyleType.enum";
import {BorderWidthType} from "../enums/borderWidthType.enum";

export class BorderModel {
  isComponent?:boolean = false
  constructor(
    public radius:BorderRadiusType=BorderRadiusType.No_rounding,
    public color:BorderColorType=BorderColorType.Border_Color_Transparant,
    public style:BorderStyleType=BorderStyleType.Solid,
    public globalWidth:
      BorderWidthType.No_width|
      BorderWidthType.Width_1|
      BorderWidthType.Width_2|
      BorderWidthType.Width_3 = BorderWidthType.No_width,
    public topWidth?:
      BorderWidthType.No_top_width|
      BorderWidthType.Top_width_1|
      BorderWidthType.Top_width_2|
      BorderWidthType.Top_width_3|undefined,
    public leftWidth?:
      BorderWidthType.No_left_width|
      BorderWidthType.Left_width_1|
      BorderWidthType.Left_width_2|
      BorderWidthType.Left_width_3|undefined,
    public rightWidth?:
      BorderWidthType.No_right_width|
      BorderWidthType.Right_width_1|
      BorderWidthType.Right_width_2|
      BorderWidthType.Right_width_3|undefined,
    public bottomWidth?:
      BorderWidthType.No_bottom_width|
      BorderWidthType.Bottom_width_1|
      BorderWidthType.Bottom_width_2|
      BorderWidthType.Bottom_width_3|undefined,
    public leftRightWidth?:
      BorderWidthType.No_left_right_width|
      BorderWidthType.Left_right_width_1|
      BorderWidthType.Left_right_width_2|
      BorderWidthType.Left_right_width_3|undefined
      ,
    public topBottomWidth?:
      BorderWidthType.No_top_bottom_width|
      BorderWidthType.Top_bottom_width_1|
      BorderWidthType.Top_bottom_width_2|
      BorderWidthType.Top_bottom_width_3|undefined,
  ) {
    // todo toevoegen constraints zoals dat je geen padding mag gebruiken bij een label
  }
}
