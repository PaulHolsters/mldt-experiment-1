import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ImageStructuralConfigModel} from "./ImageStructuralConfigModel";
import {ImageStructuralRenderModel} from "./ImageStructuralRenderModel";
export class ResponsiveStructuralImageConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralImageConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralImageConfigModel>{
  public highResolution: ImageStructuralConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:ImageStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:ImageStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:ImageStructuralConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: ImageStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:ImageStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ImageStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ImageStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ImageStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ImageStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getImageStructuralRenderProperties(screenSize: number): ImageStructuralRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToImageStructuralRenderProperties = (config: ImageStructuralConfigModel): ImageStructuralRenderModel => {
        const renderInstance = new ImageStructuralRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToImageStructuralRenderProperties)
  }
}
