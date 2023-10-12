import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {DisplayType} from "../../enums/displayType.enum";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class IndividualLayoutConfigModel {
  public selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public displayType:DisplayType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  constructor(

    ) {
    // todo add relative position
    // todo add z-index
    // todo add absolute position
  }
  setSelfAlign(selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|NoValueType.NO_VALUE_NEEDED){
    this.selfAlign=selfAlign
    return this
  }
  setDisplayType(displayType:DisplayType|NoValueType.NO_VALUE_NEEDED){
    this.displayType=displayType
    return this
  }

}
