import {Component, Input, OnInit} from '@angular/core';
import {DataObjectModel} from "../../models/DataObjectModel";
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
import {EventType} from "../../enums/eventTypes.enum";
import {EventsService} from "../../events.service";
import {Data} from "@angular/router";

@Component({
  selector: 'm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataList: DataObjectModel[] |  undefined
  @Input()name!:string
  constructor(private storeService:StoreService,private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name,'dataConcept')?.subscribe(res=>{
      this.dataList = (res as {dataList:DataObjectModel[]} )?.dataList
      console.log(this.dataList)
    })
  }

  getColumns():{field:string,header:string}[]{
    return [{field:'code', header:'Code'}]
  }

}
