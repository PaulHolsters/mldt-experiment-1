import {Component, Input, OnInit} from '@angular/core';
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
import {StylesService} from "../../styles.service";
import {ConceptModel} from "../../models/Data/ConceptModel";
@Component({
  selector: 'm-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input('text') text:ConceptModel|undefined
  @Input('name') name=''
  text$:Observable<any>|undefined
  fontWeight$: Observable<any>|undefined
  fontStyle$: Observable<any>|undefined
  fontSize$: Observable<any>|undefined
  textColor$: Observable<any>|undefined
  textDecoration$: Observable<any>|undefined
  constructor(private storeService:StoreService,private stylesService:StylesService) { }
  ngOnInit(): void {
    this.fontWeight$ = this.storeService.bindToStateProperty(this.name,'fontWeight')
    this.fontStyle$ = this.storeService.bindToStateProperty(this.name,'fontStyle')
    this.fontSize$ = this.storeService.bindToStateProperty(this.name,'fontSize')
    this.textColor$ = this.storeService.bindToStateProperty(this.name,'textColor')
    this.textDecoration$ = this.storeService.bindToStateProperty(this.name,'textDecoration')
    if(!this.text) this.text$ = this.storeService.bindToStateProperty(this.name,'value')
  }
  getStyleClasses(fontWeight:FontWeightType,
                  fontStyle:FontStyleType,
                  fontSize:FontSizeType,
                  textColor:TextColorType,
                  textDecoration:TextDecorationType
  ){
    return Object.assign({},this.stylesService.getFont(fontWeight,fontStyle,fontSize,textColor,textDecoration))
  }

}
