import {ResponsiveConfigModelType} from "../types/union-types";
import {ResponsiveConfigType} from "../types/conditional-types";
import {ZeroValueType} from "../enums/zeroValueTypes.enum";

export interface ResponsiveConfigModelI<T extends ResponsiveConfigModelType> {
  smartphone:ResponsiveConfigType<T>
  portraitTablet:ResponsiveConfigType<T>|ZeroValueType.DeterminedByEngine
  tablet:ResponsiveConfigType<T>|ZeroValueType.DeterminedByEngine
  laptop:ResponsiveConfigType<T>|ZeroValueType.DeterminedByEngine
  highResolution:ResponsiveConfigType<T>|ZeroValueType.DeterminedByEngine

}
