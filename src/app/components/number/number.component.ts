import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'm-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  @Input('number') number:number|undefined
  @Input('name') name=''
  @Input() data:any|undefined
  constructor() { }

  ngOnInit(): void {
  }

}
