import {OverflowConfigModel} from "./OverflowConfigModel";
import {OverflowRenderModel} from "./OverflowRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";

export class ResponsiveOverflowConfigModel extends ResponsiveConfigModel<ResponsiveOverflowConfigModel>{
  public smartphone:OverflowConfigModel=new OverflowConfigModel()
  public portraitTablet: OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  constructor() {
    super()
  }
  getInstance(){
    return 'overflow'
  }
  public getOverflowRenderProperties(screenSize: number): OverflowRenderModel {
    const mapToOverflowRenderProperties =
      (overflowConfig: OverflowConfigModel): OverflowRenderModel => {
        const orm =new OverflowRenderModel()
        orm.overflowVisible = overflowConfig.overflow === OverflowValueConfigType.Visible
        orm.overflowHidden = overflowConfig.overflow === OverflowValueConfigType.Hidden
        orm.overflowAuto = overflowConfig.overflow === OverflowValueConfigType.Auto
        orm.overflowScroll = overflowConfig.overflow === OverflowValueConfigType.Scroll
        orm.overflowXHidden = overflowConfig.overflow === OverflowValueConfigType.HorizontalHidden
        orm.overflowXVisible = overflowConfig.overflow === OverflowValueConfigType.HorizontalVisible
        orm.overflowXAuto = overflowConfig.overflow === OverflowValueConfigType.HorizontalAuto
        return orm
      }
    return this.getRenderProperties(screenSize,mapToOverflowRenderProperties)
  }


}
