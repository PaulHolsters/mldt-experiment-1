import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Component as AbstractComponent} from "../Component"
import {EventType} from "../../enums/eventTypes.enum";
import {Paginator} from "../../componentclasses/Paginator";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {NoValueType} from "../../enums/no_value_type";
import {MarginType} from "../../enums/marginType.enum";

@Component({
  selector: 'm-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent extends AbstractComponent implements OnInit {
  @ViewChild('paginator') paginator:ElementRef|undefined
  ngOnInit(): void {
    this.props = Paginator.getProperties()
    this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        this.setPropValue(k,res)
      })
    })
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
  }

  onPageChange(event:any){
    debugger
    this.trigger(EventType.PageChanged)
  }
  setCalculatedHeight(val:any):boolean{
    if(typeof val === 'string'){
      this.paginator?.nativeElement.style?.setProperty('--heightVal','calc('+val+')')
      this.setPropValue(PropertyName.height,undefined)
      return true
    }
    this.setPropValue(PropertyName.height,'100%')
    return false
  }
  setCalculatedWidth(val:any):boolean{
    if(typeof val === 'string'){
      this.paginator?.nativeElement.style?.setProperty('--widthVal','calc('+val+')')
      this.setPropValue(PropertyName.width,undefined)
      return true
    }
    this.setPropValue(PropertyName.width,'100%')
    return false
  }
  getStyleClasses(
    padding:PaddingType|NoValueType.NA,
    margin:MarginType|NoValueType.NA):Object|undefined{
    return this.stylesService.getStyleClasses(padding,margin,NoValueType.NA, NoValueType.NA)
  }

}
