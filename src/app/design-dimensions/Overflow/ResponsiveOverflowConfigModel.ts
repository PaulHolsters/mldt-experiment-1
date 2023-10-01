import {OverflowConfigModel} from "./OverflowConfigModel";
import {OverflowRenderModel} from "./OverflowRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../types/type-aliases";

export class ResponsiveOverflowConfigModel extends ResponsiveConfigModel<OverflowConfigModel>
implements ResponsiveConfigModelI<OverflowConfigModel>{
  public smartphone:OverflowConfigModel=new OverflowConfigModel()
  public portraitTablet: OverflowConfigModel|DeterminedByEngine=undefined
  public tablet:OverflowConfigModel|DeterminedByEngine=undefined
  public laptop: OverflowConfigModel|DeterminedByEngine=undefined
  public highResolution: OverflowConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:OverflowConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: OverflowConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: OverflowConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: OverflowConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: OverflowConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor() {
    super()
  }
  getInstance(){
    return 'overflow'
  }
  public getOverflowRenderProperties(screenSize: number): OverflowRenderModel {
    const overflowConfig = this.getConfigModel(screenSize)
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


}
