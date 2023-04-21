import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
@Component({
  selector: 'm-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() name = ''
  @ViewChild('block') block:HTMLDivElement|undefined
  backgroundColorPrimary$: Observable<any>|undefined
  backgroundColorWhite$: Observable<any>|undefined
  backgroundColorDanger$: Observable<any>|undefined
  constructor(private storeService:StoreService) { }
  ngOnInit(): void {
    this.backgroundColorPrimary$ = this.storeService.bindToStateProperty(this.name,'backgroundColorPrimary')
    this.backgroundColorWhite$ = this.storeService.bindToStateProperty(this.name,'backgroundColorWhite')
    this.backgroundColorDanger$ = this.storeService.bindToStateProperty(this.name,'backgroundColorDanger')
  }
}
