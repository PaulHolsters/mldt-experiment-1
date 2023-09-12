import {HeightConfigModel} from "./HeightConfigModel";
import {WidthConfigModel} from "./WidthConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
export class DimensioningConfigModel{
  constructor(// todo later nog de mogelijkheid van een ratio toevoegen
    public width:WidthConfigModel|ZeroValueType.NotConfigured,
    public height:HeightConfigModel|ZeroValueType.NotConfigured
  ){
  }

}
