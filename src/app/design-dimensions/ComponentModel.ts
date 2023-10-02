import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "./Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/ResponsiveOverflowConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "./ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
export class ComponentModel{
  getPropertyValue?(property:string){
    if(Reflect.has(this, property)) return Reflect.get(this,property)
    throw new Error('U vraagt naar een property die niet bestaat bij een ComponentModel')
  }
  replace?(key:string|undefined,value:ResponsiveSizeConfigModel
    |ResponsiveOverflowConfigModel|ResponsiveContainerChildLayoutConfigModel|ResponsiveVisibilityConfigModel|undefined){
    if(key){
      Reflect.set(this,key,value)
    }
  }
}
