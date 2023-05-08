import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../../store.service";
import {MarginType} from "../../../enums/marginType.enum";
import {PaddingType} from "../../../enums/paddingType.enum";
import {BorderRadiusType} from "../../../enums/borderRadiusType.enum";
import {BorderStyleType} from "../../../enums/borderStyleType.enum";
import {BorderColorType} from "../../../enums/borderColorType.enum";
import {BorderWidthType} from "../../../enums/borderWidthType.enum";
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
  // todo impl en conf
  labelType$: Observable<any>|undefined

  constructor(private storeService:StoreService,private stylesService:StylesService,private dataService:DataService) {

  }

  ngOnInit(): void {
    this.dataService.componentReady(this.name)
    this.backgroundColor$ = this.storeService.bindToStateProperty(this.name,'backgroundColor')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.padding$ = this.storeService.bindToStateProperty(this.name,'padding')
    this.margin$ = this.storeService.bindToStateProperty(this.name,'margin')
    this.border$ = this.storeService.bindToStateProperty(this.name,'border')
    this.labelType$ = this.storeService.bindToStateProperty(this.name,'labelType')
    this.storeService.bindToStateProperty(this.name,'labelType')?.subscribe(res=>{
      console.log(res)
    })
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
