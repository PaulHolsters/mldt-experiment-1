import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {DynamicSizeConfigModel} from "./DynamicSizeConfigModel";
import {NonCalculatedSizeConfigModel} from "./NonCalculatedSizeConfigModel";
import {CalculatedSizeConfigModel} from "./CalculatedSizeConfigModel";
import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {ButtonSizeConfigModel} from "./button/ButtonSizeConfigModel";

export class SizeConfigModel {
  width:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  height:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  dynamicSize:DynamicSizeConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  // todo zorg ervoor dat at compile time je geen foutieve component kan nemen
  componentSpecificSize:ButtonSizeConfigModel|ZeroValueType.NotAllowed=ZeroValueType.NotAllowed
  constructor(
  // todo later nog de mogelijkheid van een ratio toevoegen
  ){
  }

  setWidth(width:
             NonCalculatedSizeConfigModel |
             CalculatedSizeConfigModel |
             ParentConfigType.static |
             ZeroValueType.NotConfigured){
    this.width = width
    return this
  }
  setHeight(height:
              NonCalculatedSizeConfigModel |
              CalculatedSizeConfigModel |
              ParentConfigType.static |
              ZeroValueType.NotConfigured){
    this.height = height
    return this
  }
  setDynamicSize(dynamicSize:DynamicSizeConfigModel|ZeroValueType.NotConfigured){
    this.dynamicSize = dynamicSize
    return this
  }
  setComponentSpecificSize(componentSpecificSize:ButtonSizeConfigModel|ZeroValueType.NotAllowed){
    this.componentSpecificSize = componentSpecificSize
    return this
  }
}
