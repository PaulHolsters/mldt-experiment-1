import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Component as AbstractComponent} from "../../Component";
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {RadioButton} from "../../../componentclasses/RadioButton";
import {isOutPutData} from "../../../types/union-types";

@Component({
  selector: 'm-radio',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent extends AbstractComponent implements OnInit {
  selectedValue: string | undefined
  @ViewChild('inputWrapper') inputWrapper: ElementRef | undefined

  updateData() {
    if(isOutPutData(this.selectedValue)){
      this.clientDataService.updateClientData(this.name, this.selectedValue)
    }
  }

  ngOnInit(): void {
    this.props = RadioButton.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
      })
    })
    this.storeService.bindToStateProperty(this.name,PropertyName.selectedValue)?.subscribe(res=>{
      this.setPropValue(PropertyName.selectedValue,res)
      this.selectedValue = this.getPropValue(PropertyName.selectedValue)
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
}
