import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ButtonRenderModel} from "./ButtonRenderModel";
import {ButtonConfigModel} from "./ButtonConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
export class ResponsiveStructuralButtonConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralButtonConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralButtonConfigModel>{
  public highResolution: ButtonConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop: ButtonConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet: ButtonConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet: ButtonConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: ButtonConfigModel) {
    super()
  }
  setSmartphone(smartphone:ButtonConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ButtonConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ButtonConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ButtonConfigModel| ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ButtonConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getButtonStructuralRenderProperties(screenSize: number): ButtonRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToToButtonStructuralRenderProperties = (config: ButtonConfigModel): ButtonRenderModel => {
      const renderInstance = new ButtonRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToToButtonStructuralRenderProperties)
  }
}
