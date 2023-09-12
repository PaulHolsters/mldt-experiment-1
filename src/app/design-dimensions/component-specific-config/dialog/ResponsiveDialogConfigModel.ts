import {DialogConfigModel} from "./DialogConfigModel";
import {DialogRenderModel} from "./DialogRenderModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";

export class ResponsiveDialogConfigModel extends ResponsiveConfigModel<ResponsiveDialogConfigModel> {
  public portraitTablet: DialogConfigModel|undefined=undefined
  public tablet:DialogConfigModel|undefined=undefined
  public laptop: DialogConfigModel|undefined=undefined
  public highResolution: DialogConfigModel|undefined=undefined
  constructor(public smartphone:DialogConfigModel) {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getDialogRenderProperties(screenSize: number): DialogRenderModel {
    const mapToToDialogRenderProperties = (config: DialogConfigModel): DialogRenderModel => {
      const renderInstance = new DialogRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToDialogRenderProperties)
  }
}
