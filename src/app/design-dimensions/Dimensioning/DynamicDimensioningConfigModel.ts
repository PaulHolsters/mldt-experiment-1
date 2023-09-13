import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  public grow: number|ParentConfigType.grow=0
  public shrink: number|ParentConfigType.shrink=0
  constructor(
  ) {
  }
  // todo setters
}
