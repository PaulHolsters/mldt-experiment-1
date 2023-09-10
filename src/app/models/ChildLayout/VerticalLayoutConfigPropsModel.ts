import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalLayoutConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../enums/crossAxisVerticalLayoutConfigTypes.enum";
import {HeightConfigPropsModel} from "../Dimensioning/self/HeightConfigPropsModel";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/rowPositioningConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
export class VerticalLayoutConfigPropsModel {
  constructor(    public axis:AxisConfigType,
                  public wrap:boolean|undefined,
                  public scroll:boolean,
                  public position:MainAxisVerticalPositioningConfigType|CrossAxisVerticalPositioningConfigType,
                  public height:HeightConfigPropsModel|HeightValueConfigType.NA|HeightValueConfigType.NC,
                  public lanes:CrossAxisVerticalLanesPositioningConfigType) {
  }
}
