import {HeightConfigPropsModel} from "./HeightConfigPropsModel";
import {WidthConfigPropsModel} from "./WidthConfigPropsModel";
import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";
export class DimensioningConfigPropsModel {
  constructor(  public height:HeightConfigPropsModel|DimensionValueConfigType.NC|DimensionValueConfigType.Parent,
                public width:WidthConfigPropsModel|DimensionValueConfigType.NC|DimensionValueConfigType.Parent
                // todo later nog de mogelijkheid van een ratio toevoegen
  ){
     // todo constraint toevoegen in de code die laat weten als je een component een dimensie meegeeft in de cross axis
    //    dat dit niet gaat als de position STRETCH is
  }

}
