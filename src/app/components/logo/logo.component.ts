import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {Observable} from "rxjs";
@Component({
  selector: 'm-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() name = ''
  @ViewChild('logo') logo:HTMLImageElement|undefined
  visible$: Observable<any>|undefined
  holdSpace$: Observable<any>|undefined
  height$ : Observable<any>|undefined
  width$: Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  src$: Observable<any>|undefined
  alt$: Observable<any>|undefined
  grow$: Observable<any>|undefined
  shrink$: Observable<any>|undefined
  isColumn$: Observable<any>|undefined
  isRow$: Observable<any>|undefined
  constructor(private storeService: StoreService) {
  }
  ngOnInit(): void{
    this.grow$ = this.storeService.bindToStateProperty(this.name,'grow')
    this.shrink$ = this.storeService.bindToStateProperty(this.name,'shrink')
    this.visible$ = this.storeService.bindToStateProperty(this.name,'visible')
    this.holdSpace$ = this.storeService.bindToStateProperty(this.name,'holdSpace')
    this.height$ = this.storeService.bindToStateProperty(this.name,'height')
    this.width$ = this.storeService.bindToStateProperty(this.name,'width')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.src$ = this.storeService.bindToStateProperty(this.name,'src')
    this.alt$ = this.storeService.bindToStateProperty(this.name,'alt')
    this.isColumn$ = this.storeService.bindToStateProperty(this.name,'isColumn')
    this.isRow$ = this.storeService.bindToStateProperty(this.name,'isRow')
  }
  setCalculatedHeight(val:string):boolean{
    if(typeof val === 'string'){
      this.logo?.style?.setProperty('--heightVal',val)
      return true
    }
    return false
  }
  setCalculatedWidth(val:string):boolean {
    if (typeof val === 'string') {
      this.logo?.style?.setProperty('--widthVal', val)
      return true
    }
    return false
  }
}
