import {ResponsiveConfigModel} from "../design-dimensions/ResponsiveConfigModel";
import {ConfigModelType} from "../types/union-types";
import {DeterminedByEngine} from "../types/type-aliases";
export interface ResponsiveConfigModelI<T extends ConfigModelType> {
  smartphone:T
  setSmartphone:(ct:T)=>ResponsiveConfigModel<T>
  portraitTablet:T|DeterminedByEngine
  setPortraitTablet:(ct:T|DeterminedByEngine)=>ResponsiveConfigModel<T>
  tablet:T|DeterminedByEngine
  setTablet:(ct:T|DeterminedByEngine)=>ResponsiveConfigModel<T>
  laptop:T|DeterminedByEngine
  setLaptop:(ct:T|DeterminedByEngine)=>ResponsiveConfigModel<T>
  highResolution:T|DeterminedByEngine
  setHighResolution:(ct:T|DeterminedByEngine)=>ResponsiveConfigModel<T>

}
