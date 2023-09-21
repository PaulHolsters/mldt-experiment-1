import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {DynamicSizeConfigModel} from "./DynamicSizeConfigModel";
import {NonCalculatedSizeConfigModel} from "./NonCalculatedSizeConfigModel";
import {CalculatedSizeConfigModel} from "./CalculatedSizeConfigModel";
import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {ButtonSizeConfigModel} from "./button/ButtonSizeConfigModel";
export class SizeConfigModel {
  public width:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public height:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static |
    ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public dynamic:DynamicSizeConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public componentSpecificSize:ButtonSizeConfigModel|ZeroValueType.NotAllowed=ZeroValueType.NotAllowed
  constructor(// todo later nog de mogelijkheid van een ratio toevoegen
     ){
  }

}
