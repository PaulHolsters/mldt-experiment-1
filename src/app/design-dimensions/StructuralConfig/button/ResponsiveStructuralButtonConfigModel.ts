import {ButtonStructuralRenderModel} from "./ButtonStructuralRenderModel";
import {ButtonStructuralConfigModel} from "./ButtonStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralButtonConfigModel
  extends ResponsiveConfigModel<ButtonStructuralConfigModel>
  implements ResponsiveConfigModelI<ButtonStructuralConfigModel>{
  public highResolution: ButtonStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: ButtonStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet: ButtonStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet: ButtonStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public smartphone: ButtonStructuralConfigModel = new ButtonStructuralConfigModel()
  constructor() {
    super()
  }
  setSmartphone(smartphone:ButtonStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ButtonStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ButtonStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ButtonStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ButtonStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getStructuralRenderProperties(screenSize: number): ButtonStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ButtonStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
