import {Component, Input, OnInit} from '@angular/core';
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
@Component({
  selector: 'm-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input('text') text:string|undefined
  @Input('name') name=''
  fontWeight$: Observable<any>|undefined
  fontStyle$: Observable<any>|undefined
  fontSize$: Observable<any>|undefined
  textColor$: Observable<any>|undefined
  textDecoration$: Observable<any>|undefined
  constructor(private storeService:StoreService) { }
  ngOnInit(): void {
    this.fontWeight$ = this.storeService.bindToStateProperty(this.name,'fontWeight')
    this.fontStyle$ = this.storeService.bindToStateProperty(this.name,'fontStyle')
    this.fontSize$ = this.storeService.bindToStateProperty(this.name,'fontSize')
    this.textColor$ = this.storeService.bindToStateProperty(this.name,'textColor')
    this.textDecoration$ = this.storeService.bindToStateProperty(this.name,'textDecoration')
  }
  getFont(
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
  getStyleClasses(fontWeight:FontWeightType,
                  fontStyle:FontStyleType,
                  fontSize:FontSizeType,
                  textColor:TextColorType,
                  textDecoration:TextDecorationType
  ){
    return Object.assign({},this.getFont(fontWeight,fontStyle,fontSize,textColor,textDecoration))
  }

}
