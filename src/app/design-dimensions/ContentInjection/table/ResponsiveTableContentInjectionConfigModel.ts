import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableContentInjectionConfigModel} from "./TableContentInjectionConfigModel";
import {TableContentInjectionRenderModel} from "./TableContentInjectionRenderModel";

export class ResponsiveTableContentInjectionConfigModel extends ResponsiveConfigModel<ResponsiveTableContentInjectionConfigModel> {
  public portraitTablet: TableContentInjectionConfigModel|undefined=undefined
  public tablet:TableContentInjectionConfigModel|undefined=undefined
  public laptop: TableContentInjectionConfigModel|undefined=undefined
  public highResolution: TableContentInjectionConfigModel|undefined=undefined
  constructor(public smartphone:TableContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'menubar'
  }
  public getTableContentInjectionRenderProperties(screenSize: number): TableContentInjectionRenderModel {
    const mapToToTableContentInjectionRenderProperties = (config: TableContentInjectionConfigModel): TableContentInjectionRenderModel => {
      const renderInstance = new TableContentInjectionRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToTableContentInjectionRenderProperties)
  }
}
