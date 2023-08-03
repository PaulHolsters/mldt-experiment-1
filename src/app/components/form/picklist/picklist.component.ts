import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'm-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent implements OnInit {
  @Input() dirty: boolean | undefined
  @Input() invalid: boolean | undefined
  @Input() data:any|undefined
  @Input() disabled: boolean | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
