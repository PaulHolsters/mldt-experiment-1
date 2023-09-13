import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {DialogContentInjectionConfigModel} from "./DialogContentInjectionConfigModel";
import {DialogContentInjectionRenderModel} from "./DialogContentInjectionRenderModel";

export class ResponsiveDialogContentInjectionConfigModel extends ResponsiveConfigModel<ResponsiveDialogContentInjectionConfigModel> {
  public portraitTablet: DialogContentInjectionConfigModel|undefined=undefined
  public tablet:DialogContentInjectionConfigModel|undefined=undefined
  public laptop: DialogContentInjectionConfigModel|undefined=undefined
  public highResolution: DialogContentInjectionConfigModel|undefined=undefined
  constructor(public smartphone:DialogContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'dialog'
  }
  public getDialogContentInjectionRenderProperties(screenSize: number): DialogContentInjectionRenderModel {
    const mapToToDialogContentInjectionRenderProperties = (config: DialogContentInjectionConfigModel): DialogContentInjectionRenderModel => {
      const renderInstance = new DialogContentInjectionRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToDialogContentInjectionRenderProperties)
  }
}
