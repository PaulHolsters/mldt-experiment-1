import {ZeroValueType} from "../enums/zeroValueTypes.enum";
import {ResponsiveConfigModel} from "../design-dimensions/ResponsiveConfigModel";
import {ConfigModelType} from "../types/union-types";
export interface ResponsiveConfigModelI<T extends ConfigModelType> {
  smartphone:T
  setSmartphone:(ct:T)=>ResponsiveConfigModel<T>
  portraitTablet:T|ZeroValueType.DeterminedByEngine
  setPortraitTablet:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>
  tablet:T|ZeroValueType.DeterminedByEngine
  setTablet:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>
  laptop:T|ZeroValueType.DeterminedByEngine
  setLaptop:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>
  highResolution:T|ZeroValueType.DeterminedByEngine
  setHighResolution:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>

}
