import {ResponsiveConfigModel} from "../design-dimensions/ResponsiveConfigModel";
import {ConfigModelType} from "../types/union-types";
import {NoValueType.CALCULATED_BY_ENGINE} from "../types/type-aliases";
export interface ResponsiveConfigModelI<T extends ConfigModelType> {
  smartphone:T
  setSmartphone:(ct:T)=>ResponsiveConfigModel<T>
  portraitTablet:T|NoValueType.CALCULATED_BY_ENGINE
  setPortraitTablet:(ct:T|NoValueType.CALCULATED_BY_ENGINE)=>ResponsiveConfigModel<T>
  tablet:T|NoValueType.CALCULATED_BY_ENGINE
  setTablet:(ct:T|NoValueType.CALCULATED_BY_ENGINE)=>ResponsiveConfigModel<T>
  laptop:T|NoValueType.CALCULATED_BY_ENGINE
  setLaptop:(ct:T|NoValueType.CALCULATED_BY_ENGINE)=>ResponsiveConfigModel<T>
  highResolution:T|NoValueType.CALCULATED_BY_ENGINE
  setHighResolution:(ct:T|NoValueType.CALCULATED_BY_ENGINE)=>ResponsiveConfigModel<T>

}
