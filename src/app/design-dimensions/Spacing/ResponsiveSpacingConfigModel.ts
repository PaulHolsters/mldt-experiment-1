import {SpacingConfigModel} from "./SpacingConfigModel";
import {SpacingRenderModel} from "./SpacingRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {OverflowConfigModel} from "../Overflow/OverflowConfigModel";

export class ResponsiveSpacingConfigModel extends ResponsiveConfigModel<SpacingConfigModel>
implements ResponsiveConfigModelI<SpacingConfigModel>{
  public smartphone:SpacingConfigModel=new SpacingConfigModel()
  public portraitTablet: SpacingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:SpacingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: SpacingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: SpacingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:SpacingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: SpacingConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: SpacingConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: SpacingConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: SpacingConfigModel| ZeroValueType.DeterminedByEngine){
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
