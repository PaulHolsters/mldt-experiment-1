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
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  width:string|undefined
  height:string|undefined

  constructor(private storeService:StoreService,private eventsService:EventsService) {
    console.log('instance of a form')
  }

  ngOnInit(): void {
    // hierdoor wordt de blueprint opgehaald => nadat die binnen is moet die
    // gedistribueerd naar de verschillende subscribers op deze (delen van de) data
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.content$ = this.storeService.bindToStateProperty(this.name,'content')

    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.form?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.form?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }
}
