import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../data.service";
import {StoreService} from "../../../store.service";
import {Observable} from "rxjs";
@Component({
  selector: 'm-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {
  @Input() name = ''
  content$:Observable<any>|undefined
  @ViewChild('') formcontrol:ElementRef|undefined
  constructor(private dataService: DataService,private storeService:StoreService) { }
  ngOnInit(): void {
    this.content$ = this.storeService.bindToStateProperty(this.name,'content')
  }

}
