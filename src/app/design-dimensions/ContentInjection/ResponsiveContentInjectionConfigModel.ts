import {ContentInjectionConfigModel} from "./ContentInjectionConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ContentInjectionRenderModel} from "./ContentInjectionRenderModel";

export class ResponsiveContentInjectionConfigModel extends ResponsiveConfigModel<ResponsiveContentInjectionConfigModel> {
  public portraitTablet: ContentInjectionConfigModel|undefined = undefined
  public tablet:ContentInjectionConfigModel|undefined = undefined
  public laptop: ContentInjectionConfigModel|undefined = undefined
  public highResolution: ContentInjectionConfigModel|undefined = undefined
  constructor(public smartphone:ContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): ContentInjectionRenderModel {
    const mapToToContentInjectionRenderProperties = (config: ContentInjectionConfigModel): ContentInjectionRenderModel => {
      const renderInstance = new ContentInjectionRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToContentInjectionRenderProperties)
  }

}
