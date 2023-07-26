import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
import {EventsService} from "../../events.service";
import {DataService} from "../../data.service";

@Component({
  selector: 'm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  visible:boolean|undefined
  header$:Observable<any>|undefined
  content$:Observable<any>|undefined
  @Input()name!:string
  x:number=0
  y:number=0
  constructor(private storeService:StoreService,private eventsService:EventsService,private dataService:DataService) { }

  ngOnInit(): void {
    this.storeService.bindToStateProperty(this.name,'visible')?.subscribe(res=>{
      this.visible = res as boolean|undefined
    })
    this.header$ = this.storeService.bindToStateProperty(this.name,'header')
    this.content$ = this.storeService.bindToStateProperty(this.name,'content')
  }

}
