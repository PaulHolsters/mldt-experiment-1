import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { EventType } from 'src/app/enums/eventTypes.enum';
import {Component as AbstractComponent} from "../Component"
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {Button} from "../../componentclasses/Button";
@Component({
  selector: 'm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends AbstractComponent implements OnInit,AfterViewInit {
  @ViewChild('button') button:ElementRef|undefined
  // @Input() condition:Function|boolean|undefined
  EventType = EventType
  PropertyName = PropertyName
  ngOnInit(): void {
    console.log(this.name+' init')
    this.props = Button.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        if(this.name === 'sort-h1') debugger
        console.log(this.name,k,res)
        this.setPropValue(k,res)
      })
    })
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
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
/*    this.icon$ = this.storeService.bindToStateProperty(this.name,'icon')
    this.label$ = this.storeService.bindToStateProperty(this.name,'label')
    this.cd.detectChanges()*/
  }
  trigger(event: EventType){
    this.eventsService.triggerEvent(event,this.name)
  }
}
