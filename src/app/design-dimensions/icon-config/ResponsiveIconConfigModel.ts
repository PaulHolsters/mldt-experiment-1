import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {IconConfigModel} from "./IconConfigModel";
import {IconRenderModel} from "./IconRenderModel";

export class ResponsiveIconConfigModel extends ResponsiveConfigModel<ResponsiveIconConfigModel> {
  public portraitTablet: IconConfigModel|undefined=undefined
  public tablet:IconConfigModel|undefined=undefined
  public laptop: IconConfigModel|undefined=undefined
  public highResolution: IconConfigModel|undefined=undefined
  constructor(public smartphone:IconConfigModel) {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getIconRenderProperties(screenSize: number): IconRenderModel {
    const mapToToIconRenderProperties = (config: IconConfigModel): IconRenderModel => {
      const renderInstance = new IconRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToIconRenderProperties)
  }
}
