import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
@Component({
  selector: 'm-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  @Input() component:ComponentModel|undefined
  componentType = ComponentType
  constructor(private storeService: StoreService) { }
  ngOnInit(): void {
  }
  bindToStateProperty(componentName: string, property: string): Observable<string> {
    return this.storeService.bindToStateProperty(componentName, property) as Observable<string>
  }
}
