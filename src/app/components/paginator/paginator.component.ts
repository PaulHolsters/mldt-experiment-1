import {Component, OnInit} from '@angular/core';
import {Component as AbstractComponent} from "../Component"
import {EventType} from "../../enums/eventTypes.enum";
import {Paginator} from "../../componentclasses/Paginator";

@Component({
  selector: 'm-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent extends AbstractComponent implements OnInit {
  ngOnInit(): void {
    this.props = Paginator.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        this.setPropValue(k,res)
      })
    })
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
  }

  onPageChange(event:any){
    debugger
    this.trigger(EventType.PageChanged)
  }

}
