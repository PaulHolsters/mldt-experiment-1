import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {ConceptComponentModel} from "../Data/ConceptComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../ChildLayout/ResponsiveChildLayoutConfigModel";
export class AttributesComponentPropsModel {
  constructor(  public src?:string|undefined,
                public alt?:string|undefined,
                public name?:string|undefined,
                public icon?:string|undefined,
                public label?:string|undefined,
                public width?:number|undefined,
                public childLayout?: ResponsiveChildLayoutConfigModel|undefined,
                public menuItems?:MenuItem[]|undefined,
                public start?:ComponentModel|undefined,
                public end?:ComponentModel|undefined,
                public content?: ComponentModel,
                public dataLink?:string[]
                ) {
  }
  public setProperty(propName: string, value: string|number|MenuItem[]|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
