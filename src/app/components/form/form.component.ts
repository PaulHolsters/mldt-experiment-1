import {  Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {EventsService} from "../../events.service";
import {EventType} from "../../enums/eventTypes.enum";
import {ConceptComponentModel} from "../../models/Data/ConceptComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {Observable} from "rxjs";

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Input() name = ''
  @ViewChild('form') form:ElementRef|undefined
  content$:Observable<any>|undefined
  data:ConceptComponentModel|undefined
  NoValueType = NoValueType

  constructor(private storeService:StoreService,private eventsService:EventsService) { }

  ngOnInit(): void {
    this.storeService.bindToStateProperty(this.name,'content')
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
  }
}
