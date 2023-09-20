import {AfterContentChecked,  Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Component as AbstractComponent} from "../Component"
import {ComponentModel} from "../../design-dimensions/ComponentModel";
@Component({
  selector: 'm-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent extends AbstractComponent implements OnInit,AfterContentChecked {
  @Input() component:ComponentModel|undefined

  ngOnInit(): void {
  }
  ngAfterContentChecked(){

  }
  bindToStateProperty(componentName: string, property: string): Observable<string> {
    return this.storeService.bindToStateProperty(componentName, property) as Observable<string>
  }
}
