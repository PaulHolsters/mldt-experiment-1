import {ChildPropertiesConfigModel} from "../junkmodels/ChildPropertiesConfigModel";
import {RowPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";
import {MainAxisHorizontalLayoutConfigType} from "../../enums/mainAxisHorizontalLayoutConfigTypes.enum";
import {CrossAxisVerticalLayoutConfigType} from "../../enums/crossAxisRowLayoutConfigTypes.enum";
import {HeightConfigModel} from "../Dimensioning/HeightConfigModel";
import {Y_DirectionRowConfigModel} from "./Y_DirectionRowConfigModel";
import {X_DirectionRowConfigModel} from "./X_DirectionRowConfigModel";

export class RowLayoutConfigModel {
  // todo wijig zodat enkel row en column hiezr staat en niets van axissen
  x_directionLayout: X_DirectionRowConfigModel

    // todo steek hier ook Width , Dynamic Width bij
  y_directionLayout: Y_DirectionRowConfigModel CrossAxisVerticalLayoutConfigType = CrossAxisVerticalLayoutConfigType.Top
  rowPositioning: RowPositioningConfigType = RowPositioningConfigType.Top
  wrap: boolean = true
  childProperties:ChildPropertiesConfigModel|undefined=undefined // todo nice-to-have
  setHorizontalLayout(layout:MainAxisHorizontalLayoutConfigType){

  }
  setVerticalLayout(layout:CrossAxisVerticalLayoutConfigType){

  }
  setRowPositioning(rowPositioning:RowPositioningConfigType){

  }
  setWrap(rowWrap:boolean){

  }
  setChildProperties(childProperties:ChildPropertiesConfigModel){
    /*
    * public scroll: boolean,
    * public width: WidthConfigPropsModel|WidthValueConfigType.NA|WidthValueConfigType.NC,height
    * */
  }
}
