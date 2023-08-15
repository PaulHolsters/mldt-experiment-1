import {Component, Input, OnInit} from '@angular/core';
import {ComponentModel} from "../../models/ComponentModel";
import {StoreService} from "../../services/store.service";
import {Effect} from "../../effectclasses/Effect";

@Component({
  selector: 'm-app-template',
  templateUrl: './app-template.component.html',
  styleUrls: ['./app-template.component.css']
})
export class AppTemplateComponent implements OnInit {
  // voorlopig wordt de statische data via deze component opgeladen naar de verschillende content componenten: obsolete?
  @Input() data:{components:ComponentModel[],actions:Effect[]}|undefined
/*  dataButton:{
    label?:string,
    icon?:string,
    triggers:ActionModel[]
  }|undefined*/
  marginLeftAuto$  = this.storeService.bindToStateProperty('logo','marginLeftAuto')
  marginRightAuto$  = this.storeService.bindToStateProperty('logo','marginRightAuto')
  alignSelfCenter$  = this.storeService.bindToStateProperty('logo','alignSelfCenter')
  alignSelfEnd$  = this.storeService.bindToStateProperty('logo','alignSelfEnd')
  src$ = this.storeService.bindToStateProperty('logo','src')
  constructor(private storeService: StoreService) {
    console.log('template constr')
  }
  // todo fix this so the position is correct...
  ngOnInit(): void {

  }
}

/*    if(this.data && this.data.components.length>0){
      const button = this.data.components.find(comp=>{
        return comp.name === 'test-click-action'
      })
      if(button && button.state?.icon){
        const dl:{icon:string,triggers:ActionModel[]} = {icon:button.state?.icon,triggers:[]}
        if(button.state?.screenSizes){
          Object.assign(dl,{screenSizes:{...button.state?.screenSizes}})
        }
        this.data.actions.forEach(action=>{
          if(action.source === button.name){
            dl.triggers.push({...action})
          }
        })
        this.dataButton = dl
      }
    }*/
