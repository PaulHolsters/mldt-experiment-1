import {CrossAxisRowLayoutConfigType} from "../../enums/crossAxisRowLayoutConfigTypes.enum";
import {FixedDimensioningConfigModel} from "../Dimensioning/NonCalculatedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "../Dimensioning/DynamicDimensioningConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";

export class Y_DirectionRowConfigModel {
  layoutOfChildren:CrossAxisRowLayoutConfigType=CrossAxisRowLayoutConfigType.Top
  heightOfChildren:FixedDimensioningConfigModel|DynamicDimensioningConfigModel|ZeroValueType.NotConfigured = ZeroValueType.NotConfigured
  constructor() {
  }
}
