import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ButtonStylingConfigModel} from "./ButtonStylingConfigModel";
import {ButtonStylingRenderModel} from "./ButtonStylingRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStylingButtonConfigModel
  extends ResponsiveConfigModel<ButtonStylingConfigModel>
  implements ResponsiveConfigModelI<ButtonStylingConfigModel>{
  public highResolution: ButtonStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: ButtonStylingConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet: ButtonStylingConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet: ButtonStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public smartphone: ButtonStylingConfigModel=new ButtonStylingConfigModel()
  constructor() {
    super()
  }
  setSmartphone(smartphone:ButtonStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ButtonStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ButtonStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ButtonStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ButtonStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getStylingRenderProperties(screenSize: number): ButtonStylingRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ButtonStylingRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
