import {ResponsiveVisibilityConfigModel} from "../../Visibility/ResponsiveVisibilityConfigModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class ChildPropertiesConfigModel {
  public visibility: ResponsiveVisibilityConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }

}
