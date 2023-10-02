import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ImageStructuralConfigModel} from "./ImageStructuralConfigModel";
import {ImageStructuralRenderModel} from "./ImageStructuralRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStructuralImageConfigModel
  extends ResponsiveConfigModel<ImageStructuralConfigModel>
  implements ResponsiveConfigModelI<ImageStructuralConfigModel>{
  public highResolution: ImageStructuralConfigModel| DeterminedByEngine = undefined
  public laptop:ImageStructuralConfigModel  | DeterminedByEngine = undefined
  public tablet:ImageStructuralConfigModel  | DeterminedByEngine = undefined
  public portraitTablet:ImageStructuralConfigModel | DeterminedByEngine = undefined
  constructor(public smartphone: ImageStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:ImageStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ImageStructuralConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ImageStructuralConfigModel | DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ImageStructuralConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ImageStructuralConfigModel | DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getImageStructuralRenderProperties(screenSize: number): ImageStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ImageStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
