import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Component as AbstractComponent} from "../../Component";
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {MultiSelect} from "../../../componentclasses/MultiSelect";
import {DataRecord, isList, isOutPutData, List} from "../../../types/union-types";
import {Blueprint} from "../../../services/data/client/Blueprint";
import {isFormTargetType} from "../../../types/type-aliases";

@Component({
  selector: 'm-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent extends AbstractComponent implements OnInit{
  @ViewChild('multiselect') multiselect: ElementRef | undefined
  selectedOptions:DataRecord[]|undefined
  options:List|undefined
  ngOnInit(): void {
    this.props = MultiSelect.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        if(k===PropertyName.conceptBlueprint && res && res instanceof Blueprint){
          const target = this.configService.effects.map(e=>{
            return e.action.target
          }).find(t=>{
            return typeof t !== 'string' && t.controls.map(c=>{
              return c.target
            }).includes(this.name)
          })
          if(isFormTargetType(target)){
            const field = target.controls.find(c=>{
              return c.target === this.name
            })?.field
            if(field){
              const list = res.properties.properties.get(field)
              if(list && isList(list[1][1])){
                this.options = list[1][1]
              }
            }
          }
        }
        this.setPropValue(k,res)
      })
    })
    this.storeService.bindToStateProperty(this.name,PropertyName.outputData)?.subscribe(res=>{
      this.setPropValue(PropertyName.selectedOptions,res)
      this.selectedOptions = this.getPropValue(PropertyName.selectedOptions)
    })
    this.storeService.bindToStateProperty(this.name,PropertyName.reset)?.subscribe(res=>{
      if(res) this.reset()
    })
  }

  reset(){
    this.selectedOptions = []
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
