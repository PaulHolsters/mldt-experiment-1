import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";

@Component({
  selector: 'm-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  @Input() name:string|undefined
  @ViewChild('container') container: ElementRef | undefined
  row$: Observable<any> | undefined
  column$: Observable<any> | undefined
  wrap$: Observable<any> | undefined
  justifyContentStart$: Observable<any> | undefined
  justifyContentCenter$: Observable<any> | undefined
  justifyContentEnd$: Observable<any> | undefined
  justifyContentBetween$: Observable<any> | undefined
  justifyContentEvenly$: Observable<any> | undefined
  justifyContentAround$: Observable<any> | undefined
  alignItemsStart$: Observable<any> | undefined
  alignItemsCenter$: Observable<any> | undefined
  alignItemsEnd$: Observable<any> | undefined
  alignContentStart$: Observable<any> | undefined
  alignContentCenter$: Observable<any> | undefined
  alignContentEnd$: Observable<any> | undefined
  alignContentBetween$: Observable<any> | undefined
  alignContentEvenly$: Observable<any> | undefined
  alignContentAround$: Observable<any> | undefined
  overflowScroll$: Observable<any> | undefined
  overflowXScroll$: Observable<any> | undefined
  overflowHidden$: Observable<any> | undefined
  overflowXHidden$: Observable<any> | undefined
  overflowAuto$: Observable<any> | undefined
  overflowXAuto$: Observable<any> | undefined
  height$: Observable<any> | undefined
  width$: Observable<any> | undefined
  backgroundColorPrimary$: Observable<any> | undefined
  backgroundColorWhite$: Observable<any> | undefined
  backgroundColorDanger$: Observable<any> | undefined
  visible$: Observable<any> | undefined
  holdSpace$: Observable<any> | undefined
  calcHeight$: Observable<any> | undefined
  calcWidth$: Observable<any> | undefined
  alignSelfStretch$: Observable<any> | undefined
  alignItemsStretch$: Observable<any> | undefined
  grow$: Observable<any> | undefined
  shrink$: Observable<any> | undefined
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
  }

  setCalculatedHeight(val: any): boolean {
    if (typeof val === 'string') {
      this.container?.nativeElement.style.setProperty('--heightVal', 'calc' + val + '')
      return true
    }
    return false
  }

  setCalculatedWidth(val: any): boolean {
    if (typeof val === 'string') {
      this.container?.nativeElement.style.setProperty('--widthVal', 'calc' + val + '')
      return true
    }
    return false
  }

  getShrinkVal(componentName: string): Observable<number> {
    return this.storeService.bindToStateProperty(componentName, 'shrink') as Observable<number>
  }

  getGrowVal(componentName: string): Observable<number> {
    return this.storeService.bindToStateProperty(componentName, 'grow') as Observable<number>
  }

  bindToStateProperty(componentName: string, property: string): Observable<string> {
    return this.storeService.bindToStateProperty(componentName, property) as Observable<string>
  }

}
