import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {IconStructuralRenderModel} from "./IconStructuralRenderModel";
import {IconStructuralConfigModel} from "./IconStructuralConfigModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStructuralIconConfigModel
  extends ResponsiveConfigModel<IconStructuralConfigModel>
  implements ResponsiveConfigModelI<IconStructuralConfigModel>{
  public highResolution: IconStructuralConfigModel| DeterminedByEngine = undefined
  public laptop:IconStructuralConfigModel  | DeterminedByEngine = undefined
  public tablet:IconStructuralConfigModel  | DeterminedByEngine = undefined
  public portraitTablet:IconStructuralConfigModel | DeterminedByEngine = undefined
  constructor(public smartphone:IconStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:IconStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: IconStructuralConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:IconStructuralConfigModel | DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: IconStructuralConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:IconStructuralConfigModel | DeterminedByEngine){
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
