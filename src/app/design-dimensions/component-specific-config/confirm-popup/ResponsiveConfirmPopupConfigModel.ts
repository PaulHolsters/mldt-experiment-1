import {ConfirmPopupConfigModel} from "./ConfirmPopupConfigModel";
import {ConfirmPopupRenderModel} from "./ConfirmPopupRenderModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";

export class ResponsiveConfirmPopupConfigModel extends ResponsiveConfigModel<ResponsiveConfirmPopupConfigModel> {
  public portraitTablet: ConfirmPopupConfigModel|undefined=undefined
  public tablet:ConfirmPopupConfigModel|undefined=undefined
  public laptop: ConfirmPopupConfigModel|undefined=undefined
  public highResolution: ConfirmPopupConfigModel|undefined=undefined
  constructor(public smartphone:ConfirmPopupConfigModel) {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getConfirmPopupRenderProperties(screenSize: number): ConfirmPopupRenderModel {
    const mapToToConfirmPopupRenderProperties = (config: ConfirmPopupConfigModel): ConfirmPopupRenderModel => {
      const renderInstance = new ConfirmPopupRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToConfirmPopupRenderProperties)
  }
}
