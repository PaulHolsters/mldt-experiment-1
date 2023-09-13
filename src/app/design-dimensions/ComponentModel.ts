import {ResponsiveTableConfigModel} from "./component-specific-config/table/ResponsiveTableConfigModel";
import {ResponsivePositioningConfigModel} from "./Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveDimensioningConfigModel} from "./Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
import {ResponsiveChildLayoutConfigModel} from "./ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsiveDataRepresentationConfigModel} from "./DataRepresentation/ResponsiveDataRepresentationConfigModel";
export class ComponentModel{
  getPropertyValue?(property:string){
    if(Reflect.has(this, property)) return Reflect.get(this,property)
    throw new Error('U vraagt naar een property die niet bestaat bij een ComponentModel')
  }
  replace?(key:string|undefined,value:ResponsiveTableConfigModel|ResponsiveDimensioningConfigModel
    |ResponsiveOverflowConfigModel|ResponsiveStylingConfigModel|
    ResponsivePositioningConfigModel|ResponsiveChildLayoutConfigModel|ResponsiveVisibilityConfigModel|ResponsiveDataRepresentationConfigModel|undefined){
    if(key){
      Reflect.set(this,key,value)
    }
  }
}