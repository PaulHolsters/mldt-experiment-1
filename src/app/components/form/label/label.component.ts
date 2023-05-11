import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../../store.service";
import {MarginType} from "../../../enums/marginType.enum";
import {PaddingType} from "../../../enums/paddingType.enum";
import {BorderModel} from "../../../models/BorderModel";
import {StylesService} from "../../../styles.service";
import {BackgroundColorType} from "../../../enums/backgroundColorType.enum";
import {DataType} from "../../../enums/dataType.enum";
import {LabelType} from "../../../enums/labelType.enum";
import {DataService} from "../../../data.service";

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
  @Input() labelType: Observable<any>|undefined
  @ViewChild('label') label:ElementRef|undefined
  DataType = DataType
  LabelType = LabelType
  backgroundColor$: Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  width:string|undefined
  height:string|undefined
  padding$: Observable<any>|undefined
  margin$: Observable<any>|undefined
  border$: Observable<any>|undefined
  labelType$: Observable<any>|undefined
  text$: Observable<any>|undefined
  constructor(private storeService:StoreService,private stylesService:StylesService,private dataService:DataService) {
  }

  ngOnInit(): void {
    this.dataService.componentReady(this.name)
    if(this.backgroundColor === undefined) this.backgroundColor$ = this.storeService.bindToStateProperty(this.name,'backgroundColor')
    if(this.calcWidth === undefined) this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    if(this.calcHeight === undefined) this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    if(this.padding === undefined) this.padding$ = this.storeService.bindToStateProperty(this.name,'padding')
    if(this.margin === undefined) this.margin$ = this.storeService.bindToStateProperty(this.name,'margin')
    if(this.border === undefined) this.border$ = this.storeService.bindToStateProperty(this.name,'border')
    if(this.labelType === undefined) this.labelType$ = this.storeService.bindToStateProperty(this.name,'labelType')
    if(this.text === undefined) this.text$ = this.storeService.bindToStateProperty(this.name,'text')
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
  getStyleClasses(padding:PaddingType,margin:MarginType,
                  border:BorderModel,backgroundColor:BackgroundColorType){
    return Object.assign(this.stylesService.getPadding(padding),this.stylesService.getMargin(margin),
      this.stylesService.getBorder(border),this.stylesService.getBackgroundColor(backgroundColor))
  }
}
