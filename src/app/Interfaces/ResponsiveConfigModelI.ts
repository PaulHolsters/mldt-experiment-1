import {ZeroValueType} from "../enums/zeroValueTypes.enum";
import {ResponsiveConfigModel} from "../design-dimensions/ResponsiveConfigModel";
import {ConfigModelType} from "../types/union-types";
export interface ResponsiveConfigModelI<T extends ConfigModelType> {
  smartphone:T
  setSmartphone:(ct:T)=>ResponsiveConfigModel
  portraitTablet:T|ZeroValueType.DeterminedByEngine
  setPortraitTablet:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel
  tablet:T|ZeroValueType.DeterminedByEngine
  setTablet:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel
  laptop:T|ZeroValueType.DeterminedByEngine
  setLaptop:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel
  highResolution:T|ZeroValueType.DeterminedByEngine
  setHighResolution:(ct:T|ZeroValueType.DeterminedByEngine)=>ResponsiveConfigModel

}
