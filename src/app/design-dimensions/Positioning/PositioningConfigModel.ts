import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {MarginType} from "../../enums/marginType.enum";
import {PaddingType} from "../../enums/paddingType.enum";

export class PositioningConfigModel {
  public selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public margin:MarginType=MarginType.All_0
  public padding:PaddingType=PaddingType.All_0
  constructor(

    ) {
    // todo add relative position
    // todo add z-index
    // todo add absolute position
  }
}
