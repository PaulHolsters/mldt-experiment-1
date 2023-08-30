import {ResponsiveAttributesConfigModel} from "./Attributes/ResponsiveAttributesConfigModel";
import {ResponsivePositioningConfigModel} from "./Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveDimensioningConfigModel} from "./Dimensioning/self/ResponsiveDimensioningConfigModel";
import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveOverflowConfigModel} from "./Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
import {ResponsiveChildLayoutConfigModel} from "./ChildLayout/ResponsiveChildLayoutConfigModel";
import {ClientDataConfigModel} from "./Data/ClientDataConfigModel";
import {ComponentObjectModel} from "./ComponentObjectModel";
import {ContentInjectionConfigPropsModel} from "./ContentInjection/ContentInjectionConfigPropsModel";
import {ResponsiveContentInjectionConfigModel} from "./ContentInjection/ResponsiveContentInjectionConfigModel";
export class ComponentModel {
  isComponent?:boolean = true
  constructor(  public name:string,
                public type:ComponentType,
                public childLayout?:ResponsiveChildLayoutConfigModel,
                public position?:ResponsivePositioningConfigModel,
                public dimensions?:ResponsiveDimensioningConfigModel,
                public attributes?:ResponsiveAttributesConfigModel,
                public visibility?:ResponsiveVisibilityConfigModel,
                public overflow?:ResponsiveOverflowConfigModel,
                public children?:ComponentModel[],
                public styling?:ResponsiveStylingConfigModel,
                public data?:ClientDataConfigModel,
                public contentInjection?:ResponsiveContentInjectionConfigModel) {
    // todo toevoegen constraints zoals dat je geen padding mag gebruiken bij een label
  }

  getPropertyValue?(property:string){
    if(Reflect.has(this, property)) return Reflect.get(this,property)
    throw new Error('U vraagt naar een roperty die niet bestaat bij een ComponentModel')
  }

  replace?(key:string|undefined,value:ResponsiveAttributesConfigModel|ResponsiveDimensioningConfigModel
    |ResponsiveOverflowConfigModel|ResponsiveStylingConfigModel|
    ResponsivePositioningConfigModel|ResponsiveChildLayoutConfigModel|ResponsiveVisibilityConfigModel|undefined){
    if(key){
      Reflect.set(this,key,value)
    }
  }
}
