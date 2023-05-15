import {  Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {EventsService} from "../../events.service";
import {EventType} from "../../enums/eventTypes.enum";
import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {ConceptComponentModel} from "../../models/Data/ConceptComponentModel";
import {NoValueType} from "../../enums/no_value_type";

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Input() name = ''
  @ViewChild('form') form:ElementRef|undefined
  data:ConceptComponentModel|undefined
  InputFontSize = InputFontSizeType
  RestrictionType = RestrictionType
  NoValueType = NoValueType

  constructor(private storeService:StoreService,private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name, 'data')?.subscribe(res=>{
      if(res){
        this.data = res as ConceptComponentModel
        console.log(this.data)
      }
    })
  }
}
