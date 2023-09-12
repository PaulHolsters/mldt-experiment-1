import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {MenubarConfigModel} from "./MenubarConfigModel";
import {MenubarRenderModel} from "./MenubarRenderModel";

export class ResponsiveMenubarConfigModel extends ResponsiveConfigModel<ResponsiveMenubarConfigModel> {
  public portraitTablet: MenubarConfigModel|undefined=undefined
  public tablet:MenubarConfigModel|undefined=undefined
  public laptop: MenubarConfigModel|undefined=undefined
  public highResolution: MenubarConfigModel|undefined=undefined
  constructor(public smartphone:MenubarConfigModel) {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getMenubarRenderProperties(screenSize: number): MenubarRenderModel {
    const mapToToMenubarRenderProperties = (config: MenubarConfigModel): MenubarRenderModel => {
      const renderInstance = new MenubarRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToMenubarRenderProperties)
  }
}
