import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {IconStylingConfigModel} from "./IconStylingConfigModel";
import {IconStylingRenderModel} from "./IconStylingRenderModel";
export class ResponsiveStylingIconConfigModel
  extends ResponsiveConfigModel<IconStylingConfigModel>
  implements ResponsiveConfigModelI<IconStylingConfigModel>{
  public highResolution: IconStylingConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop: IconStylingConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet: IconStylingConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet: IconStylingConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: IconStylingConfigModel) {
    super()
  }
  setSmartphone(smartphone:IconStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: IconStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: IconStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: IconStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: IconStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getIconStructuralRenderProperties(screenSize: number): IconStylingRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new IconStylingRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
