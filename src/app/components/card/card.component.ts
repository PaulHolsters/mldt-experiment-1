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
  @Input() public bgcolor?: string = 'blue';
  @ViewChild('card') card:any|undefined
/*  getHTML(){
    if(this.headerTemplate?.attr.html)
    return this.sanitizer.bypassSecurityTrustHtml(this.headerTemplate?.attr.html)
    return ''
  }*/

  calculatedHeight: string = '';
  ngOnInit(): void {
    this.props = Card.getProperties()
    this.props?.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k,this.index)?.subscribe(res=>{
        this.setPropValue(k,res)
        if(k===PropertyName.backgroundColor && this.card?.el.nativeElement.style){
          // todo maak onderscheid tussen verschillende mogelijkheden:
          //      theme vars, hexadecimal string, normal color string
          // todo fix bug: nu is backgournd zwart => hoe kan ik ervoor zorgen dat dit
          //      default steeds de correcte kleur is, ongeacht het huidige theme
          this.card.el.nativeElement.style.setProperty('--backgroundColor','var(--'+res+')')
        }
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
    this.cd.detectChanges()
    // hier wordt het element zelf meegegeven zodat dit bv in een custom function kan gebruikt worden te samen
    // met de DOM JS functie getComputedStyle(this.menubar.el.nativeElement)
    // todo implementeer dit in het algemeen voor alle componenten
    // todo en dan kan je dit ook meteen doen voor setCalculatedHeight en Width
    this.eventsService.triggerEvent(TriggerType.ComponentReady, this.name,this.card)

  }
}
