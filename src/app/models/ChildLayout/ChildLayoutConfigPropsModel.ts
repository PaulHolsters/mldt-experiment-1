import {HorizontalLayoutConfigPropsModel} from "./HorizontalLayoutConfigPropsModel";
import {VerticalLayoutConfigPropsModel} from "./VerticalLayoutConfigPropsModel";
export class ChildLayoutConfigPropsModel {
  constructor(public horizontalLayout:HorizontalLayoutConfigPropsModel, public verticalLayout:VerticalLayoutConfigPropsModel) {
  }
}
