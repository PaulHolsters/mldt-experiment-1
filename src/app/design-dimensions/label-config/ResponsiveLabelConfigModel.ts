import {LabelConfigModel} from "./LabelConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {LabelRenderModel} from "./LabelRenderModel";
export class ResponsiveLabelConfigModel extends ResponsiveConfigModel<ResponsiveLabelConfigModel> {
  public portraitTablet: LabelConfigModel|undefined=undefined
  public tablet:LabelConfigModel|undefined=undefined
  public laptop: LabelConfigModel|undefined=undefined
  public highResolution: LabelConfigModel|undefined=undefined
  constructor(public smartphone:LabelConfigModel) {
    super()
  }
  getInstance(){
    return 'table'
  }
  public getLabelRenderProperties(screenSize: number): LabelRenderModel {
    const mapToToLabelRenderProperties = (config: LabelConfigModel): LabelRenderModel => {
      const renderInstance = new LabelRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToLabelRenderProperties)
  }
}
