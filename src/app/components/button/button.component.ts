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
    // todo elke component in de array van het anchor wordt 4 keer opnieuw gerenderd ipv 1
    // todo vanuit de engine komen er geen waarden binnen dus ze worden ook niet berekend ... => de methodes zijn maw niet correct aangepast!!!
    this.props = Button.getProperties()
    this.props.forEach((v,k)=>{
      debugger
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        debugger
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
    this.cd.detectChanges()
  }
  trigger(event: EventType){
    this.eventsService.triggerEvent(event,this.name)
  }
}
