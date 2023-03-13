import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../../store.service";
import {Observable} from "rxjs";
@Component({
  selector: 'm-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() name = ''
  visible$: Observable<any>|undefined
  holdSpace$: Observable<any>|undefined
  height$ : Observable<any>|undefined
  src$: Observable<any>|undefined
  alt$: Observable<any>|undefined
  constructor(private storeService: StoreService) {
  }
  ngOnInit(): void{
    this.visible$ = this.storeService.bindToStateProperty(this.name,'visible')
    this.holdSpace$ = this.storeService.bindToStateProperty(this.name,'holdSpace')
    this.height$ = this.storeService.bindToStateProperty(this.name,'height')
    this.src$ = this.storeService.bindToStateProperty(this.name,'src')
    this.alt$ = this.storeService.bindToStateProperty(this.name,'alt')
  }
}
