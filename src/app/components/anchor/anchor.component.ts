import {AfterContentChecked,  Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Component as AbstractComponent} from "../Component"
import {ComponentModelType} from "../../types/union-types";
@Component({
  selector: 'm-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent extends AbstractComponent implements OnInit,AfterContentChecked {
  @Input() component:ComponentModelType|undefined

  ngOnInit(): void {
  }
  ngAfterContentChecked(){
  }
  bindToStateProperty(componentName: string, property: string,index:number|undefined): Observable<string> {
    return this.storeService.bindToStateProperty(componentName, property,index) as Observable<string>
  }
}
