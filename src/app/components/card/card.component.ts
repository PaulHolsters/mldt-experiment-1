import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Component as AbstractComponent} from "../Component";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {Menubar} from "../../componentclasses/Menubar";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {CardStructuralConfigModel} from "../../design-dimensions/StructuralConfig/card/CardStructuralConfigModel";
import {Card} from "../../componentclasses/Card";
import {isRenderPropertyType, RenderPropertyType} from "../../types/union-types";
import {Datalink} from "../../design-dimensions/datalink";
import {ServiceType} from "../../enums/serviceTypes.enum";

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent extends AbstractComponent implements OnInit,AfterViewInit {
  @ViewChild('card') card:ElementRef|undefined
/*  getHTML(){
    if(this.headerTemplate?.attr.html)
    return this.sanitizer.bypassSecurityTrustHtml(this.headerTemplate?.attr.html)
    return ''
  }*/
  ngOnInit(): void {
    this.props = Card.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        this.setPropValue(k,res)
        if(k===PropertyName.propsByData && this.data)
          this.eventsService.triggerEvent(TriggerType.DataPropertyInitialized, ServiceType.DataService,[ this.name,[res,this.data]])
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentInitialized, this.name)
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.card?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.card?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }
  ngAfterViewInit(): void {

  }
}
