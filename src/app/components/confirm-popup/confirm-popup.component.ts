import {Component, OnInit} from '@angular/core';
import {Component as AbstractComponent} from "../Component"
import {EventType} from "../../enums/triggerTypes.enum";
import {ConfirmPopup} from "../../componentclasses/ConfirmPopup";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";

@Component({
  selector: 'm-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.css']
})
export class ConfirmPopupComponent extends AbstractComponent implements OnInit {
  ngOnInit(): void {
    this.props = ConfirmPopup.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        this.setPropValue(k,res)
        if(k===PropertyName.confirmationModel && this.getPropValue(PropertyName.confirmationModel) &&
          this.getPropValue(PropertyName.confirmationModel).target) {
          this.data = this.getPropValue(PropertyName.confirmationModel).data
          this.onConfirm()
        }
      })
    })
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
  }

  onConfirm(){
    this.confirmationService.confirm({
      target: this.getPropValue(PropertyName.confirmationModel).target,
      message: this.getPropValue(PropertyName.confirmationModel).message,
      icon: this.getPropValue(PropertyName.confirmationModel).icon,
      accept: () => {
        this.setPropValue(PropertyName.confirmationModel,undefined)
        this.eventsService.triggerEvent(EventType.ActionAccepted,this.name,this.data)
      },
      reject: () => {
        this.setPropValue(PropertyName.confirmationModel,undefined)
        this.eventsService.triggerEvent(EventType.ActionRejected,this.name,this.data)
      }
    })
  }

}
