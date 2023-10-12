import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ImageStructuralConfigModel} from "./ImageStructuralConfigModel";
import {ImageStructuralRenderModel} from "./ImageStructuralRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralImageConfigModel
  extends ResponsiveConfigModel<ImageStructuralConfigModel>
  implements ResponsiveConfigModelI<ImageStructuralConfigModel>{
  public highResolution: ImageStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop:ImageStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:ImageStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet:ImageStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor(public smartphone: ImageStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:ImageStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ImageStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ImageStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ImageStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ImageStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
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
