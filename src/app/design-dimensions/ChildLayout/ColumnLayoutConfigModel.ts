import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisColumnLayoutConfigTypes.enum";
import {
  ColumnPositioningConfigType
} from "../../enums/columnPositioningConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalLayoutConfigTypes.enum";
import {ChildPropertiesConfigModel} from "../junkmodels/ChildPropertiesConfigModel";
export class ColumnLayoutConfigModel {
  mainAxisPositioning: MainAxisVerticalLayoutConfigType = MainAxisVerticalLayoutConfigType.Top  // todo steek hier ook Width , Dynamic Width bij
  crossAxisPositioning: CrossAxisHorizontalLayoutConfigType = CrossAxisHorizontalLayoutConfigType.Left // todo stretch hier toevoegen + Height
  columPositioning: ColumnPositioningConfigType = ColumnPositioningConfigType.Left
  columnWrap: boolean = true
  childProperties:ChildPropertiesConfigModel|undefined=undefined
  setMainAxisPositioning(positioning:MainAxisVerticalPositioningConfigType){

  }
  setCrossAxisPositioning(positioning:CrossAxisHorizontalPositioningConfigType){

  }
  setColumnPositioning(columnPositioning:ColumnPositioningConfigType){

  }
  setColumnWrap(columnWrap:boolean){

  }
  setChildProperties(childProperties:ChildPropertiesConfigModel){
    /*
    * public scroll: boolean,
    * public width: WidthConfigPropsModel|WidthValueConfigType.NA|WidthValueConfigType.NC,height
    * */
  }
}
