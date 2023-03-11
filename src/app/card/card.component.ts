import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,AfterViewInit {
  position:string|undefined
  dimension:string|undefined
  layout:string|undefined
  responsiveness:string|undefined
  styleObject:{}={}
  headerText:string|undefined
  subheaderText:string|undefined
  content:string|undefined
  headerTemplate: {element:string,attr:{
      src: string|undefined,alt:string|undefined,text:string|undefined,html:string|undefined
    }}|undefined
  constructor(private dataService: DataService,private sanitizer: DomSanitizer) {
/*    const data = dataService.getCardData();
    this.headerText = data.headerText
    this.subheaderText = data.subheaderText
    this.content = data.content
    if(data.headerTemplate){
      this.headerTemplate = {...data.headerTemplate}
    }*/
  }

  getHTML(){
    if(this.headerTemplate?.attr.html)
    return this.sanitizer.bypassSecurityTrustHtml(this.headerTemplate?.attr.html)
    return ''
  }

  ngOnInit(): void {

  }

  getStyle(){
    switch (this.dimension){
      case '':

        break
      // default moet er niks gebeuren
    }
  }

  ngAfterViewInit(): void {

  }



}
