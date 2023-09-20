import {LayoutOverrideConfigModel} from "./LayoutOverrideConfigModel";
import {LayoutOverrideRenderModel} from "./LayoutOverrideRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
export class ResponsiveLayoutOverrideConfigModel extends ResponsiveConfigModel<ResponsiveLayoutOverrideConfigModel>{
  public smartphone:LayoutOverrideConfigModel=new LayoutOverrideConfigModel()
  public portraitTablet: LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  constructor() {
    super()
  }
  getInstance(){
    return 'position'
  }
  public getPositionRenderProperties(screenSize: number): LayoutOverrideRenderModel {
    const mapToPositioningRenderProperties =
      (config: LayoutOverrideConfigModel): LayoutOverrideRenderModel => {
        const renderInstance = new LayoutOverrideRenderModel()
        Object.entries(config).forEach(([k,v])=>{
          if(v) renderInstance.setProperty(k,v)
        })
        return renderInstance
      }
     return this.getRenderProperties(screenSize,mapToPositioningRenderProperties)
  }
}
