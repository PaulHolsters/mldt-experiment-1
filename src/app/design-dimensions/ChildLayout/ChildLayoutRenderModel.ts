import {ParentRenderPropertiesModel} from "./ParentRenderPropertiesModel";
import {ChildRenderPropertiesModel} from "./ChildRenderPropertiesModel";

export class ChildLayoutRenderModel {
  constructor(
    public parentProps:ParentRenderPropertiesModel,
    public childProps:ChildRenderPropertiesModel|undefined
  ) {
  }

}
