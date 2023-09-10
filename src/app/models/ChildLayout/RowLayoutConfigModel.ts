import {ChildPropertiesConfigModel} from "./ChildPropertiesConfigModel";
import {RowPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";
import {MainAxisHorizontalLayoutConfigType} from "../../enums/mainAxisHorizontalLayoutConfigTypes.enum";
import {CrossAxisVerticalLayoutConfigType} from "../../enums/crossAxisVerticalLayoutConfigTypes.enum";
import {HeightConfigPropsModel} from "../Dimensioning/self/HeightConfigPropsModel";

export class RowLayoutConfigModel {
  // todo wijig zodat enkel row en column hiezr staat en niets van axissen
  mainAxisChildLayout: MainAxisHorizontalLayoutConfigType = MainAxisHorizontalLayoutConfigType.Left // todo steek hier ook Width , Dynamic Width bij
  crossAxisChildLayout: CrossAxisVerticalLayoutConfigType = CrossAxisVerticalLayoutConfigType.Top // todo stretch hier toevoegen + Height
  rowPositioning: RowPositioningConfigType = RowPositioningConfigType.Top
  rowWrap: boolean = true
  childProperties:ChildPropertiesConfigModel|undefined=undefined // todo nice-to-have
  setMainAxisChildLayout(layout:MainAxisHorizontalLayoutConfigType){

  }
  setCrossAxisChildLayout(layout:CrossAxisVerticalLayoutConfigType){

  }
  setRowPositioning(rowPositioning:RowPositioningConfigType){

  }
  setRowWrap(rowWrap:boolean){

  }
  setChildProperties(childProperties:ChildPropertiesConfigModel){
    /*
    * public scroll: boolean,
    * public width: WidthConfigPropsModel|WidthValueConfigType.NA|WidthValueConfigType.NC,height
    * */
  }
}
