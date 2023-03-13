import {Component, Input, OnInit} from '@angular/core';
import {ActionModel} from "../../models/ActionModel";
import {DataService} from "../../data.service";
import {StoreService} from "../../store.service";

@Component({
  selector: 'm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // todo nog om te vormen naar een reactive style
  @Input() data:{
    label?:string,
    icon?:string,
    triggers:ActionModel[]
  }|undefined

  name='button'
  icon$ = this.storeService.bindToStateProperty(this.name,'src')
  label$ = this.storeService.bindToStateProperty(this.name,'label')

  constructor(private storeService:StoreService,private dataService:DataService) {

  }

  ngOnInit(): void {

  }

  trigger(event: Event){
    this.data?.triggers?.filter(trigger=>{
      return trigger.trigger === event.type
    }).forEach(trigger=>{
      this.dataService.executeAction(trigger)
    })
  }

}
