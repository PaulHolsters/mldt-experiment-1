import {HeightConfigModel} from "../Dimensioning/HeightConfigModel";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";

export class ChildPropertiesConfigModel {
  //todo
  constructor(
    public height:HeightConfigModel|HeightValueConfigType.NC,
  ) {
  }
}
