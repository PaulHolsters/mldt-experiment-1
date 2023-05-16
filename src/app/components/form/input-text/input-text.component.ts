import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {StoreService} from "../../../store.service";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {InputText} from "primeng/inputtext";
import {InputNumber} from "primeng/inputnumber";
import {DataService} from "../../../data.service";

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
  iconType = IconType
  iconPositionType = IconPositionType
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  updateData(event:any){
    console.log(event)
    this.dataService.updateData(this.name,this.value)
  }
}
