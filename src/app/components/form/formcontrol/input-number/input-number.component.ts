import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IconType} from "../../../../enums/iconType.enum";
import {IconPositionType} from "../../../../enums/iconPositionType.enum";

@Component({
  selector: 'm-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
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
  @Input() value:string|undefined
  @ViewChild('input') input: ElementRef | undefined
  iconType = IconType
  iconPositionType = IconPositionType
  constructor() { }

  ngOnInit(): void {
  }

}
