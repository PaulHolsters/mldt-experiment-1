import {ResponsiveVisibilityConfigModel} from "../../Visibility/ResponsiveVisibilityConfigModel";

export class ChildPropertiesConfigModel {
  public visibility: ResponsiveVisibilityConfigModel=new ResponsiveVisibilityConfigModel()
  constructor() {
  }
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }

}
