import {VisibilityConfigModel} from "./VisibilityConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {VisibilityRenderModel} from "./VisibilityRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../enums/NoValueTypes.enum";
export class ResponsiveVisibilityConfigModel extends ResponsiveConfigModel<VisibilityConfigModel>
implements ResponsiveConfigModelI<VisibilityConfigModel>{
  public highResolution: VisibilityConfigModel| NoValueType.CALCULATED_BY_ENGINE =NoValueType.CALCULATED_BY_ENGINE
  public laptop: VisibilityConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet: VisibilityConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet: VisibilityConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public smartphone:VisibilityConfigModel = new VisibilityConfigModel()
  setSmartphone(smartphone:VisibilityConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: VisibilityConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: VisibilityConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: VisibilityConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: VisibilityConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  getInstance(){
    return 'visibility'
  }
  public getVisibilityRenderProperties(screenSize: number): VisibilityRenderModel {
    const configModel = this.getConfigModel(screenSize)
    const compPropsObj = new VisibilityRenderModel()
    Object.entries(configModel).forEach(([k, v]) => {
      compPropsObj.setProperty(k, v)
    })
    return compPropsObj
  }
}
