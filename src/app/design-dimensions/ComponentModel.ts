import {ResponsiveTableConfigModel} from "./component-specific-config/table/ResponsiveTableConfigModel";
import {ResponsiveLayoutOverrideConfigModel} from "./LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "./Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
import {ResponsiveContainerChildLayoutConfigModel} from "./Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ResponsiveDataRepresentationConfigModel} from "./DataRepresentation/ResponsiveDataRepresentationConfigModel";
export class ComponentModel{
  getPropertyValue?(property:string){
    if(Reflect.has(this, property)) return Reflect.get(this,property)
    throw new Error('U vraagt naar een property die niet bestaat bij een ComponentModel')
  }
  replace?(key:string|undefined,value:ResponsiveTableConfigModel|ResponsiveSizeConfigModel
    |ResponsiveOverflowConfigModel|ResponsiveStylingConfigModel|
    ResponsiveLayoutOverrideConfigModel|ResponsiveContainerChildLayoutConfigModel|ResponsiveVisibilityConfigModel|ResponsiveDataRepresentationConfigModel|undefined){
    if(key){
      Reflect.set(this,key,value)
    }
  }
}
