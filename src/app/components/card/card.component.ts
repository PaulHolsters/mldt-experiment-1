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
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        if(k===PropertyName.title) console.log(res,this.data)
        if(k===PropertyName.subtitle) console.log(res,this.data)
        if(res instanceof Array && res.length===0){
          console.log(this.configService.getConfigFromRoot(this.name))
        }
        if(k===PropertyName.propsByData) debugger
        // op het moment dat je propsByValue zet is die nog niet gezet
        this.setPropValue(k,res)
/*        if(k===PropertyName.title){
          if (this.getPropValue(PropertyName.title) instanceof Array) {
            const title = this.getData(this.data, this.getPropValue(PropertyName.title))
            if (isRenderPropertyType(title)) this.title = title
          } else{
            if(isRenderPropertyType(res)) this.title = res
          }
        } else if(k===PropertyName.subtitle){
          if (this.getPropValue(PropertyName.subtitle) instanceof Array) {
            const subtitle = (this.getData(this.data, this.getPropValue(PropertyName.subtitle)))
            if(isRenderPropertyType(subtitle)) this.subtitle = subtitle
          } else{
            if(isRenderPropertyType(res)) this.subtitle = res
          }
        }*/
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentInitialized, this.name)
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger
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
