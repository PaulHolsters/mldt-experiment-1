import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Component as AbstractComponent} from "../../Component"
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {FormControl} from "../../../componentclasses/FormControl";
@Component({
  selector: 'm-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent extends AbstractComponent implements OnInit {
  @ViewChild('') formControl:ElementRef|undefined
  ngOnInit(): void {
    this.props = FormControl.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
      })
    })
  }

  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.formControl?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.formControl?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }

}
