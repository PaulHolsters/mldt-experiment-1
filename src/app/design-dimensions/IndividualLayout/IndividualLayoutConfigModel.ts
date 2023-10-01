import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {DisplayType} from "../../enums/displayType.enum";
import {NotConfigured} from "../../types/type-aliases";

export class IndividualLayoutConfigModel {
  public selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|NotConfigured=undefined
  public displayType:DisplayType|NotConfigured=undefined
  constructor(

    ) {
    // todo add relative position
    // todo add z-index
    // todo add absolute position
  }
  setSelfAlign(selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|NotConfigured){
    this.selfAlign=selfAlign
    return this
  }
  setDisplayType(displayType:DisplayType|NotConfigured){
    this.displayType=displayType
    return this
  }

}
