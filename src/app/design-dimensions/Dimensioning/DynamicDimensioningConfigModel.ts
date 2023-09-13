import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  public grow: number|ParentConfigType.grow=0
  public shrink: number|ParentConfigType.shrink=0
  constructor(
  ) {
  }
  public setGrow(grow:number|ParentConfigType.grow){
    this.grow = grow
    return this
  }
  public setShrink(shrink:number|ParentConfigType.shrink){
    this.shrink = shrink
    return this
  }
}
