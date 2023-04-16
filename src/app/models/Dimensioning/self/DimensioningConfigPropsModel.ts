import {HeightConfigPropsModel} from "./HeightConfigPropsModel";
import {WidthConfigPropsModel} from "./WidthConfigPropsModel";
import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";
import {HeightValueConfigType} from "../../../enums/HeightValueConfigTypes.enum";
import {WidthValueConfigType} from "../../../enums/WidthValueConfigTypes.enum";
export class DimensioningConfigPropsModel {
  constructor(  public height:HeightConfigPropsModel|HeightValueConfigType,
                public width:WidthConfigPropsModel|WidthValueConfigType
                // todo later nog de mogelijkheid van een ratio toevoegen
  ){
     // todo constraint toevoegen in de code die laat weten als je een component een dimensie meegeeft in de cross axis
    //    dat dit niet gaat als de position STRETCH is
  }

}
