import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MarginType} from "../../../enums/marginType.enum";
import {PaddingType} from "../../../enums/paddingType.enum";
import {BackgroundColorType} from "../../../enums/backgroundColorType.enum";
import {Component as AbstractComponent} from "../../Component"
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {NoValueType} from "../../../enums/no_value_type";
import {Label} from "../../../componentclasses/Label";
import {Blueprint} from "../../../services/data/client/Blueprint";
import {BorderModel} from "../../../design-dimensions/BorderModel";

@Component({
  selector: 'm-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent extends AbstractComponent implements OnInit {
  @Input() backgroundColor: BackgroundColorType|NoValueType.NA=NoValueType.NA
  @Input() calcHeight: string|undefined
  @Input() calcWidth: string|undefined
  @Input() padding: PaddingType|NoValueType.NA=NoValueType.NA
  @Input() margin: MarginType|NoValueType.NA=NoValueType.NA
  @Input() border: BorderModel|NoValueType.NA=NoValueType.NA
  @Input() text: any|undefined
  @ViewChild('label') label:ElementRef|undefined
  ngOnInit(): void {
    this.props = Label.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
      })
    })
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.label?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.label?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }
  getStyleClasses(padding:PaddingType|NoValueType.NA,margin:MarginType|NoValueType.NA,
                  border:BorderModel|NoValueType.NA,backgroundColor:BackgroundColorType|NoValueType.NA):Object|undefined{
    if(padding && margin && border && backgroundColor)
    return Object.assign({},this.stylesService.getPadding(padding),this.stylesService.getMargin(margin),
      this.stylesService.getBorder(border),this.stylesService.getBackgroundColor(backgroundColor))
    return undefined
  }

  getText(){
    const blueprint = this.getPropValue(PropertyName.conceptBlueprint) as Blueprint|undefined
    const dataLink = this.getPropValue(PropertyName.dataLink)
    const hardCodedData = this.getPropValue(PropertyName.hardCodedData)
    if(hardCodedData) return hardCodedData
    return dataLink[dataLink.length-1]
  }
}
