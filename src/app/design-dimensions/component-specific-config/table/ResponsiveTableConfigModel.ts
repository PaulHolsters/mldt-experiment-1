import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableConfigModel} from "./TableConfigModel";
import {TableRenderModel} from "./TableRenderModel";
export class ResponsiveTableConfigModel extends ResponsiveConfigModel<ResponsiveTableConfigModel> {
  public smartphone:TableConfigModel = new TableConfigModel()
  public portraitTablet: TableConfigModel|undefined=undefined
  public tablet:TableConfigModel|undefined=undefined
  public laptop: TableConfigModel|undefined=undefined
  public highResolution: TableConfigModel|undefined=undefined
  constructor() {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getTableRenderProperties(screenSize: number): TableRenderModel {
    const mapToToTableRenderProperties = (tableConfig: TableConfigModel): TableRenderModel => {
      const renderInstance = new TableRenderModel()
      Object.entries(tableConfig).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToTableRenderProperties)
  }
}
