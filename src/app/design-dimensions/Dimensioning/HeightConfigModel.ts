import {NonCalculatedDimensioningConfigModel} from "./NonCalculatedDimensioningConfigModel";
import {CalculatedDimensioningConfigModel} from "./CalculatedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";

export class HeightConfigModel{
  constructor(  public dynamicHeight:DynamicDimensioningConfigModel|ZeroValueType.NotConfigured,
                public staticHeight:NonCalculatedDimensioningConfigModel|CalculatedDimensioningConfigModel|ZeroValueType.NotConfigured) {
  }
}
