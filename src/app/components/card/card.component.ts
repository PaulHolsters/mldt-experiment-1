import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Component as AbstractComponent} from "../Component";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {Menubar} from "../../componentclasses/Menubar";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {CardStructuralConfigModel} from "../../design-dimensions/StructuralConfig/card/CardStructuralConfigModel";
import {Card} from "../../componentclasses/Card";

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
  title:string|undefined
  subtitle:string|undefined
  ngOnInit(): void {
    this.props = Card.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        if(k===PropertyName.title) console.log(res,this.data)
        if(res instanceof Array && res.length===0){
          console.log(this.configService.getConfigFromRoot(this.name))
        }
        this.setPropValue(k,res)
        if(k===PropertyName.title){
          if (this.getPropValue(PropertyName.title) instanceof Array) {
            const title = this.getData(this.data, this.getPropValue(PropertyName.title))
            if (typeof title === 'string' || title === undefined) this.title = title
          } else{
            if(res===undefined || typeof res === 'string') this.title = res
          }
        } else if(k===PropertyName.subtitle){
          if (this.getPropValue(PropertyName.subtitle) instanceof Array) {
            const subtitle = this.getData(this.data, this.getPropValue(PropertyName.subtitle))
            if (typeof subtitle === 'string' || subtitle === undefined) this.subtitle = subtitle
          } else{
            if(res===undefined || typeof res === 'string') this.subtitle = res
          }
        }
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentInitialized, this.name)
  }
  ngOnChanges(changes: SimpleChanges): void {
    // todo data komt eerst binnen

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
