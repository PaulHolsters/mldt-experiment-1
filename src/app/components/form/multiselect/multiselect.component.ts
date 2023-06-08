import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../data.service";
import {StoreService} from "../../../store.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  @Input() name:string|undefined
  @Input() options:string[]|undefined
  @Input() selectedOptions:string[]|undefined
  @Input() optionLabel:string|undefined
  @ViewChild('multiselect') multiselect: ElementRef | undefined
  calcHeight$: Observable<any> | undefined
  calcWidth$: Observable<any> | undefined
  width: string | undefined
  height: string | undefined
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
