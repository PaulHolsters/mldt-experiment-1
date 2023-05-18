import {  Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {EventsService} from "../../events.service";
import {EventType} from "../../enums/eventTypes.enum";
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

  constructor(private storeService:StoreService,private eventsService:EventsService) { }

  ngOnInit(): void {
    console.log('hi')
    this.content$ = this.storeService.bindToStateProperty(this.name,'content')
    // hierdoor wordt de blueprint opgehaald => nadat die binnen is moet die
    // gedistribueerd naar de verschillende subscribers op deze (delen van de) data
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
  }
}
