import {OverflowConfigModel} from "./OverflowConfigModel";
import {OverflowRenderModel} from "./OverflowRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";

export class ResponsiveOverflowConfigModel extends ResponsiveConfigModel<OverflowConfigModel>
implements ResponsiveConfigModelI<OverflowConfigModel>{
  public smartphone:OverflowConfigModel=new OverflowConfigModel()
  public portraitTablet: OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: OverflowConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:OverflowConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: OverflowConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: OverflowConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: OverflowConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: OverflowConfigModel| ZeroValueType.DeterminedByEngine){
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
