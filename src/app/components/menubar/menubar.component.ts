import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TriggerType} from "../../enums/triggerTypes.enum";
import {Component as AbstractComponent} from "../Component";
import {Menubar} from "../../componentclasses/Menubar";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
@Component({
  selector: 'm-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent extends AbstractComponent implements OnInit,AfterViewInit {
  @ViewChild('menubar') menubar:ElementRef|undefined
  ngOnInit(): void {
    this.props = Menubar.getProperties()
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
      this.menubar?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.menubar?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }
}
