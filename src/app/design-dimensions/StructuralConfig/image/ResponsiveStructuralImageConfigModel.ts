import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ImageConfigModel} from "./ImageConfigModel";
import {ImageRenderModel} from "./ImageRenderModel";
export class ResponsiveStructuralImageConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralImageConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralImageConfigModel>{
  public highResolution: ImageConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:ImageConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:ImageConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:ImageConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: ImageConfigModel) {
    super()
  }
  setSmartphone(smartphone:ImageConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ImageConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ImageConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ImageConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ImageConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getImageStructuralRenderProperties(screenSize: number): ImageRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToImageStructuralRenderProperties = (config: ImageConfigModel): ImageRenderModel => {
        const renderInstance = new ImageRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToImageStructuralRenderProperties)
  }
}
