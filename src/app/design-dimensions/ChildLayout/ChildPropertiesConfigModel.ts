import {ResponsiveDimensioningConfigModel} from "../Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "../Visibility/ResponsiveVisibilityConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";

export class ChildPropertiesConfigModel {
  public dimensions:ResponsiveDimensioningConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public visibility: ResponsiveVisibilityConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
  setDimensions(dimensions:ResponsiveDimensioningConfigModel){
    this.dimensions = dimensions
    return this
  }
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }

}
