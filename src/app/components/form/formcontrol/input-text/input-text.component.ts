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
  value = 'Some test value'
  icon$:Observable<any>|undefined
  iconPosition$:Observable<any>|undefined
  iconPositionType = IconPositionType
  advisoryText$:Observable<any>|undefined
  label$:Observable<any>|undefined
  floatLabel$:Observable<any>|undefined
  dirty$:Observable<any>|undefined
  invalid$:Observable<any>|undefined
  small$:Observable<any>|undefined
  large$:Observable<any>|undefined
  constructor(private storeService: StoreService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.label$ = this.storeService.bindToStateProperty(this.name, 'label')
    this.floatLabel$ = this.storeService.bindToStateProperty(this.name, 'floatLabel')
    this.dirty$ = this.storeService.bindToStateProperty(this.name, 'dirty')
    this.invalid$ = this.storeService.bindToStateProperty(this.name, 'invalid')
    this.small$ = this.storeService.bindToStateProperty(this.name, 'small')
    this.large$ = this.storeService.bindToStateProperty(this.name, 'large')
    this.icon$ = this.storeService.bindToStateProperty(this.name, 'icon')
    this.iconPosition$ = this.storeService.bindToStateProperty(this.name, 'iconPosition')
    this.advisoryText$ = this.storeService.bindToStateProperty(this.name, 'advisoryText')
  }

}
