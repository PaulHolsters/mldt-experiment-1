import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {RenderPropertiesService} from "../../services/renderProperties.service";
@Component({
  selector: 'm-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit,AfterViewInit {
  @Input() name = ''
  @Input() data:any|undefined
  @ViewChild('NumberInput') menubar:ElementRef|undefined
  menuItems$:Observable<any>|undefined
  start$:Observable<any>|undefined
  end$:Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  width:string|undefined
  height:string|undefined
  constructor(private storeService: RenderPropertiesService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.menuItems$ = this.storeService.bindToStateProperty(this.name,'menuItems')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.start$ = this.storeService.bindToStateProperty(this.name,'start')
    this.end$ = this.storeService.bindToStateProperty(this.name,'end')
  }
  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.menubar?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.menubar?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.width = undefined
      return true
    }
    this.width = '100%'
    return false
  }
}
