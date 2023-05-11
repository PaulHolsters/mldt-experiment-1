import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../../../store.service";
import {IconPositionType} from "../../../../enums/iconPositionType.enum";

@Component({
  selector: 'm-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() name = ''
  @Input() icon:boolean|undefined
  @Input() iconPosition:IconPositionType|undefined
  @Input() advisoryText:string|undefined
  @Input() label:string|undefined
  @Input() floatLabel:boolean|undefined
  @Input() dirty:boolean|undefined
  @Input() invalid:boolean|undefined
  @Input() small:boolean|undefined
  @Input() large:boolean|undefined
  @Input() value:string|undefined
  @ViewChild('input') input: ElementRef | undefined
  iconPositionType = IconPositionType
  constructor(private storeService: StoreService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
