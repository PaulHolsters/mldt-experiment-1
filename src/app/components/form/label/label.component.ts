import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../../store.service";
import {MarginType} from "../../../enums/marginType.enum";
import {PaddingType} from "../../../enums/paddingType.enum";
import {FontFamilyType} from "../../../enums/fontFamilyType.enum";
import {FontSizeType} from "../../../enums/fontSizeType.enum";
import {FontStyleType} from "../../../enums/fontStyleType.enum";
import {TextColorType} from "../../../enums/textColorType.enum";
import {TextDecorationType} from "../../../enums/textDecorationType.enum";
import {FontWeightType} from "../../../enums/fontWeightType.enum";

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
  fontFamily$: Observable<any>|undefined
  fontWeight$: Observable<any>|undefined
  fontStyle$: Observable<any>|undefined
  fontSize$: Observable<any>|undefined
  textColor$: Observable<any>|undefined
  textDecoration$: Observable<any>|undefined
  constructor(private storeService:StoreService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // todo fix code duplication
    this.backgroundColorPrimary$ = this.storeService.bindToStateProperty(this.name,'backgroundColorPrimary')
    this.backgroundColorWhite$ = this.storeService.bindToStateProperty(this.name,'backgroundColorWhite')
    this.backgroundColorDanger$ = this.storeService.bindToStateProperty(this.name,'backgroundColorDanger')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.padding$ = this.storeService.bindToStateProperty(this.name,'padding')
    this.margin$ = this.storeService.bindToStateProperty(this.name,'margin')
    this.fontFamily$ = this.storeService.bindToStateProperty(this.name,'fontFamily')
    this.fontWeight$ = this.storeService.bindToStateProperty(this.name,'fontWeight')
    this.fontStyle$ = this.storeService.bindToStateProperty(this.name,'fontStyle')
    this.fontSize$ = this.storeService.bindToStateProperty(this.name,'fontSize')
    this.textColor$ = this.storeService.bindToStateProperty(this.name,'textColor')
    this.textDecoration$ = this.storeService.bindToStateProperty(this.name,'textDecoration')
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
    return {'m-0':true}
  }
  getFont(
    fontFamily:FontFamilyType,
    fontWeight:FontWeightType,
    fontStyle:FontStyleType,
    fontSize:FontSizeType,
    textColor:TextColorType,
    textDecoration:TextDecorationType):Object{
    return {}
  }
  getPadding(
    padding:PaddingType):Object{
    console.log(padding,'dit komt er binnen')
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
  getStyleClasses(padding:PaddingType,margin:MarginType,
                  fontFamily:FontFamilyType,
                  fontWeight:FontWeightType,
                  fontStyle:FontStyleType,
                  fontSize:FontSizeType,
                  textColor:TextColorType,
                  textDecoration:TextDecorationType
                  ){
    const obj =  Object.assign(this.getPadding(padding),this.getMargin(margin),this.getFont(fontFamily,fontWeight,fontStyle,fontSize,textColor,textDecoration))
    console.log(obj)
    return obj
  }
  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }

}
