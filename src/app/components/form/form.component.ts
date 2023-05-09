import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {StoreService} from "../../store.service";

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() name = ''
  @ViewChild('form') form:ElementRef|undefined
  // todo ervoor zorgen dat die any verdwijnt en plaatsmaakt voor een meer gespecifieerd type
  data$:Observable<any>|undefined
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.data$ = this.storeService.bindToStateProperty(this.name, 'data')
  }

}
