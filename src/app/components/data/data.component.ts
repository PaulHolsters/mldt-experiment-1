import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DataType} from "../../enums/dataType.enum";
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
import {DataService} from "../../data.service";

@Component({
  selector: 'm-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() name=''
  @Input() dataType:DataType|undefined
  DataType=DataType
  data$:Observable<any>|undefined
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.data$ = this.storeService.bindToStateProperty(this.name, 'data')
  }

}
