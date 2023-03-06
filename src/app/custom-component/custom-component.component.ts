import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ComponentTreeModel} from "../models/componentTree.model";
@Component({
  selector: 'm-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit, AfterViewInit {
  @Input() replace:string|undefined
  @Input() position:string|undefined
  @Input() dimension:string|undefined
  @Input() responsiveness:string|undefined
  @Input() layout:string|undefined
  components:string[] = ['card','button','button']
  //componentTree:ComponentTreeModel = {parent:'card',children:['button','button',{parent:'div',children:['span','span','span']}]}
  //children:(string|ComponentTreeModel)[]|undefined

  constructor() {

  }
  ngOnInit(): void {

  }

  getStyle(){

  }

  ngAfterViewInit(): void {

  }







}
