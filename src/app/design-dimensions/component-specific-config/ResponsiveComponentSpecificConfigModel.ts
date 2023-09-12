import {ComponentSpecificRenderModel} from "./ComponentSpecificRenderModel";
import {ComponentSpecificConfigModel} from "./ComponentSpecificConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";

export class ResponsiveComponentSpecificConfigModel extends ResponsiveConfigModel<ResponsiveComponentSpecificConfigModel> {
  public portraitTablet: ComponentSpecificConfigModel|undefined=undefined
  public tablet:ComponentSpecificConfigModel|undefined=undefined
  public laptop: ComponentSpecificConfigModel|undefined=undefined
  public highResolution: ComponentSpecificConfigModel|undefined=undefined
  constructor(public smartphone:ComponentSpecificConfigModel) {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getIconRenderProperties(screenSize: number): ComponentSpecificRenderModel {
    const mapToToIconRenderProperties = (config: ComponentSpecificConfigModel): ComponentSpecificRenderModel => {
      const renderInstance = new ComponentSpecificRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToIconRenderProperties)
  }
}
