import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'm-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input('date') date:Date|undefined
  @Input('name') name=''
  constructor() { }

  ngOnInit(): void {
  }

}
