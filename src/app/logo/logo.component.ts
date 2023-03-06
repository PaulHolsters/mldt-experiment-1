import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {StoreService} from "../store.service";
@Component({
  selector: 'm-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  name = 'logo'
  visible$ = this.storeService.bindToStateProperty(this.name,'visible')
  holdSpace$ = this.storeService.bindToStateProperty(this.name,'holdSpace')
  height$ = this.storeService.bindToStateProperty(this.name,'height')
  src$ = this.storeService.bindToStateProperty(this.name,'src')
  alt$ = this.storeService.bindToStateProperty(this.name,'alt')
  constructor(private storeService: StoreService) {
  }
  ngOnInit(): void{

  }
}
