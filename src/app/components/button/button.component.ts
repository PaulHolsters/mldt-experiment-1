import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {TriggerType} from 'src/app/enums/triggerTypes.enum';
import {Component as AbstractComponent} from "../Component"
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {Button} from "../../componentclasses/Button";
import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {ServiceType} from "../../enums/serviceTypes.enum";

@Component({
  selector: 'm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends AbstractComponent implements OnInit,AfterViewInit {
  @ViewChild('button') button:ElementRef|undefined
  // @Input() condition:Function|boolean|undefined
  ngOnInit(): void {
    this.props = Button.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k,this.index)?.subscribe(res=>{
        if(k===PropertyName.visible && this.name==='add') debugger
        this.setPropValue(k,res)
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentReady, this.name)
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.button?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.button?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }
  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }
  getStyleClasses(
    padding:PaddingType|undefined,
    margin:MarginType|undefined):Object|undefined{
      return this.stylesService.getStyleClasses(padding,margin,undefined, undefined)
  }
}
