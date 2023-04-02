import {ParentComponentPropsModel} from "./ParentComponentsPropsModel";
import {ChildComponentsPropsModel} from "./ChildComponentsPropsModel";

export class ChildLayoutComponentsPropsModel {
  constructor(
    public parentProps:ParentComponentPropsModel,
    public childProps:ChildComponentsPropsModel|undefined
  ) {
  }

}
