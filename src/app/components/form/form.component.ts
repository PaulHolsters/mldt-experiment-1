import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {EventsService} from "../../events.service";
import {EventType} from "../../enums/eventTypes.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {IconType} from "../../enums/iconType.enum";

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
    attributes:{name:string,dataType:string,icon?:IconType,
      iconPosition?:IconPositionType,label?:string,floatLabel?:boolean,
      advisoryText?:string,errorMessages?:string[],formControl?:InputFontSizeType}[]
  }|undefined
  IconPosition = IconPositionType
  InputDimension = InputFontSizeType
  constructor(private storeService:StoreService,private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name, 'data')?.subscribe(res=>{
      if(res){
        this.data = res as {
          conceptName:string,
          attributes:{name:string,dataType:string,advisoryText?:string,errorMessages?:string[],formControl?:InputFontSizeType}[]
        }
      }
    })
  }
}
