import {DynamicSizeConfigModel} from "./DynamicSizeConfigModel";
import {NonCalculatedSizeConfigModel} from "./NonCalculatedSizeConfigModel";
import {CalculatedSizeConfigModel} from "./CalculatedSizeConfigModel";
import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {ButtonSizeConfigModel} from "./button/ButtonSizeConfigModel";
import {IconSizeConfigModel} from "./icon/IconSizeConfigModel";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class SizeConfigModel {
  width:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  height:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  dynamicSize:DynamicSizeConfigModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  // todo zorg ervoor dat at compile time je geen foutieve component kan nemen
  componentSpecificSize:ButtonSizeConfigModel|IconSizeConfigModel|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED
  constructor(
  // todo later nog de mogelijkheid van een ratio toevoegen
  ){
  }
  setWidth(width:
             NonCalculatedSizeConfigModel |
             CalculatedSizeConfigModel |
             ParentConfigType.static |
             NoValueType.NO_VALUE_NEEDED){
    this.width = width
    return this
  }
  setHeight(height:
              NonCalculatedSizeConfigModel |
              CalculatedSizeConfigModel |
              ParentConfigType.static |
              NoValueType.NO_VALUE_NEEDED){
    this.height = height
    return this
  }
  setDynamicSize(dynamicSize:DynamicSizeConfigModel|NoValueType.NO_VALUE_NEEDED){
    this.dynamicSize = dynamicSize
    return this
  }
  setComponentSpecificSize(componentSpecificSize:ButtonSizeConfigModel|IconSizeConfigModel|NoValueType.NO_VALUE_ALLOWED){
    this.componentSpecificSize = componentSpecificSize
    return this
  }
}
