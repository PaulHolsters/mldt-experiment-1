import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NoValueType} from "../../../enums/no_value_type";
import {InputNumber} from "primeng/inputnumber";
import {DataService} from "../../../data.service";
import {Observable} from "rxjs";
import {StoreService} from "../../../store.service";

@Component({
  selector: 'm-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() name = ''
  @Input() advisoryText:string|undefined
  @Input() label:string|undefined
  @Input() floatLabel:boolean|undefined
  @Input() disabled:boolean|undefined
  @Input() dirty:boolean|undefined
  @Input() invalid:boolean|undefined
  @Input() useGrouping:boolean|undefined
  @Input() mode:string|undefined
  @Input() suffix:string|undefined
  @Input() prefix:string|undefined
  @Input() locale:string|undefined
  @Input() currency:string|undefined
  @Input() currencyDisplay:string|undefined
  @Input() minFractionDigits:number|undefined
  @Input() maxFractionDigits:number|undefined
  @Input() min:number|undefined
  @Input() max:number|undefined
  @Input() showButtons:boolean|undefined
  @Input() spinnerMode:string|undefined
  @Input() step:number|undefined
  @Input() decrementButtonClass:string|undefined
  @Input() incrementButtonClass:string|undefined
  @Input() incrementButtonIcon:string|undefined
  @Input() decrementButtonIcon:string|undefined
  @Input() buttonLayout:string|undefined
  @Input() value:number|undefined
  @ViewChild('input') input: ElementRef | undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined

  width:string|undefined
  height:string|undefined
  Number = Number
  NI = NoValueType.NI
  constructor(private dataService:DataService,private storeService:StoreService) {
    console.log('number input init met name '+this.name)
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.input?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.input?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }

  ngOnInit(): void {
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
  }

  updateData(formControl:InputNumber){
    const text = formControl.el.nativeElement.innerHTML
    const text2 = text.substring(text.indexOf('<input ')+7)
    const text3 = text2.substring(text2.indexOf('aria-valuenow')+15)
    this.value = Number(text3.substring(0,text3.indexOf('">')))
    console.log(this.name,this.value)
    this.dataService.updateData(this.name,this.value)
  }

}
