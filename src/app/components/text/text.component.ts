import {Component, Input, OnInit} from '@angular/core';
import {FontWeightType} from "../../enums/fontWeightType.enum";
import {FontStyleType} from "../../enums/fontStyleType.enum";
import {FontSizeType} from "../../enums/fontSizeType.enum";
import {TextColorType} from "../../enums/textColorType.enum";
import {TextDecorationType} from "../../enums/textDecorationType.enum";
import {StoreService} from "../../store.service";
import {StylesService} from "../../styles.service";
@Component({
  selector: 'm-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input('name') name=''
  @Input() text:string|undefined
  @Input() fontWeight: FontWeightType|undefined
  @Input() fontStyle: FontStyleType|undefined
  @Input() fontSize: FontSizeType|undefined
  @Input() textColor: TextColorType|undefined
  @Input() textDecoration: TextDecorationType|undefined
  constructor(private storeService:StoreService,private stylesService:StylesService) { }
  ngOnInit(): void {
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
