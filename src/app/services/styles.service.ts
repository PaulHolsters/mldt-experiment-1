import {Injectable} from '@angular/core';
import {BackgroundColorType} from "../enums/backgroundColorType.enum";
import {MarginType} from "../enums/marginType.enum";
import {PaddingType} from "../enums/paddingType.enum";
import {BorderModel} from "../models/BorderModel";
import {BorderRadiusType} from "../enums/borderRadiusType.enum";
import {BorderWidthType} from "../enums/borderWidthType.enum";
import {BorderStyleType} from "../enums/borderStyleType.enum";
import {BorderColorType} from "../enums/borderColorType.enum";
import {FontWeightType} from "../enums/fontWeightType.enum";
import {FontStyleType} from "../enums/fontStyleType.enum";
import {FontSizeType} from "../enums/fontSizeType.enum";
import {TextColorType} from "../enums/textColorType.enum";
import {TextDecorationType} from "../enums/textDecorationType.enum";
import {ButtonSizeType} from "../enums/buttonSizeType.enum";
import {NoValueType} from "../enums/no_value_type";
import {ButtonFormType} from "../enums/buttonFormType.enum";
import {ButtonMeaningType} from "../enums/buttonMeaningType.enum";
import {ButtonAppearanceType} from "../enums/buttonAppearanceType.enum";

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  public bindActions(){
  }
  // todo wijizg property van numbers naar de juiste strings en verwijder deze methodes
  public getFont(
    fontWeight:FontWeightType,
    fontStyle:FontStyleType,
    fontSize:FontSizeType,
    textColor:TextColorType,
    textDecoration:TextDecorationType):Object{
    return {
      'font-light':fontWeight===FontWeightType.Light,
      'font-normal':fontWeight===FontWeightType.Normal,
      'font-medium':fontWeight===FontWeightType.Medium,
      'font-semibold':fontWeight===FontWeightType.Semi_bold,
      'font-bold':fontWeight===FontWeightType.Bold,
      'font-italic':fontStyle===FontStyleType.Italic,
      'text-xs':fontSize===FontSizeType.XS,
      'text-sm':fontSize===FontSizeType.S,
      'text-base':fontSize===FontSizeType.BASE,
      'text-lg':fontSize===FontSizeType.L,
      'text-xl':fontSize===FontSizeType.XL,
      'text-2xl':fontSize===FontSizeType.XL_2,
      'text-3xl':fontSize===FontSizeType.XL_3,
      'text-4xl':fontSize===FontSizeType.XL_4,
      'text-5xl':fontSize===FontSizeType.XL_5,
      'text-primary':textColor===TextColorType.Primary,
      'text-white':textColor===TextColorType.White,
      'text-color-secondary':textColor===TextColorType.Secondary,
      'text-0':textColor===TextColorType.Text_0,
      'text-50':textColor===TextColorType.Text_1,
      'text-100':textColor===TextColorType.Text_2,
      'text-200':textColor===TextColorType.Text_3,
      'text-300':textColor===TextColorType.Text_4,
      'text-400':textColor===TextColorType.Text_5,
      'text-500':textColor===TextColorType.Text_6,
      'text-600':textColor===TextColorType.Text_7,
      'text-700':textColor===TextColorType.Text_8,
      'text-800':textColor===TextColorType.Text_9,
      'text-900':textColor===TextColorType.Text_10,
      // todo add colours too
      'no-underline':textDecoration===TextDecorationType.Normal,
      'line-through':textDecoration===TextDecorationType.Stripe_through,
      'underline':textDecoration===TextDecorationType.Underline,
    }
  }
  public getBackgroundColor(bgColor:BackgroundColorType|NoValueType.NA):Object|undefined{
    if(bgColor===NoValueType.NA) return undefined
    return {
      'bg-primary':bgColor===BackgroundColorType.Background_Color_Primary,
      'bg-primary-reverse':bgColor===BackgroundColorType.Background_Color_Primary_Reverse,
      'bg-white':bgColor===BackgroundColorType.Background_Color_White,
      'surface-0':bgColor===BackgroundColorType.Background_Color_0,
      'surface-50':bgColor===BackgroundColorType.Background_Color_1,
      'surface-100':bgColor===BackgroundColorType.Background_Color_2,
      'surface-200':bgColor===BackgroundColorType.Background_Color_3,
      'surface-300':bgColor===BackgroundColorType.Background_Color_4,
      'surface-400':bgColor===BackgroundColorType.Background_Color_5,
      'surface-500':bgColor===BackgroundColorType.Background_Color_6,
      'surface-600':bgColor===BackgroundColorType.Background_Color_7,
      'surface-700':bgColor===BackgroundColorType.Background_Color_8,
      'surface-800':bgColor===BackgroundColorType.Background_Color_9,
      'surface-900':bgColor===BackgroundColorType.Background_Color_10
      // todo vul aan met gekleurde background en andere mogelijkheden binnen primeNG
    }
  }
  public getMargin(margin:MarginType|NoValueType.NA):Object|undefined{
    if(margin === NoValueType.NA) return undefined
    return {
      "m-0":margin===MarginType.All_0,
      "m-1":margin===MarginType.All_1,
      "m-2":margin===MarginType.All_2,
      "m-3":margin===MarginType.All_3,
      "m-4":margin===MarginType.All_4,
      "m-5":margin===MarginType.All_5,
      "m-6":margin===MarginType.All_6,
      "m-7":margin===MarginType.All_7,
      "m-8":margin===MarginType.All_8,
      "mt-0":margin===MarginType.Top_0,
      "mt-1":margin===MarginType.Top_1,
      "mt-2":margin===MarginType.Top_2,
      "mt-3":margin===MarginType.Top_3,
      "mt-4":margin===MarginType.Top_4,
      "mt-5":margin===MarginType.Top_5,
      "mt-6":margin===MarginType.Top_6,
      "mt-7":margin===MarginType.Top_7,
      "mt-8":margin===MarginType.Top_8,
      "mr-0":margin===MarginType.Right_0,
      "mr-1":margin===MarginType.Right_1,
      "mr-2":margin===MarginType.Right_2,
      "mr-3":margin===MarginType.Right_3,
      "mr-4":margin===MarginType.Right_4,
      "mr-5":margin===MarginType.Right_5,
      "mr-6":margin===MarginType.Right_6,
      "mr-7":margin===MarginType.Right_7,
      "mr-8":margin===MarginType.Right_8,
      "mb-0":margin===MarginType.Bottom_0,
      "mb-1":margin===MarginType.Bottom_1,
      "mb-2":margin===MarginType.Bottom_2,
      "mb-3":margin===MarginType.Bottom_3,
      "mb-4":margin===MarginType.Bottom_4,
      "mb-5":margin===MarginType.Bottom_5,
      "mb-6":margin===MarginType.Bottom_6,
      "mb-7":margin===MarginType.Bottom_7,
      "mb-8":margin===MarginType.Bottom_8,
      "ml-0":margin===MarginType.Left_0,
      "ml-1":margin===MarginType.Left_1,
      "ml-2":margin===MarginType.Left_2,
      "ml-3":margin===MarginType.Left_3,
      "ml-4":margin===MarginType.Left_4,
      "ml-5":margin===MarginType.Left_5,
      "ml-6":margin===MarginType.Left_6,
      "ml-7":margin===MarginType.Left_7,
      "ml-8":margin===MarginType.Left_8,
      "mx-0":margin===MarginType.LeftRight_0,
      "mx-1":margin===MarginType.LeftRight_1,
      "mx-2":margin===MarginType.LeftRight_2,
      "mx-3":margin===MarginType.LeftRight_3,
      "mx-4":margin===MarginType.LeftRight_4,
      "mx-5":margin===MarginType.LeftRight_5,
      "mx-6":margin===MarginType.LeftRight_6,
      "mx-7":margin===MarginType.LeftRight_7,
      "mx-8":margin===MarginType.LeftRight_8,
      "my-0":margin===MarginType.TopBottom_0,
      "my-1":margin===MarginType.TopBottom_1,
      "my-2":margin===MarginType.TopBottom_2,
      "my-3":margin===MarginType.TopBottom_3,
      "my-4":margin===MarginType.TopBottom_4,
      "my-5":margin===MarginType.TopBottom_5,
      "my-6":margin===MarginType.TopBottom_6,
      "my-7":margin===MarginType.TopBottom_7,
      "my-8":margin===MarginType.TopBottom_8,
    }
  }
  public getPadding(
    padding:PaddingType|NoValueType.NA):Object|undefined{
    if(padding===NoValueType.NA)return undefined
    return {
      "p-0":padding===PaddingType.All_0,
      "p-1":padding===PaddingType.All_1,
      "p-2":padding===PaddingType.All_2,
      "p-3":padding===PaddingType.All_3,
      "p-4":padding===PaddingType.All_4,
      "p-5":padding===PaddingType.All_5,
      "p-6":padding===PaddingType.All_6,
      "p-7":padding===PaddingType.All_7,
      "p-8":padding===PaddingType.All_8,
      "pt-0":padding===PaddingType.Top_0,
      "pt-1":padding===PaddingType.Top_1,
      "pt-2":padding===PaddingType.Top_2,
      "pt-3":padding===PaddingType.Top_3,
      "pt-4":padding===PaddingType.Top_4,
      "pt-5":padding===PaddingType.Top_5,
      "pt-6":padding===PaddingType.Top_6,
      "pt-7":padding===PaddingType.Top_7,
      "pt-8":padding===PaddingType.Top_8,
      "pr-0":padding===PaddingType.Right_0,
      "pr-1":padding===PaddingType.Right_1,
      "pr-2":padding===PaddingType.Right_2,
      "pr-3":padding===PaddingType.Right_3,
      "pr-4":padding===PaddingType.Right_4,
      "pr-5":padding===PaddingType.Right_5,
      "pr-6":padding===PaddingType.Right_6,
      "pr-7":padding===PaddingType.Right_7,
      "pr-8":padding===PaddingType.Right_8,
      "pb-0":padding===PaddingType.Bottom_0,
      "pb-1":padding===PaddingType.Bottom_1,
      "pb-2":padding===PaddingType.Bottom_2,
      "pb-3":padding===PaddingType.Bottom_3,
      "pb-4":padding===PaddingType.Bottom_4,
      "pb-5":padding===PaddingType.Bottom_5,
      "pb-6":padding===PaddingType.Bottom_6,
      "pb-7":padding===PaddingType.Bottom_7,
      "pb-8":padding===PaddingType.Bottom_8,
      "pl-0":padding===PaddingType.Left_0,
      "pl-1":padding===PaddingType.Left_1,
      "pl-2":padding===PaddingType.Left_2,
      "pl-3":padding===PaddingType.Left_3,
      "pl-4":padding===PaddingType.Left_4,
      "pl-5":padding===PaddingType.Left_5,
      "pl-6":padding===PaddingType.Left_6,
      "pl-7":padding===PaddingType.Left_7,
      "pl-8":padding===PaddingType.Left_8,
      "px-0":padding===PaddingType.LeftRight_0,
      "px-1":padding===PaddingType.LeftRight_1,
      "px-2":padding===PaddingType.LeftRight_2,
      "px-3":padding===PaddingType.LeftRight_3,
      "px-4":padding===PaddingType.LeftRight_4,
      "px-5":padding===PaddingType.LeftRight_5,
      "px-6":padding===PaddingType.LeftRight_6,
      "px-7":padding===PaddingType.LeftRight_7,
      "px-8":padding===PaddingType.LeftRight_8,
      "py-0":padding===PaddingType.TopBottom_0,
      "py-1":padding===PaddingType.TopBottom_1,
      "py-2":padding===PaddingType.TopBottom_2,
      "py-3":padding===PaddingType.TopBottom_3,
      "py-4":padding===PaddingType.TopBottom_4,
      "py-5":padding===PaddingType.TopBottom_5,
      "py-6":padding===PaddingType.TopBottom_6,
      "py-7":padding===PaddingType.TopBottom_7,
      "py-8":padding===PaddingType.TopBottom_8,
    }
  }
  public getBorder(border:BorderModel|NoValueType.NA):Object|undefined{
    if(border === NoValueType.NA) return undefined
    return {
      'border-noround':border.radius===BorderRadiusType.No_rounding,
      'border-round-xs':border.radius===BorderRadiusType.Rounding_XS,
      'border-round-sm':border.radius===BorderRadiusType.Rounding_SM,
      'border-round-md':border.radius===BorderRadiusType.Rounding_MD,
      'border-none':border.globalWidth===BorderWidthType.No_width,
      'border-1':border.globalWidth===BorderWidthType.Width_1,
      'border-2':border.globalWidth===BorderWidthType.Width_2,
      'border-3':border.globalWidth===BorderWidthType.Width_3,
      'border-x-none':border.leftRightWidth===BorderWidthType.No_left_right_width,
      'border-x-1':border.leftRightWidth===BorderWidthType.Left_right_width_1,
      'border-x-2':border.leftRightWidth===BorderWidthType.Left_right_width_2,
      'border-x-3':border.leftRightWidth===BorderWidthType.Left_right_width_3,
      'border-y-none':border.topBottomWidth===BorderWidthType.No_top_bottom_width,
      'border-y-1':border.topBottomWidth===BorderWidthType.Top_bottom_width_1,
      'border-y-2':border.topBottomWidth===BorderWidthType.Top_bottom_width_2,
      'border-y-3':border.topBottomWidth===BorderWidthType.Top_bottom_width_3,
      'border-top-none':border.topWidth===BorderWidthType.No_top_width,
      'border-top-1':border.topWidth===BorderWidthType.Top_width_1,
      'border-top-2':border.topWidth===BorderWidthType.Top_width_2,
      'border-top-3':border.topWidth===BorderWidthType.Top_width_3,
      'border-left-none':border.leftWidth===BorderWidthType.No_left_width,
      'border-left-1':border.leftWidth===BorderWidthType.Left_width_1,
      'border-left-2':border.leftWidth===BorderWidthType.Left_width_2,
      'border-left-3':border.leftWidth===BorderWidthType.Left_width_3,
      'border-bottom-none':border.bottomWidth===BorderWidthType.No_bottom_width,
      'border-bottom-1':border.bottomWidth===BorderWidthType.Bottom_width_1,
      'border-bottom-2':border.bottomWidth===BorderWidthType.Bottom_width_2,
      'border-bottom-3':border.bottomWidth===BorderWidthType.Bottom_width_3,
      'border-right-none':border.rightWidth===BorderWidthType.No_right_width,
      'border-right-1':border.rightWidth===BorderWidthType.Right_width_1,
      'border-right-2':border.rightWidth===BorderWidthType.Right_width_2,
      'border-right-3':border.rightWidth===BorderWidthType.Right_width_3,
      'border-solid':border.style===BorderStyleType.Solid,
      'border-dashed':border.style===BorderStyleType.Dashed,
      'border-dotted':border.style===BorderStyleType.Dotted,
      'border-double':border.style===BorderStyleType.Double,
      'border-primary':border.color===BorderColorType.Border_Color_Primary,
      'border-white':border.color===BorderColorType.Border_Color_White,
      'border-transparent':border.color===BorderColorType.Border_Color_Transparant,
      'border-0':border.color===BorderColorType.Border_Color_0,
      'border-50':border.color===BorderColorType.Border_Color_1,
      'border-100':border.color===BorderColorType.Border_Color_2,
      'border-200':border.color===BorderColorType.Border_Color_3,
      'border-300':border.color===BorderColorType.Border_Color_4,
      'border-400':border.color===BorderColorType.Border_Color_5,
      'border-500':border.color===BorderColorType.Border_Color_6,
      'border-600':border.color===BorderColorType.Border_Color_7,
      'border-700':border.color===BorderColorType.Border_Color_8,
      'border-800':border.color===BorderColorType.Border_Color_9,
      'border-900':border.color===BorderColorType.Border_Color_10,
      // todo aanvullen met kleur
    }
  }

  getButtonStyle(size:ButtonSizeType|NoValueType.NA,
                 form:ButtonFormType|NoValueType.NA,
                 appearance:ButtonAppearanceType|NoValueType.NA,
                 meaning:ButtonMeaningType|NoValueType.NA){
  }

  getStyleClasses(padding:PaddingType|NoValueType.NA,margin:MarginType|NoValueType.NA,
                  border:BorderModel|NoValueType.NA,backgroundColor:BackgroundColorType|NoValueType.NA){
    return Object.assign({},this.getPadding(padding),this.getMargin(margin),
      this.getBorder(border),this.getBackgroundColor(backgroundColor))
  }
  constructor() {
  }

}
