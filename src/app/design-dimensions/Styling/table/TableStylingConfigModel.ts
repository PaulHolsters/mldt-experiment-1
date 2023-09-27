import {TableGridType} from "../../../enums/tableGridType.enum";

export class TableStylingConfigModel {
  gridType:TableGridType=TableGridType.ColumnAndRow
  // todo vul aan
  setGridType(gridType:TableGridType){
    this.gridType = gridType
    return this
  }
  constructor(){
  }


}
