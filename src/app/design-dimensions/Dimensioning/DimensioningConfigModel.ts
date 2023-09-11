import {HeightConfigModel} from "./HeightConfigModel";
import {WidthConfigModel} from "./WidthConfigModel";
export class DimensioningConfigModel{
  public width:WidthConfigModel=new WidthConfigModel()
  public height:HeightConfigModel=new HeightConfigModel()
  constructor(// todo later nog de mogelijkheid van een ratio toevoegen
  ){
  }

}
