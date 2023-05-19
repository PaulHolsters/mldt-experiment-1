import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {DataService} from "../../../data.service";
import {Observable} from "rxjs";
import {StoreService} from "../../../store.service";

@Component({
  selector: 'm-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit{
  @Input() name = ''
  @Input() icon:IconType|undefined
  @Input() iconPosition:IconPositionType|undefined
  @Input() advisoryText:string|undefined
  @Input() label:string|undefined
  @Input() floatLabel:boolean|undefined
  @Input() dirty:boolean|undefined
  @Input() invalid:boolean|undefined
  @Input() small:boolean|undefined
  @Input() large:boolean|undefined
  @Input() disabled:boolean|undefined
  @Input() value:string|undefined
  @Input() keyFilter:string|RegExp|undefined
  @ViewChild('input') input: ElementRef | undefined
  calcHeight$: Observable<any>|undefined
  calcWidth$: Observable<any>|undefined

  width:string|undefined
  height:string|undefined
  iconType = IconType
  iconPositionType = IconPositionType
  constructor(private dataService:DataService,private storeService:StoreService) { }

  ngOnInit(): void {
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
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

  updateData(){
    this.dataService.updateData(this.name,this.value)
  }
}
