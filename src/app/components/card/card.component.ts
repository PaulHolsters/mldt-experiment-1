import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Component as AbstractComponent} from "../Component";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {Card} from "../../componentclasses/Card";
@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent extends AbstractComponent implements OnInit {
  @ViewChild('card') card:any|undefined
  ngOnInit(): void {
    this.props = Card.getProperties()
    this.props?.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k,this.index)?.subscribe(res=>{
        this.setPropValue(k,res)
        // todo voor veel componenten zal dit steeds de eerset div zijn dus dit kan op een algemene manier worden geimplmenteerd
        if(k===PropertyName.backgroundColor && this.card?.el.nativeElement.style){
          this.card.el.nativeElement.style.setProperty('--backgroundColor','var(--'+res+')')
          if(res!==1){
            this.card.el.nativeElement.children[0].classList.add('background')
          } else{
            this.card.el.nativeElement.children[0].classList.remove('background')
          }
        }
        if(k===PropertyName.borderColor && this.card?.el.nativeElement.style){
          this.card.el.nativeElement.style.setProperty('--borderColor','var(--'+res+')')
          if(res!==1){
            this.card.el.nativeElement.children[0].classList.add('borderColor')
          } else{
            this.card.el.nativeElement.children[0].classList.remove('borderColor')
          }
        }
        if(k===PropertyName.borderWidth && this.card?.el.nativeElement.style){
          this.card.el.nativeElement.style.setProperty('--borderWidth',res)
          if(res!==1){
            this.card.el.nativeElement.children[0].classList.add('borderWidth')
          } else{
            this.card.el.nativeElement.children[0].classList.remove('borderWidth')
          }
        }
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentInitialized, this.name)
  }
  // todo maak dit algemener door height als een string door te geven omdat het toch steeds calc is of niet calc?
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.card?.el.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.card?.el.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }
  ngAfterViewInit(): void {
    this.cd.detectChanges()
    // hier wordt het element zelf meegegeven zodat dit bv in een custom function kan gebruikt worden te samen
    // met de DOM JS functie getComputedStyle(this.menubar.el.nativeElement)
    // todo implementeer dit in het algemeen voor alle componenten
    // todo en dan kan je dit ook meteen doen voor setCalculatedHeight en Width
    this.eventsService.triggerEvent(TriggerType.ComponentReady, this.name,this.card)

  }
}
