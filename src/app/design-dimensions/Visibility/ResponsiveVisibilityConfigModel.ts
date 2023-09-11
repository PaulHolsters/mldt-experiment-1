import {VisibilityConfigModel} from "./VisibilityConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {VisibilityRenderModel} from "./VisibilityRenderModel";
export class ResponsiveVisibilityConfigModel extends ResponsiveConfigModel<ResponsiveVisibilityConfigModel>{
  getInstance(){
    return 'visibility'
  }
  public getVisibilityRenderProperties(screenSize: number): VisibilityRenderModel {
    const translateToVisibilityComponentProps = (visibilityConfig: VisibilityConfigModel): VisibilityRenderModel => {
      const compPropsObj = new VisibilityRenderModel()
      Object.entries(visibilityConfig).forEach(([k, v]) => {
        compPropsObj.setProperty(k, v)
      })
      return compPropsObj
    }
    return this.getRenderProperties(screenSize,translateToVisibilityComponentProps)
  }
}
