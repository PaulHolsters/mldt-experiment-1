import {ResponsiveTableLayoutType} from "../../../enums/responsiveTableLayoutType.enum";

export class TableLayoutConfigModel {
  public responsiveTableLayout: ResponsiveTableLayoutType=ResponsiveTableLayoutType.Scroll
  public tableBreakpoint: number = 960
  constructor() {
  }
  setResponsiveTableLayout(layout:ResponsiveTableLayoutType):TableLayoutConfigModel{
    this.responsiveTableLayout = layout
    return this
  }
  setTableBreakpoint(bp:number):TableLayoutConfigModel{
    this.tableBreakpoint = bp
    return this
  }
}
