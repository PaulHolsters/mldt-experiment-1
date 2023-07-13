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
  @ViewChild('') formcontrol:ElementRef|undefined

  content$:Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined

  width:string|undefined
  height:string|undefined
  constructor(private dataService: DataService,private storeService:StoreService) { }
  ngOnInit(): void {
    this.content$ = this.storeService.bindToStateProperty(this.name,'content')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
  }

  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.formcontrol?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.formcontrol?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }

}
