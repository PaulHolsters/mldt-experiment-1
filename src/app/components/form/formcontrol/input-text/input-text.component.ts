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
  @Input() icon:boolean|undefined
  @Input() iconPosition:IconPositionType|undefined
  @Input() advisoryText:string|undefined
  @Input() label:string|undefined
  @Input() floatLabel:boolean|undefined
  @Input() dirty:boolean|undefined
  @Input() invalid:boolean|undefined
  @Input() small:boolean|undefined
  @Input() large:boolean|undefined
  @Input() value:string|undefined
  @ViewChild('input') input: ElementRef | undefined
  value$:Observable<any>|undefined
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
    if(this.label===undefined) this.label$ = this.storeService.bindToStateProperty(this.name, 'label')
    if(this.floatLabel===undefined) this.floatLabel$ = this.storeService.bindToStateProperty(this.name, 'floatLabel')
    if(this.dirty===undefined) this.dirty$ = this.storeService.bindToStateProperty(this.name, 'dirty')
    if(this.invalid===undefined) this.invalid$ = this.storeService.bindToStateProperty(this.name, 'invalid')
    if(this.small===undefined) this.small$ = this.storeService.bindToStateProperty(this.name, 'small')
    if(this.large===undefined) this.large$ = this.storeService.bindToStateProperty(this.name, 'large')
    if(this.icon===undefined) this.icon$ = this.storeService.bindToStateProperty(this.name, 'icon')
    if(this.iconPosition===undefined) this.iconPosition$ = this.storeService.bindToStateProperty(this.name, 'iconPosition')
    if(this.advisoryText===undefined) this.advisoryText$ = this.storeService.bindToStateProperty(this.name, 'advisoryText')
    if(this.value$===undefined) this.value$ = this.storeService.bindToStateProperty(this.name, 'value')
  }

}
