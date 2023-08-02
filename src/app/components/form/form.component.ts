import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {EventType} from "../../enums/eventTypes.enum";
import {NoValueType} from "../../enums/no_value_type";
import {Component as AbstractComponent} from "../Component"
import {Form} from "../../componentclasses/Form";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent extends AbstractComponent implements OnInit{
  @Input() conceptId:string|NoValueType.NA=NoValueType.NA
  @ViewChild('form') form:ElementRef|undefined
  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name,this.conceptId)
    this.props = Form.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
      })
    })
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.form?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.form?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }
}
