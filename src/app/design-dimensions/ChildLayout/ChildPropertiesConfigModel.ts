import {ResponsiveDimensioningConfigModel} from "../Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsivePositioningConfigModel} from "../Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "../Visibility/ResponsiveVisibilityConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";

export class ChildPropertiesConfigModel {
  public dimensions:ResponsiveDimensioningConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public position:ResponsivePositioningConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public visibility: ResponsiveVisibilityConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }

  setDimensions(dimensions:ResponsiveDimensioningConfigModel){
    this.dimensions = dimensions
  }
  setPosition(position:ResponsivePositioningConfigModel){
    this.position = position
  }
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
  }

}
