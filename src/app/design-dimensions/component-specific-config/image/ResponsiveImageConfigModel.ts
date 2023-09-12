import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ImageConfigModel} from "./ImageConfigModel";
import {ImageRenderModel} from "./ImageRenderModel";
export class ResponsiveImageConfigModel extends ResponsiveConfigModel<ResponsiveImageConfigModel> {
  public portraitTablet: ImageConfigModel|undefined=undefined
  public tablet:ImageConfigModel|undefined=undefined
  public laptop: ImageConfigModel|undefined=undefined
  public highResolution: ImageConfigModel|undefined=undefined
  constructor(public smartphone:ImageConfigModel) {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getImageRenderProperties(screenSize: number): ImageRenderModel {
    const mapToToImageRenderProperties = (config: ImageConfigModel): ImageRenderModel => {
      const renderInstance = new ImageRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToImageRenderProperties)
  }
}
