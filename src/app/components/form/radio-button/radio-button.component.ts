import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../../data.service";
import {StoreService} from "../../../store.service";

@Component({
  selector: 'm-radio',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  @Input() name = ''
  @Input() value: string | undefined
  @Input() enumVal: string | undefined
  @Input() conceptName: string | undefined
  @Input() disabled: boolean | undefined
  @Input() dirty: boolean | undefined
  @Input() invalid: boolean | undefined
  @ViewChild('radio') radio: ElementRef | undefined
  calcHeight$: Observable<any> | undefined
  calcWidth$: Observable<any> | undefined
  width: string | undefined
  height: string | undefined

  constructor(private dataService: DataService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name, 'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name, 'calcHeight')
  }
  setCalculatedHeight(val: any): boolean {
    if (typeof val === 'string') {
      this.radio?.nativeElement.style?.setProperty('--heightVal', 'calc(' + val + ')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }

  setCalculatedWidth(val: any): boolean {
    if (typeof val === 'string') {
      this.radio?.nativeElement.style?.setProperty('--widthVal', 'calc(' + val + ')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }

}
