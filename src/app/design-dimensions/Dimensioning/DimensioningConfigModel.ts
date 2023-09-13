import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {NonCalculatedDimensioningConfigModel} from "./NonCalculatedDimensioningConfigModel";
import {CalculatedDimensioningConfigModel} from "./CalculatedDimensioningConfigModel";
import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";

export class DimensioningConfigModel{
  constructor(// todo later nog de mogelijkheid van een ratio toevoegen
    public width:
    NonCalculatedDimensioningConfigModel |
    CalculatedDimensioningConfigModel |
    ParentConfigType.static |
    ZeroValueType.NotConfigured,
    public height:
      NonCalculatedDimensioningConfigModel |
      CalculatedDimensioningConfigModel |
      ParentConfigType.static |
      ZeroValueType.NotConfigured,
    public dynamic:DynamicDimensioningConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  ){
  }

}
