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
  heightValCalc1$: Observable<any>|undefined
  constructor(private storeService:StoreService) { }
  ngOnInit(): void {
    this.height$ = this.storeService.bindToStateProperty(this.name,'height')
    this.width$ = this.storeService.bindToStateProperty(this.name,'width')
    this.backgroundColorPrimary$ = this.storeService.bindToStateProperty(this.name,'backgroundColorPrimary')
    this.visible$ = this.storeService.bindToStateProperty(this.name,'visible')
    this.holdSpace$ = this.storeService.bindToStateProperty(this.name,'holdSpace')
    this.storeService.bindToStateProperty(this.name,'heightValCalc1')?.subscribe(res=>{
      this.block?.style.setProperty('--heightVal1',res.toString())
    })
  }

}
