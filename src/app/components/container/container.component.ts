import {
  AfterContentChecked,
   ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
import {ComponentType} from "../../enums/componentTypes.enum";
@Component({
  selector: 'm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentChecked{
  @Input() name = ''
  @ViewChild('container') container: ElementRef | undefined
  componentType = ComponentType
  children$: Observable<any> | undefined
  //  todo voeg baseline align toe
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

  constructor(private storeService: StoreService, private cd:ChangeDetectorRef) {
  }

  ngAfterContentChecked(): void {
        this.cd.detectChanges()
  }



  ngOnInit(): void {
    this.children$ = this.storeService.bindToStateProperty(this.name, 'children')
    this.row$ = this.storeService.bindToStateProperty(this.name, 'row')
    this.column$ = this.storeService.bindToStateProperty(this.name, 'column')
    this.wrap$ = this.storeService.bindToStateProperty(this.name, 'wrap')
    this.justifyContentStart$ = this.storeService.bindToStateProperty(this.name, 'justifyContentStart')
    this.justifyContentCenter$ = this.storeService.bindToStateProperty(this.name, 'justifyContentCenter')
    this.justifyContentEnd$ = this.storeService.bindToStateProperty(this.name, 'justifyContentEnd')
    this.justifyContentBetween$ = this.storeService.bindToStateProperty(this.name, 'justifyContentBetween')
    this.justifyContentEvenly$ = this.storeService.bindToStateProperty(this.name, 'justifyContentEvenly')
    this.justifyContentAround$ = this.storeService.bindToStateProperty(this.name, 'justifyContentAround')
    this.alignItemsStart$ = this.storeService.bindToStateProperty(this.name, 'alignItemsStart')
    this.alignItemsCenter$ = this.storeService.bindToStateProperty(this.name, 'alignItemsCenter')
    this.alignItemsEnd$ = this.storeService.bindToStateProperty(this.name, 'alignItemsEnd')
    this.alignContentStart$ = this.storeService.bindToStateProperty(this.name, 'alignContentStart')
    this.alignContentCenter$ = this.storeService.bindToStateProperty(this.name, 'alignContentCenter')
    this.alignContentEnd$ = this.storeService.bindToStateProperty(this.name, 'alignContentEnd')
    this.alignContentBetween$ = this.storeService.bindToStateProperty(this.name, 'alignContentBetween')
    this.alignContentEvenly$ = this.storeService.bindToStateProperty(this.name, 'alignContentEvenly')
    this.alignContentAround$ = this.storeService.bindToStateProperty(this.name, 'alignContentAround')
    this.overflowHidden$ = this.storeService.bindToStateProperty(this.name, 'overflowHidden')
    this.overflowXHidden$ = this.storeService.bindToStateProperty(this.name, 'overflowXHidden')
    this.overflowScroll$ = this.storeService.bindToStateProperty(this.name, 'overflowScroll')
    this.overflowXScroll$ = this.storeService.bindToStateProperty(this.name, 'overflowXScroll')
    this.overflowAuto$ = this.storeService.bindToStateProperty(this.name, 'overflowAuto')
    this.overflowXAuto$ = this.storeService.bindToStateProperty(this.name, 'overflowXAuto')
    this.height$ = this.storeService.bindToStateProperty(this.name, 'height')
    this.width$ = this.storeService.bindToStateProperty(this.name, 'width')
    this.backgroundColorPrimary$ = this.storeService.bindToStateProperty(this.name, 'backgroundColorPrimary')
    this.backgroundColorWhite$ = this.storeService.bindToStateProperty(this.name, 'backgroundColorWhite')
    this.backgroundColorDanger$ = this.storeService.bindToStateProperty(this.name, 'backgroundColorDanger')
    this.visible$ = this.storeService.bindToStateProperty(this.name, 'visible')
    this.holdSpace$ = this.storeService.bindToStateProperty(this.name, 'holdSpace')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name, 'calcHeight')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name, 'calcWidth')
    this.alignSelfStretch$ = this.storeService.bindToStateProperty(this.name, 'alignSelfStretch')
    this.alignItemsStretch$ = this.storeService.bindToStateProperty(this.name, 'alignItemsStretch')
    this.grow$ = this.storeService.bindToStateProperty(this.name, 'grow')
    this.shrink$ = this.storeService.bindToStateProperty(this.name, 'shrink')
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
    this.storeService.bindToStateProperty(componentName, property)?.subscribe(res => {
      console.log(componentName, res, property)
    })
    return this.storeService.bindToStateProperty(componentName, property) as Observable<string>
  }
}
