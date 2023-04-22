import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";
@Component({
  selector: 'm-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  @Input() name = ''
  menuItems$:Observable<any>|undefined
  constructor(private storeService: StoreService) { }
  ngOnInit(): void {
    this.menuItems$ = this.storeService.bindToStateProperty(this.name,'menuItems')
  }

}
