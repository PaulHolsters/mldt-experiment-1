import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../services/store.service";
@Component({
  selector: 'm-image2',
  templateUrl: './image2.component.html',
  styleUrls: ['./image2.component.css']
})
export class Image2Component implements OnInit,AfterViewInit {
  @Input() name = ''
  @Input() data:any|undefined
  @ViewChild('img') img:ElementRef|undefined
  alt$: Observable<any>|undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined
  width:string|undefined
  height:string|undefined
  constructor(private storeService:StoreService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.alt$ = this.storeService.bindToStateProperty(this.name,'alt')
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.img?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.height = undefined
      return true
    }
    this.height = '100%'
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.img?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      console.log('setting width to undefined')
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
