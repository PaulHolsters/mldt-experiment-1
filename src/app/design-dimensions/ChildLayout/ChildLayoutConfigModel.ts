import {ColumnLayoutConfigModel} from "./ColumnLayoutConfigModel";
import {RowLayoutConfigModel} from "./RowLayoutConfigModel";
import {ConfigModel} from "../ConfigModel";

export class ChildLayoutConfigModel{
  layout:RowLayoutConfigModel|ColumnLayoutConfigModel = new RowLayoutConfigModel()
  constructor() {
  }
}
