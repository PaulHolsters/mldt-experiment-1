import {SpacingConfigModel} from "./SpacingConfigModel";
import {SpacingRenderModel} from "./SpacingRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class ResponsiveSpacingConfigModel extends ResponsiveConfigModel<SpacingConfigModel>
implements ResponsiveConfigModelI<SpacingConfigModel>{
  public smartphone:SpacingConfigModel=new SpacingConfigModel()
  public portraitTablet: SpacingConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:SpacingConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: SpacingConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: SpacingConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:SpacingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: SpacingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: SpacingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: SpacingConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: SpacingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor() {
    super()
  }
  getInstance(){
    return 'overflow'
  }
  public getOverflowRenderProperties(screenSize: number): SpacingRenderModel {
    const config = this.getConfigModel(screenSize)
    const orm =new SpacingRenderModel()
    // todo
    return orm
  }


}
