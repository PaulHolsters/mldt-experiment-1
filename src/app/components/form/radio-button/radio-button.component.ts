import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../../services/data.service";
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'm-radio',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  @Input() name!:string
  @Input() selectedValue: string | undefined
  @Input() values: {label:string,value:string}[] | undefined
  @Input() conceptName: string | undefined
  @Input() dataName: string | undefined
  @Input() dirty: boolean | undefined
  @Input() invalid: boolean | undefined
  @Input() disabled: boolean | undefined
  @ViewChild('inputWrapper') inputWrapper: ElementRef | undefined
  calcHeight$: Observable<any> | undefined
  calcWidth$: Observable<any> | undefined
  width: string | undefined
  height: string | undefined

  updateData() {
    // todo zorg ervoor dat je hier de dataLink naam hebt van de parent container
    if (this.dataName){
      console.log(this.dataName)
      this.dataService.updateData(this.dataName, this.selectedValue)
    }
  }
  constructor(private dataService: DataService, private storeService: StoreService) { }

  ngOnInit(): void {
    if(this.name){
      this.calcWidth$ = this.storeService.bindToStateProperty(this.name, 'calcWidth')
      this.calcHeight$ = this.storeService.bindToStateProperty(this.name, 'calcHeight')
    }
  }
  setCalculatedHeight(val: any): boolean {
    if (typeof val === 'string') {
      this.inputWrapper?.nativeElement.style?.setProperty('--heightVal', 'calc(' + val + ')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val: any): boolean {
    if (typeof val === 'string') {
      this.inputWrapper?.nativeElement.style?.setProperty('--widthVal', 'calc(' + val + ')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }
}
