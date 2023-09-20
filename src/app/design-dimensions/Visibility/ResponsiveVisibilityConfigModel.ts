import {VisibilityConfigModel} from "./VisibilityConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {VisibilityRenderModel} from "./VisibilityRenderModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
export class ResponsiveVisibilityConfigModel extends ResponsiveConfigModel<ResponsiveVisibilityConfigModel>{
  public highResolution: VisibilityConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public laptop: VisibilityConfigModel | ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public portraitTablet: VisibilityConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public tablet: VisibilityConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public smartphone:VisibilityConfigModel = new VisibilityConfigModel()
  getInstance(){
    return 'visibility'
  }
  public getVisibilityRenderProperties(screenSize: number): VisibilityRenderModel {
    const mapToVisibilityComponentProps = (visibilityConfig: VisibilityConfigModel): VisibilityRenderModel => {
      const compPropsObj = new VisibilityRenderModel()
      Object.entries(visibilityConfig).forEach(([k, v]) => {
        compPropsObj.setProperty(k, v)
      })
      return compPropsObj
    }
    return this.getRenderProperties(screenSize,mapToVisibilityComponentProps)
  }
}
