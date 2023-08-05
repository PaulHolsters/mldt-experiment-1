import {Component, Input, OnInit} from '@angular/core';
import {EventType} from "../../../enums/eventTypes.enum";
import {Component as AbstractComponent} from "../../Component";
import {TableFooter} from "../../../componentclasses/TableFooter";
import {ComponentModel} from "../../../models/ComponentModel";
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
@Component({
  selector: 'm-table-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends AbstractComponent implements OnInit {
  @Input() component:ComponentModel|undefined
  ngOnInit(): void {
    this.name = this.component?.name ?? ''
    this.props = TableFooter.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
      })
    })
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    // todo add footer styling logic
    // todo code uitwerken zodat je de primeng footer ook kan vormgeven via de configuratie
    const classname = this.element?.nativeElement?.parentElement?.className
    if(classname){
      if(classname.search('p-datatable-footer')!==-1){
        this.element?.nativeElement?.parentElement?.classList.add('p-0')
      }
    }
  }

}
