import {OverflowConfigModel} from "./OverflowConfigModel";
import {OverflowRenderModel} from "./OverflowRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class ResponsiveOverflowConfigModel extends ResponsiveConfigModel<OverflowConfigModel>
implements ResponsiveConfigModelI<OverflowConfigModel>{
  public smartphone:OverflowConfigModel=new OverflowConfigModel()
  public portraitTablet: OverflowConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:OverflowConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: OverflowConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: OverflowConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:OverflowConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: OverflowConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: OverflowConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: OverflowConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: OverflowConfigModel| NoValueType.CALCULATED_BY_ENGINE){
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
