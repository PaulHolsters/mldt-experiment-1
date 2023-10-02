import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ButtonStylingConfigModel} from "./ButtonStylingConfigModel";
import {ButtonStylingRenderModel} from "./ButtonStylingRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStylingButtonConfigModel
  extends ResponsiveConfigModel<ButtonStylingConfigModel>
  implements ResponsiveConfigModelI<ButtonStylingConfigModel>{
  public highResolution: ButtonStylingConfigModel| DeterminedByEngine = undefined
  public laptop: ButtonStylingConfigModel | DeterminedByEngine = undefined
  public tablet: ButtonStylingConfigModel | DeterminedByEngine = undefined
  public portraitTablet: ButtonStylingConfigModel| DeterminedByEngine = undefined
  public smartphone: ButtonStylingConfigModel=new ButtonStylingConfigModel()
  constructor() {
    super()
  }
  setSmartphone(smartphone:ButtonStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ButtonStylingConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ButtonStylingConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ButtonStylingConfigModel| DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ButtonStylingConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getButtonStructuralRenderProperties(screenSize: number): ButtonStylingRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ButtonStylingRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
