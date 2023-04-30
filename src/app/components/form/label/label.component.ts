import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../../store.service";
import {MarginType} from "../../../enums/marginType.enum";
import {PaddingType} from "../../../enums/paddingType.enum";
import {BorderRadiusType} from "../../../enums/borderRadiusType.enum";
import {BorderStyleType} from "../../../enums/borderStyleType.enum";
import {BorderColorType} from "../../../enums/borderColorType.enum";
import {BorderWidthType} from "../../../enums/borderWidthType.enum";

@Component({
  selector: 'm-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  value$:Observable<any>|undefined
  @Input() name = ''
  @ViewChild('label') label:ElementRef|undefined
  backgroundColorPrimary$: Observable<any>|undefined
  backgroundColorWhite$: Observable<any>|undefined
  backgroundColorDanger$: Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  width:string|undefined
  height:string|undefined
  padding$: Observable<any>|undefined
  margin$: Observable<any>|undefined
  borderColor$: Observable<any>|undefined
  borderWidth$: Observable<any>|undefined
  borderStyle$: Observable<any>|undefined
  borderRadius$: Observable<any>|undefined

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    // todo fix code duplication
    this.backgroundColorPrimary$ = this.storeService.bindToStateProperty(this.name,'backgroundColorPrimary')
    this.backgroundColorWhite$ = this.storeService.bindToStateProperty(this.name,'backgroundColorWhite')
    this.backgroundColorDanger$ = this.storeService.bindToStateProperty(this.name,'backgroundColorDanger')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.padding$ = this.storeService.bindToStateProperty(this.name,'padding')
    this.margin$ = this.storeService.bindToStateProperty(this.name,'margin')
    this.borderColor$ = this.storeService.bindToStateProperty(this.name,'borderColor')
    this.borderWidth$ = this.storeService.bindToStateProperty(this.name,'borderWidth')
    this.borderStyle$ = this.storeService.bindToStateProperty(this.name,'borderStyle')
    this.borderRadius$ = this.storeService.bindToStateProperty(this.name,'borderRadius')
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.label?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.label?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }
  getMargin(margin:MarginType):Object{
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
  getPadding(
    padding:PaddingType):Object{
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
  getBorder(borderRadius:BorderRadiusType,borderStyle:BorderStyleType,borderColor:BorderColorType,borderWidth:BorderWidthType):Object{
    return {
      // todo
    }
  }
  getStyleClasses(padding:PaddingType,margin:MarginType,
                  borderRadius:BorderRadiusType,borderStyle:BorderStyleType,borderWidth:BorderWidthType,borderColor:BorderColorType){
    return Object.assign(this.getPadding(padding),this.getMargin(margin),
      this.getBorder(borderRadius,borderStyle,borderColor,borderWidth))
  }
}
