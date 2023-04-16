import {HeightConfigPropsModel} from "./HeightConfigPropsModel";
import {WidthConfigPropsModel} from "./WidthConfigPropsModel";
export class DimensioningConfigPropsModel {
  constructor(  public height:HeightConfigPropsModel|undefined,
                public width:WidthConfigPropsModel|undefined
                // todo later nog de mogelijkheid van een ratio toevoegen
  ){
     // todo constraint toevoegen in de code die laat weten als je een component een dimensie meegeeft in de cross axis
    //    dat dit niet gaat als de position STRETCH is
  }

}
