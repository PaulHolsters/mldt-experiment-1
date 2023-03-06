import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'm-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  @Input() data:{
    logo?: {
    src:string,
    alt:string,
    responsiveness:{
      smartphone:{dimension:string},
      portraitTablet:{dimension:string},
      tablet:{dimension:string},
      laptop:{dimension:string},
      highResolution:{dimension:string},
    }},items?:MenuItem[]}|undefined
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  getData(component:string){
    switch (component){
      case 'logo':

        break
    }

  }

}
