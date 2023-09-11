import {NonCalculatedDimensioningConfigModel} from "./NonCalculatedDimensioningConfigModel";
import {CalculatedDimensioningConfigModel} from "./CalculatedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ConfigModel} from "../ConfigModel";

export class HeightConfigModel extends ConfigModel{
  value:NonCalculatedDimensioningConfigModel|CalculatedDimensioningConfigModel|DynamicDimensioningConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor(){
super()
  }

}
