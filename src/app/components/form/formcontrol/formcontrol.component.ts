import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../data.service";
import {StoreService} from "../../../store.service";
import {AttributeComponentModel} from "../../../models/Data/AttributeComponentModel";
import {NoValueType} from "../../../enums/no_value_type";
import {RestrictionType} from "../../../enums/restrictionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
@Component({
  selector: 'm-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {
  @Input() name = ''
  @ViewChild('block') block:ElementRef|undefined
  data:AttributeComponentModel|undefined
  dataLink:string[]|undefined
  NoValueType=NoValueType
  RestrictionType = RestrictionType
  InputFontSize = InputFontSizeType
  constructor(private dataService: DataService,private storeService:StoreService) { }
  ngOnInit(): void {
    this.storeService.bindToStateProperty(this.name,'dataLink')?.subscribe(res=>{
      this.dataLink = res as string[]
      this.data = this.dataService.getData(this.dataLink) as AttributeComponentModel
    })
  }

}
