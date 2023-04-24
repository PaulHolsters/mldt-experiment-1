import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../../../store.service";
import {IconPositionType} from "../../../../enums/iconPositionType.enum";

@Component({
  selector: 'm-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() name = ''
  @ViewChild('input') input: ElementRef | undefined
  value:any
  icon$:Observable<any>|undefined
  iconPosition$:Observable<any>|undefined
  iconPositionType = IconPositionType
  advisoryText$:Observable<any>|undefined
  constructor(private storeService: StoreService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.icon$ = this.storeService.bindToStateProperty(this.name, 'icon')
    this.iconPosition$ = this.storeService.bindToStateProperty(this.name, 'iconPosition')
    this.advisoryText$ = this.storeService.bindToStateProperty(this.name, 'advisoryText')
  }

}
