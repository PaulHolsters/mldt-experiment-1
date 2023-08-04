import {AfterContentChecked, AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {ComponentModel} from "../../models/ComponentModel";
import {Observable} from "rxjs";
import {Component as AbstractComponent} from "../Component"
@Component({
  selector: 'm-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent extends AbstractComponent implements OnInit,AfterContentChecked {
  @Input() component:ComponentModel|undefined

  ngOnInit(): void {
    const classname = this.element?.nativeElement?.parentElement?.className
    if(classname){
      if(classname.search('p-datatable-footer')!==-1){
        this.element?.nativeElement?.parentElement?.classList.add('p-0')
      }
    }
  }
  ngAfterContentChecked(){

  }
  bindToStateProperty(componentName: string, property: string): Observable<string> {
    return this.storeService.bindToStateProperty(componentName, property) as Observable<string>
  }
}
