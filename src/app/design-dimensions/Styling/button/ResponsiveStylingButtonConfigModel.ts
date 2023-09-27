import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ButtonStylingConfigModel} from "./ButtonStylingConfigModel";
import {ButtonStylingRenderModel} from "./ButtonStylingRenderModel";
export class ResponsiveStylingButtonConfigModel
  extends ResponsiveConfigModel<ResponsiveStylingButtonConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStylingButtonConfigModel>{
  public highResolution: ButtonStylingConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop: ButtonStylingConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet: ButtonStylingConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet: ButtonStylingConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: ButtonStylingConfigModel) {
    super()
  }
  setSmartphone(smartphone:ButtonStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ButtonStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ButtonStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ButtonStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ButtonStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getButtonStructuralRenderProperties(screenSize: number): ButtonStylingRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToToButtonStructuralRenderProperties = (config: ButtonStylingConfigModel): ButtonStylingRenderModel => {
      const renderInstance = new ButtonStylingRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToToButtonStructuralRenderProperties)
  }
}
