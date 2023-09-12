import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {HeightConfigModel} from "../Dimensioning/HeightConfigModel";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/rowPositioningConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
export class VerticalLayoutConfigPropsModel {
  constructor(    public axis:AxisConfigType,
                  public wrap:boolean|undefined,
                  public scroll:boolean,
                  public position:MainAxisVerticalPositioningConfigType|CrossAxisVerticalPositioningConfigType,
                  public height:HeightConfigModel|HeightValueConfigType.NA|HeightValueConfigType.NC,
                  public lanes:CrossAxisVerticalLanesPositioningConfigType) {
  }
}
