import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {DisplayType} from "../../enums/displayType.enum";

export class IndividualLayoutConfigModel {
  public selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public displayType:DisplayType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor(

    ) {
    // todo add relative position
    // todo add z-index
    // todo add absolute position
  }
}
