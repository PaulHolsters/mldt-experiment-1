import {OverflowConfigModel} from "./OverflowConfigModel";
import {OverflowRenderModel} from "./OverflowRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";

export class ResponsiveOverflowConfigModel extends ResponsiveConfigModel<ResponsiveOverflowConfigModel>{
  public smartphone:OverflowConfigModel=new OverflowConfigModel()
  public portraitTablet: OverflowConfigModel|undefined=undefined
  public tablet:OverflowConfigModel|undefined=undefined
  public laptop: OverflowConfigModel|undefined=undefined
  public highResolution: OverflowConfigModel|undefined=undefined
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
