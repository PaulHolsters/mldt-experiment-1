import {HeightConfigPropsModel} from "../Dimensioning/self/HeightConfigPropsModel";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";

export class ChildPropertiesConfigModel {
  //todo
  constructor(
    public height:HeightConfigPropsModel||HeightValueConfigType.NC,
  ) {
  }
}
