import {ParentComponentPropsModel} from "./ParentComponentsPropsModel";
import {ChildComponentsPropsModel} from "./ChildComponentsPropsModel";

export class ChildLayoutRenderModel {
  constructor(
    public parentProps:ParentComponentPropsModel,
    public childProps:ChildComponentsPropsModel|undefined
  ) {
  }

}
