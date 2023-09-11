import {ContentInjectionConfigModel} from "./ContentInjectionConfigModel";
import {ContentInjectionRenderModel} from "./ContentInjectionRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";

export class ResponsiveContentInjectionConfigModel extends ResponsiveConfigModel<ResponsiveContentInjectionConfigModel> {
  public smartphone:ContentInjectionConfigModel = new ContentInjectionConfigModel()
  public portraitTablet: ContentInjectionConfigModel|undefined = undefined
  public tablet:ContentInjectionConfigModel|undefined = undefined
  public laptop: ContentInjectionConfigModel|undefined = undefined
  public highResolution: ContentInjectionConfigModel|undefined = undefined
  constructor() {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): ContentInjectionRenderModel {
    const translateToContentInjectionComponentProps = (CIConfig: ContentInjectionConfigModel): ContentInjectionRenderModel => {
      return new ContentInjectionRenderModel(
        CIConfig.start,
        CIConfig.end,
        CIConfig.content,
        CIConfig.columnHeaderComponents,
        CIConfig.footer,
        CIConfig.caption,
        CIConfig.extraColumns
      )
    }
    return this.getRenderProperties(screenSize,translateToContentInjectionComponentProps)
  }

}
