import {FixedDimensioningConfigModel} from "./FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {DimensioningChildConfigPropsModel} from "../children/DimensioningChildConfigPropsModel";
export class DimensioningConfigPropsModel {
  constructor(  public height?:FixedDimensioningConfigModel|DynamicDimensioningConfigModel,
                public width?:FixedDimensioningConfigModel|DynamicDimensioningConfigModel,
                public childDimensioning?:DimensioningChildConfigPropsModel
                // todo later nog de mogelijkheid van een ratio toevoegen
  ){
     // todo constraint toevoegen in de code die laat weten als je een component een dimensie meegeeft in de cross axis
    //    dat dit niet gaat als de position STRETCH is
  }

}
