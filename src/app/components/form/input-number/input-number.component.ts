import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InputNumber} from "primeng/inputnumber";
import {Component as AbstractComponent} from "../../Component";
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {NumberInput} from "../../../componentclasses/NumberInput";
import {isRenderPropertyType} from "../../../types/union-types";

@Component({
  selector: 'm-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent extends AbstractComponent implements OnInit {
  @ViewChild('inputWrapper') inputWrapper: ElementRef | undefined
  value:number|undefined
  Number = Number
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
  reset(){
    this.value = undefined
  }

  ngOnInit(): void {
    this.storeService.bindToStateProperty(this.name,PropertyName.outputData)?.subscribe(res=>{
      if(typeof res === 'number'){
        this.value = res
      }
    })
    this.storeService.bindToStateProperty(this.name,PropertyName.reset)?.subscribe(res=>{
      if(res) this.reset()
    })
    this.props = NumberInput.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        this.setPropValue(k,res)
      })
    })


  }

  updateData(formControl:InputNumber){
    const text = formControl.el.nativeElement.innerHTML
    const text2 = text.substring(text.indexOf('<input ')+7)
    const text3 = text2.substring(text2.indexOf('aria-valuenow')+15)
    const value = Number(text3.substring(0,text3.indexOf('">')))
    if(isRenderPropertyType(value))
    this.clientDataService.updateClientData(this.name, value)
  }

}
