import {ColumnLayoutConfigModel} from "./ColumnLayoutConfigModel";
import {RowLayoutConfigModel} from "./RowLayoutConfigModel";
import {ChildPropertiesConfigModel} from "./ChildPropertiesConfigModel";

export class ChildLayoutConfigModel{
  layout:RowLayoutConfigModel|ColumnLayoutConfigModel = new RowLayoutConfigModel()//parent
  childConfig:ChildPropertiesConfigModel|undefined=undefined//child
  constructor() {
  }
  setLayout(layout:RowLayoutConfigModel|ColumnLayoutConfigModel):ChildLayoutConfigModel{
    this.layout = layout
    return this
  }
  setChildConfig(config:ChildPropertiesConfigModel):ChildLayoutConfigModel{
    this.childConfig = config
    return this
  }
}
