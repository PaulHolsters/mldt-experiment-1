import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
@Component({
  selector: 'm-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit, AfterViewInit {
  @Input() name = ''
  @ViewChild('block') block:ElementRef|undefined
  backgroundColorPrimary$: Observable<any>|undefined
  backgroundColorWhite$: Observable<any>|undefined
  backgroundColorDanger$: Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  width:string|undefined
  height:string|undefined
  constructor(private storeService:StoreService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.backgroundColorPrimary$ = this.storeService.bindToStateProperty(this.name,'backgroundColorPrimary')
    this.backgroundColorWhite$ = this.storeService.bindToStateProperty(this.name,'backgroundColorWhite')
    this.backgroundColorDanger$ = this.storeService.bindToStateProperty(this.name,'backgroundColorDanger')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.block?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.block?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }
  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }
}
