import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ButtonStructuralRenderModel} from "./ButtonStructuralRenderModel";
import {ButtonStructuralConfigModel} from "./ButtonStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
export class ResponsiveStructuralButtonConfigModel
  extends ResponsiveConfigModel<ButtonStructuralConfigModel>
  implements ResponsiveConfigModelI<ButtonStructuralConfigModel>{
  public highResolution: ButtonStructuralConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop: ButtonStructuralConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet: ButtonStructuralConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet: ButtonStructuralConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: ButtonStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:ButtonStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ButtonStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ButtonStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ButtonStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ButtonStructuralConfigModel| ZeroValueType.DeterminedByEngine){
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
