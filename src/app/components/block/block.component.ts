import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
@Component({
  selector: 'm-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() name = ''
  @ViewChild('block') block:HTMLDivElement|undefined
  height$: Observable<any>|undefined
  width$: Observable<any>|undefined
  backgroundColorPrimary$: Observable<any>|undefined
  visible$: Observable<any>|undefined
  holdSpace$: Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  fitContentHeight$: Observable<any>|undefined
  fitContentWidth$: Observable<any>|undefined
  grow$: Observable<any>|undefined
  shrink$: Observable<any>|undefined
  alignSelfStretch$: Observable<any>|undefined
  constructor(private storeService:StoreService) { }
  ngOnInit(): void {
    this.height$ = this.storeService.bindToStateProperty(this.name,'height')
    this.width$ = this.storeService.bindToStateProperty(this.name,'width')
    this.backgroundColorPrimary$ = this.storeService.bindToStateProperty(this.name,'backgroundColorPrimary')
    this.visible$ = this.storeService.bindToStateProperty(this.name,'visible')
    this.holdSpace$ = this.storeService.bindToStateProperty(this.name,'holdSpace')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.fitContentHeight$ = this.storeService.bindToStateProperty(this.name,'fitContentHeight')
    this.fitContentWidth$ = this.storeService.bindToStateProperty(this.name,'fitContentWidth')
    this.grow$ = this.storeService.bindToStateProperty(this.name,'grow')
    this.shrink$ = this.storeService.bindToStateProperty(this.name,'shrink')
    this.alignSelfStretch$ = this.storeService.bindToStateProperty(this.name,'alignSelfStretch')
  }
  setCalculatedHeight(val:string):boolean{
    if(typeof val === 'string'){
      this.block?.style?.setProperty('--heightVal',val)
      return true
    }
    return false
  }
  setCalculatedWidth(val:string):boolean{
    if(typeof val === 'string'){
      this.block?.style?.setProperty('--widthVal',val)
      return true
    }
    return false
  }

}
