import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {NoValueType} from "../../../enums/no_value_type";
import {RestrictionType} from "../../../enums/restrictionType.enum";
import {Component as AbstractComponent} from "../../Component"
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {TextInput} from "../../../componentclasses/TextInput";

@Component({
  selector: 'm-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent extends AbstractComponent implements OnInit {

  @ViewChild('inputWrapper') inputWrapper: ElementRef | undefined
  @ViewChild('inputElement') inputElement: ElementRef | undefined
  iconType = IconType
  iconPositionType = IconPositionType

  ngOnInit(): void {
    this.props = TextInput.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
      })
    })
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.inputWrapper?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.inputWrapper?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }

  updateData() {
    this.dataService.updateData(this.name, this.inputElement?.nativeElement.value)
  }
}
