import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../data.service";
import {StoreService} from "../../../store.service";
import {Observable} from "rxjs";
import {NoValueType} from "../../../enums/no_value_type";

@Component({
  selector: 'm-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  @Input() name:string|undefined
  @Input() options:string[]|undefined|NoValueType.DBI
  @Input() selectedOptions:string[]|undefined|NoValueType.DBI
  @Input() optionLabel:string|undefined|NoValueType.DBI
  @Input() dirty: boolean | undefined
  @Input() invalid: boolean | undefined
  @Input() disabled: boolean | undefined
  @ViewChild('multiselect') multiselect: ElementRef | undefined
  calcHeight$: Observable<any> | undefined
  calcWidth$: Observable<any> | undefined
  width: string | undefined
  height: string | undefined
  NoValueType = NoValueType
  constructor(private dataService: DataService, private storeService: StoreService) { }

  ngOnInit(): void {
    if(this.name){
      this.calcWidth$ = this.storeService.bindToStateProperty(this.name, 'calcWidth')
      this.calcHeight$ = this.storeService.bindToStateProperty(this.name, 'calcHeight')
    }
  }
  setCalculatedHeight(val: any): boolean {
    if (typeof val === 'string') {
      this.multiselect?.nativeElement.style?.setProperty('--heightVal', 'calc(' + val + ')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val: any): boolean {
    if (typeof val === 'string') {
      this.multiselect?.nativeElement.style?.setProperty('--widthVal', 'calc(' + val + ')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }

}
