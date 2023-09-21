import {ResponsiveConfigModelType} from "../types/union-types";
import {ZeroValueType} from "../enums/zeroValueTypes.enum";
import {ConfigType} from "../types/conditional-types";
import {ResponsiveConfigModel} from "../design-dimensions/ResponsiveConfigModel";

export interface ResponsiveConfigModelI<T extends ResponsiveConfigModelType> {
  smartphone:ConfigType<T>
  setSmartphone:(ct:ConfigType<T>)=>ResponsiveConfigModel<T>
  portraitTablet:ConfigType<T>|ZeroValueType.DeterminedByEngine
  setPortraitTablet:(ct:ConfigType<T>|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>
  tablet:ConfigType<T>|ZeroValueType.DeterminedByEngine
  setTablet:(ct:ConfigType<T>|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>
  laptop:ConfigType<T>|ZeroValueType.DeterminedByEngine
  setLaptop:(ct:ConfigType<T>|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>
  highResolution:ConfigType<T>|ZeroValueType.DeterminedByEngine
  setHighResolution:(ct:ConfigType<T>|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel<T>

}
