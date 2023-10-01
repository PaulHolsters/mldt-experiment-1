import {SpacingConfigModel} from "./SpacingConfigModel";
import {SpacingRenderModel} from "./SpacingRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../types/type-aliases";

export class ResponsiveSpacingConfigModel extends ResponsiveConfigModel<SpacingConfigModel>
implements ResponsiveConfigModelI<SpacingConfigModel>{
  public smartphone:SpacingConfigModel=new SpacingConfigModel()
  public portraitTablet: SpacingConfigModel|DeterminedByEngine=undefined
  public tablet:SpacingConfigModel|DeterminedByEngine=undefined
  public laptop: SpacingConfigModel|DeterminedByEngine=undefined
  public highResolution: SpacingConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:SpacingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: SpacingConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: SpacingConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: SpacingConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: SpacingConfigModel| DeterminedByEngine){
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
