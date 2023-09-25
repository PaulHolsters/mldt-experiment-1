import {TableGridType} from "../../../enums/tableGridType.enum";

export class TableStylingConfigModel {
  gridType:TableGridType=TableGridType.ColumnAndRow
  setGridType(gridType:TableGridType){
    this.gridType = gridType
    return this
  }
  constructor(){
  }


}
