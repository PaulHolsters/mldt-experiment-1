import {ButtonStructuralRenderModel} from "./ButtonStructuralRenderModel";
import {ButtonStructuralConfigModel} from "./ButtonStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStructuralButtonConfigModel
  extends ResponsiveConfigModel<ButtonStructuralConfigModel>
  implements ResponsiveConfigModelI<ButtonStructuralConfigModel>{
  public highResolution: ButtonStructuralConfigModel| DeterminedByEngine = undefined
  public laptop: ButtonStructuralConfigModel | DeterminedByEngine = undefined
  public tablet: ButtonStructuralConfigModel | DeterminedByEngine = undefined
  public portraitTablet: ButtonStructuralConfigModel| DeterminedByEngine = undefined
  public smartphone: ButtonStructuralConfigModel = new ButtonStructuralConfigModel()
  constructor() {
    super()
  }
  setSmartphone(smartphone:ButtonStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ButtonStructuralConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ButtonStructuralConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ButtonStructuralConfigModel| DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ButtonStructuralConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getButtonStructuralRenderProperties(screenSize: number): ButtonStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ButtonStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
