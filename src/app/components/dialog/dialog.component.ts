import {Component, OnInit} from '@angular/core';
import {Component as AbstractComponent} from "../Component"
import {Dialog} from "../../componentclasses/Dialog";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";

@Component({
  selector: 'm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent extends AbstractComponent implements OnInit {
  visible:boolean|undefined
  ngOnInit(): void {
    this.props = Dialog.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k,res)
        if(k==='data') debugger
      })
    })
    this.storeService.bindToStateProperty(this.name, 'visible')?.subscribe(res => {
      this.visible = res as boolean
    })
  }

}
