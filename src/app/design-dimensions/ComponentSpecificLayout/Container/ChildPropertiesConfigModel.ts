import {ResponsiveVisibilityConfigModel} from "../../Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "../../Size/ResponsiveSizeConfigModel";

export class ChildPropertiesConfigModel {
  public visibility: ResponsiveVisibilityConfigModel=new ResponsiveVisibilityConfigModel()
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }
  public size: ResponsiveSizeConfigModel=new ResponsiveSizeConfigModel()
  setSize(size:ResponsiveSizeConfigModel){
    this.size = size
    return this
  }
  constructor() {
  }


}
