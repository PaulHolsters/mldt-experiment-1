import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {EventsService} from "../../events.service";
import {EventType} from "../../enums/eventTypes.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {InputDimensionType} from "../../enums/inputDimensionType.enum";

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Input() name = ''
  @ViewChild('form') form:ElementRef|undefined
  data:{
    conceptName:string,
    attributes:{name:string,dataType:string,advisoryText?:string,errorMessages?:string[],formControl?:InputDimensionType}[]
  }|undefined
  IconPosition = IconPositionType
  InputDimension = InputDimensionType
  constructor(private storeService:StoreService,private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name, 'data')?.subscribe(res=>{
      if(res){
        this.data = res as {
          conceptName:string,
          attributes:{name:string,dataType:string,advisoryText?:string,errorMessages?:string[],formControl?:InputDimensionType}[]
        }
      }
    })
  }
}
