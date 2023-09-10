import {ColumnLayoutConfigModel} from "./ColumnLayoutConfigModel";
import {RowLayoutConfigModel} from "./RowLayoutConfigModel";

export class ChildLayoutConfigModel {
  layout:RowLayoutConfigModel|ColumnLayoutConfigModel = new RowLayoutConfigModel()
  constructor() {}
}
