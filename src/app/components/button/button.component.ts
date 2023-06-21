import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {Observable} from "rxjs";
import { EventType } from 'src/app/enums/eventTypes.enum';
import {EventsService} from "../../events.service";
@Component({
  selector: 'm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit,AfterViewInit {
  @Input() name = ''
  @ViewChild('button') button:ElementRef|undefined
  icon$: Observable<any>|undefined
  label$: Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  width:string|undefined
  height:string|undefined
  EventType = EventType
  constructor(private storeService:StoreService, private cd: ChangeDetectorRef, private componentEventsService:EventsService) {
  }
  ngOnInit(): void {
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.label$ = this.storeService.bindToStateProperty(this.name,'label')
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.button?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.button?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }
  ngAfterViewInit(): void {
    this.icon$ = this.storeService.bindToStateProperty(this.name,'icon')
    this.label$ = this.storeService.bindToStateProperty(this.name,'label')
    this.cd.detectChanges()
  }
  trigger(event: EventType){
    // todo hoe zorgen we ervoor dat we het juiste id krijgen?
    //
    this.componentEventsService.triggerEvent(event,this.name)
  }
}
