import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {IconStructuralRenderModel} from "./IconStructuralRenderModel";
import {IconStructuralConfigModel} from "./IconStructuralConfigModel";
export class ResponsiveStructuralIconConfigModel
  extends ResponsiveConfigModel<IconStructuralConfigModel>
  implements ResponsiveConfigModelI<IconStructuralConfigModel>{
  public highResolution: IconStructuralConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:IconStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:IconStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:IconStructuralConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone:IconStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:IconStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: IconStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:IconStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: IconStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:IconStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getIconStructuralRenderProperties(screenSize: number): IconStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new IconStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
