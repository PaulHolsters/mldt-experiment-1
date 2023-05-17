import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../../store.service";
import {MarginType} from "../../../enums/marginType.enum";
import {PaddingType} from "../../../enums/paddingType.enum";
import {BorderModel} from "../../../models/BorderModel";
import {StylesService} from "../../../styles.service";
import {BackgroundColorType} from "../../../enums/backgroundColorType.enum";
import {LabelType} from "../../../enums/labelType.enum";
import {FontWeightType} from "../../../enums/fontWeightType.enum";
import {FontSizeType} from "../../../enums/fontSizeType.enum";
import {FontStyleType} from "../../../enums/fontStyleType.enum";
import {TextColorType} from "../../../enums/textColorType.enum";
import {TextDecorationType} from "../../../enums/textDecorationType.enum";

@Component({
  selector: 'm-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() name = ''
  @Input() text:string|undefined
  @Input() backgroundColor: BackgroundColorType|undefined
  @Input() calcHeight: string|undefined
  @Input() calcWidth: string|undefined
  @Input() padding: PaddingType|undefined
  @Input() margin: MarginType|undefined
  @Input() border: BorderModel|undefined
  @Input() labelType: LabelType|undefined
  @ViewChild('label') label:ElementRef|undefined
  FontWeight = FontWeightType
  FontSize = FontSizeType
  FontStyle = FontStyleType
  TextColor = TextColorType
  TextDecoration = TextDecorationType
  width:string|undefined
  height:string|undefined
  constructor(private storeService:StoreService,private stylesService:StylesService) {
  }
  ngOnInit(): void {
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
  getStyleClasses(padding:PaddingType|undefined,margin:MarginType|undefined,
                  border:BorderModel|undefined,backgroundColor:BackgroundColorType|undefined):Object|undefined{
    if(padding && margin && border && backgroundColor)
    return Object.assign(this.stylesService.getPadding(padding),this.stylesService.getMargin(margin),
      this.stylesService.getBorder(border),this.stylesService.getBackgroundColor(backgroundColor))
    return undefined
  }
}
