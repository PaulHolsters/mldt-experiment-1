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

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent extends AbstractComponent implements OnInit,AfterViewInit,OnChanges {
  @ViewChild('card') card:ElementRef|undefined
/*  getHTML(){
    if(this.headerTemplate?.attr.html)
    return this.sanitizer.bypassSecurityTrustHtml(this.headerTemplate?.attr.html)
    return ''
  }*/
  ngOnInit(): void {
    this.props = Card.getProperties()
    this.props.forEach((v,k)=>{
      if(k===PropertyName.propsByData) debugger
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        this.setPropValue(k,res)
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentInitialized, this.name)
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (this.getPropValue(PropertyName.propsByData) instanceof Array){
        (this.getPropValue(PropertyName.propsByData) as Array<[PropertyName, Datalink, Function[]]>).forEach(p => {
          this.props?.set(p[0], this.getData(this.data,p[1],p[2]))
        })
      }
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
