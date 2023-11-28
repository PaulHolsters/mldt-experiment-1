import {AfterContentChecked, Component, ElementRef,  OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {RootComponent} from "../../app-configuration/app2/rootComponent"
import {Component as AbstractComponent} from "../Component"
import {Container} from "../../componentclasses/Container";

@Component({
  selector: 'm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent extends AbstractComponent implements OnInit, AfterContentChecked {
  @ViewChild('container') container: ElementRef | undefined

  ngAfterContentChecked(): void {
    this.cd.detectChanges()
  }
/*  getIconType(text:string):IconType|undefined{
    switch (text){
      case IconType.Min:
        return IconType.Min
      case IconType.NA:
        return IconType.NA
      case IconType.Plus:
        return IconType.Plus
      case IconType.NI:
        return IconType.NI
      case IconType.Check:
        return IconType.Check
      case IconType.Pencil:
        return IconType.Pencil
      case IconType.Trash:
        return IconType.Trash
      default:
        return undefined
    }
  }*/
/*  replaceWithBooleanOrUndefined(val:any):boolean|undefined{
    return typeof val === 'boolean' || val === undefined ? val : undefined
  }
  replaceWithStringOrUndefined(val:any):string|undefined{
    return typeof val === 'string' || val === undefined ? val : undefined
  }
  replaceWithNumberOrUndefined(val:any):number|undefined{
    return typeof val === 'number' || val === undefined ? val : undefined
  }
  replaceUndefinedWithString(val:string|undefined):string{
    return val === undefined ? '': val
  }
  getValues(): {label:string,value:string}[] {
    if (this.getPropValue(PropertyName.dataAttribute)?.radio?.radioValues && typeof this.getPropValue(PropertyName.dataAttribute)?.radio?.radioValues !== 'string') {
      return this.getPropValue(PropertyName.dataAttribute)?.radio?.radioValues
    } else return []
  }*/
  ngOnInit(): void {
      if (this.name === 'content-container') {
        this.eventsService.triggerEvent(TriggerType.RootComponentReady, this.name,RootComponent)
      }
      if(this.name==='dialog-container'){
        debugger
      }
      this.eventsService.triggerEvent(TriggerType.ComponentReady, this.name)
      this.props = Container.getProperties()
      this.props.forEach((v,k)=>{
        this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
          // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
            this.setPropValue(k,res)
        })
      })
  }
  setCalculatedHeight(val: any): boolean {
    if (typeof val === 'string') {
      this.container?.nativeElement.style.setProperty('--heightVal', 'calc' + val + '')
      return true
    }
    return false
  }
  setCalculatedWidth(val: any): boolean {
    if (typeof val === 'string') {
      this.container?.nativeElement.style.setProperty('--widthVal', 'calc' + val + '')
      return true
    }
    return false
  }
  getShrinkVal(componentName: string): Observable<number> {
    return this.storeService.bindToStateProperty(componentName, 'shrink') as Observable<number>
  }
  getGrowVal(componentName: string): Observable<number> {
    return this.storeService.bindToStateProperty(componentName, 'grow') as Observable<number>
  }
  bindToStateProperty(componentName: string, property: string): Observable<string> {
    return this.storeService.bindToStateProperty(componentName, property) as Observable<string>
  }
}
