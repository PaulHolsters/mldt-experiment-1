import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {IconPositionType} from "../../enums/iconPositionType.enum";
export class AttributesComponentPropsModel {
  constructor(  public src?:string|undefined,
                public alt?:string|undefined,
                public name?:string|undefined,
                public icon?:string|undefined,
                public label?:string|undefined,
                public width?:number|undefined,
                public menuItems?:MenuItem[]|undefined,
                public start?:ComponentModel|undefined,
                public end?:ComponentModel|undefined,
                public floatLabel?:boolean,
                public dirty?:boolean,
                public invalid?:boolean,
                public small?:boolean,
                public large?:boolean,
                public iconPosition?:IconPositionType|undefined,
                public advisoryText?:string|undefined,
                ) {
  }
  public setProperty(propName: string, value: string|number|MenuItem[] | undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
