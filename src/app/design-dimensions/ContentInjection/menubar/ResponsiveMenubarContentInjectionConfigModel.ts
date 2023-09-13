import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {MenubarContentInjectionConfigModel} from "./MenubarContentInjectionConfigModel";
import {MenubarContentInjectionRenderModel} from "./MenubarContentInjectionRenderModel";

export class ResponsiveMenubarContentInjectionConfigModel extends ResponsiveConfigModel<ResponsiveMenubarContentInjectionConfigModel> {
  public portraitTablet: MenubarContentInjectionConfigModel|undefined=undefined
  public tablet:MenubarContentInjectionConfigModel|undefined=undefined
  public laptop: MenubarContentInjectionConfigModel|undefined=undefined
  public highResolution: MenubarContentInjectionConfigModel|undefined=undefined
  constructor(public smartphone:MenubarContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'menubar'
  }
  public getMenubarContentInjectionRenderProperties(screenSize: number): MenubarContentInjectionRenderModel {
    const mapToToMenubarContentInjectionRenderProperties = (config: MenubarContentInjectionConfigModel): MenubarContentInjectionRenderModel => {
      const renderInstance = new MenubarContentInjectionRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToMenubarContentInjectionRenderProperties)
  }
}
