import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {CalculatedDimensioningConfigModel} from "./CalculatedDimensioningConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {NonCalculatedDimensioningConfigModel} from "./NonCalculatedDimensioningConfigModel";
export class WidthConfigModel{
  constructor(  public dynamicWidth:DynamicDimensioningConfigModel|ZeroValueType.NotConfigured,
                public staticWidth:NonCalculatedDimensioningConfigModel|CalculatedDimensioningConfigModel|ZeroValueType.NotConfigured) {
  }
}
