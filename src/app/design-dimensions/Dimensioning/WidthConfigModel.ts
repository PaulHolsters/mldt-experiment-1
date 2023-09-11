import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {FixedDimensionValueConfigType} from "../../enums/FixedDimensionValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {CalculatedDimensioningConfigModel} from "./CalculatedDimensioningConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {NonCalculatedDimensioningConfigModel} from "./NonCalculatedDimensioningConfigModel";
import {ConfigModel} from "../ConfigModel";
export class WidthConfigModel extends ConfigModel{
  // todo uitsplitsen dynamic en niet dynamic kunnen elkaar aanvullen
  value:NonCalculatedDimensioningConfigModel|CalculatedDimensioningConfigModel|DynamicDimensioningConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor(
  ){
    super()
  }

}
