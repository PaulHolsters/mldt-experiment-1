import {Component, Input, OnInit} from '@angular/core';
import {DataObjectModel} from "../../models/DataObjectModel";
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  value$: Observable<DataObjectModel[]> |  undefined
  @Input()name!:string
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.storeService.bindToStateProperty(this.name,'value')
  }

  getColumns():{field:string,header:string}[]{
    return [{field:'code', header:'Code'}]
  }

}
