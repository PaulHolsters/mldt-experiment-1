import {ParentRenderPropertiesModel} from "./ParentRenderPropertiesModel";
import {ChildPropertiesRenderModel} from "./ChildPropertiesRenderModel";

export class ChildLayoutRenderModel {
  constructor(
    public parentProps:ParentRenderPropertiesModel,
    public childProps:ChildPropertiesRenderModel|undefined
  ) {
  }

}
