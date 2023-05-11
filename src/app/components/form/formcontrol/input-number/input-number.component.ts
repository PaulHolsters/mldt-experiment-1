import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'm-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() name = ''
  @ViewChild('input') input: ElementRef | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
