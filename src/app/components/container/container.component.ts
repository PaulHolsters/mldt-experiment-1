import {AfterContentChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {RootComponent} from "../../app-configuration/Netflix/body"
import {Component as AbstractComponent} from "../Component"
import {Container} from "../../componentclasses/Container";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {ComponentNameType} from "../../types/type-aliases";
import {ComponentModelType, OutputData, RenderModelType} from "../../types/union-types";
import {ComponentType} from "../../enums/componentTypes.enum";
import {CalculationModel} from "../../design-dimensions/CalculationModel";

@Component({
  selector: 'm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent extends AbstractComponent implements OnInit, AfterContentChecked {
  @ViewChild('container') container: ElementRef | undefined
  childProps: Map<ComponentNameType, (Map<PropertyName, string|undefined>)> = new Map()

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
      this.eventsService.triggerEvent(TriggerType.RootComponentReady, this.name, RootComponent)
    }
    this.eventsService.triggerEvent(TriggerType.ComponentInitialized, this.name)
    this.props = Container.getProperties()
    this.props.forEach((v, k) => {
      this.storeService.bindToStateProperty(this.name, k)?.subscribe(res => {
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        if(k===PropertyName.outputData) debugger
        this.setPropValue(k, res)
/*        if (k === PropertyName.children && res) {
          // todo technisch gezien zou het aantal children gedurende de duur van de applicatie door een action kunnen wijzigen
          this.childProps.clear();
          (res as ComponentModelType[]).forEach(c => {
            this.childProps.set(c.name, new Map()
              .set(PropertyName.height, undefined)
              .set(PropertyName.width, undefined)
              .set(PropertyName.alignItemsStretch, undefined)
              .set(PropertyName.overflowHidden, undefined)
              .set(PropertyName.overflowXHidden, undefined)
              .set(PropertyName.overflowAuto, undefined)
              .set(PropertyName.overflowXAuto, undefined)
              .set(PropertyName.overflowScroll, undefined)
              .set(PropertyName.overflowXScroll, undefined)
              .set(PropertyName.visible, undefined)
              .set(PropertyName.holdSpace, undefined)
            )
            debugger
            this.storeService.bindToStateProperty(c.name, PropertyName.height)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.height,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.width)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.width,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.alignItemsStretch)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.alignItemsStretch,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.overflowHidden)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.overflowHidden,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.overflowXHidden)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.overflowXHidden,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.overflowAuto)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.overflowAuto,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.overflowXAuto)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.overflowXAuto,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.overflowScroll)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.overflowScroll,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.overflowXScroll)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.overflowXScroll,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.visible)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.visible,res as string)
            })
            this.storeService.bindToStateProperty(c.name, PropertyName.holdSpace)?.subscribe(res=>{
              this.childProps.get(c.name)?.set(PropertyName.holdSpace,res as string)
            })
          })
        }*/
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
/*  getChildProp(componentName: string, property: PropertyName): string | undefined {
    return this.childProps.get(componentName)?.get(property)
  }*/
}
