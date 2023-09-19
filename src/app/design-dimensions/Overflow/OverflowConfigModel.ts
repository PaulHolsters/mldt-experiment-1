import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";

export class OverflowConfigModel {
  constructor(public overflow:OverflowValueConfigType=OverflowValueConfigType.Auto) {
  }
}
