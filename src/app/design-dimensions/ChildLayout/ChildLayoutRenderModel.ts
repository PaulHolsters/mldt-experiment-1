import {ParentComponentPropsModel} from "./ParentComponentsPropsModel";
import {ChildComponentsPropsModel} from "./ChildComponentsPropsModel";
import {RenderModel} from "../RenderModel";

export class ChildLayoutRenderModel {
  constructor(
    public parentProps:ParentComponentPropsModel,
    public childProps:ChildComponentsPropsModel|undefined
  ) {
  }

}
