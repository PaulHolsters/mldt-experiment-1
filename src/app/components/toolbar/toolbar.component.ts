import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Component as AbstractComponent} from "../Component";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {Toolbar} from "../../componentclasses/Toolbar";

@Component({
  selector: 'm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent extends AbstractComponent implements OnInit,AfterViewInit {
  @ViewChild('toolbar') toolbar:ElementRef|undefined

  ngOnInit(): void {
    this.props = Toolbar.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        this.setPropValue(k,res)
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentReady, this.name)
  }
  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.toolbar?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.toolbar?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }

}
