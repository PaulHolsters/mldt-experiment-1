import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";

export class LayoutOverrideConfigModel {
  public selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor(

    ) {
    // todo add relative position
    // todo add z-index
    // todo add absolute position
  }
}
