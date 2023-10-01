import {DynamicSizeConfigModel} from "./DynamicSizeConfigModel";
import {NonCalculatedSizeConfigModel} from "./NonCalculatedSizeConfigModel";
import {CalculatedSizeConfigModel} from "./CalculatedSizeConfigModel";
import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {ButtonSizeConfigModel} from "./button/ButtonSizeConfigModel";
import {IconSizeConfigModel} from "./icon/IconSizeConfigModel";
import {NotAllowed, NotConfigured} from "../../types/type-aliases";

export class SizeConfigModel {
  width:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    NotConfigured=undefined
  height:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    NotConfigured=undefined
  dynamicSize:DynamicSizeConfigModel|NotConfigured=undefined
  // todo zorg ervoor dat at compile time je geen foutieve component kan nemen
  componentSpecificSize:ButtonSizeConfigModel|IconSizeConfigModel|NotAllowed=undefined
  constructor(
  // todo later nog de mogelijkheid van een ratio toevoegen
  ){
  }
  setWidth(width:
             NonCalculatedSizeConfigModel |
             CalculatedSizeConfigModel |
             ParentConfigType.static |
             NotConfigured){
    this.width = width
    return this
  }
  setHeight(height:
              NonCalculatedSizeConfigModel |
              CalculatedSizeConfigModel |
              ParentConfigType.static |
              NotConfigured){
    this.height = height
    return this
  }
  setDynamicSize(dynamicSize:DynamicSizeConfigModel|NotConfigured){
    this.dynamicSize = dynamicSize
    return this
  }
  setComponentSpecificSize(componentSpecificSize:ButtonSizeConfigModel|IconSizeConfigModel|NotAllowed){
    this.componentSpecificSize = componentSpecificSize
    return this
  }
}
