import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Component as AbstractComponent} from "../../Component";
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {MultiSelect} from "../../../componentclasses/MultiSelect";
import {DataRecordModel} from "../../../design-dimensions/DataRecordModel";
import {isOutPutData} from "../../../types/union-types";

@Component({
  selector: 'm-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent extends AbstractComponent implements OnInit {
  @ViewChild('multiselect') multiselect: ElementRef | undefined
  selectedOptions:DataRecordModel[]|undefined

  ngOnInit(): void {
    this.props = MultiSelect.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
      })
    })
    this.storeService.bindToStateProperty(this.name,PropertyName.selectedOptions)?.subscribe(res=>{
      this.setPropValue(PropertyName.selectedOptions,res)
      this.selectedOptions = this.getPropValue(PropertyName.selectedOptions)
    })
  }

  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.multiselect?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.multiselect?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }

  updateData() {
    if(this.name && isOutPutData(this.selectedOptions)){
      this.clientDataService.updateClientData(this.name, this.selectedOptions)
    }

  }
}
