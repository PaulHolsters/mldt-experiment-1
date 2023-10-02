import {VisibilityConfigModel} from "./VisibilityConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {VisibilityRenderModel} from "./VisibilityRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../types/type-aliases";
export class ResponsiveVisibilityConfigModel extends ResponsiveConfigModel<VisibilityConfigModel>
implements ResponsiveConfigModelI<VisibilityConfigModel>{
  public highResolution: VisibilityConfigModel| DeterminedByEngine =undefined
  public laptop: VisibilityConfigModel | DeterminedByEngine =undefined
  public portraitTablet: VisibilityConfigModel| DeterminedByEngine =undefined
  public tablet: VisibilityConfigModel| DeterminedByEngine =undefined
  public smartphone:VisibilityConfigModel = new VisibilityConfigModel()
  setSmartphone(smartphone:VisibilityConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: VisibilityConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: VisibilityConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: VisibilityConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: VisibilityConfigModel| DeterminedByEngine){
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
