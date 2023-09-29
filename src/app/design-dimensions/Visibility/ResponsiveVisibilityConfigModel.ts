import {VisibilityConfigModel} from "./VisibilityConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {VisibilityRenderModel} from "./VisibilityRenderModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
export class ResponsiveVisibilityConfigModel extends ResponsiveConfigModel<VisibilityConfigModel>
implements ResponsiveConfigModelI<VisibilityConfigModel>{
  public highResolution: VisibilityConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public laptop: VisibilityConfigModel | ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public portraitTablet: VisibilityConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public tablet: VisibilityConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  public smartphone:VisibilityConfigModel = new VisibilityConfigModel()
  setSmartphone(smartphone:VisibilityConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: VisibilityConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: VisibilityConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: VisibilityConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: VisibilityConfigModel| ZeroValueType.DeterminedByEngine){
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
