import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
@Component({
  selector: 'm-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() name = ''
  @ViewChild('image') image:ElementRef|undefined
  src$: Observable<any>|undefined
  alt$: Observable<any>|undefined
  preview$: Observable<any>|undefined
  width$: Observable<any>|undefined
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.src$ = this.storeService.bindToStateProperty(this.name,'src')
    this.alt$ = this.storeService.bindToStateProperty(this.name,'alt')
    this.width$ = this.storeService.bindToStateProperty(this.name,'width')
  }

}
