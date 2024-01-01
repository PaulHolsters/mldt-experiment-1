import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {CardStylingConfigModel} from "./CardStylingConfigModel";
import {CardStylingRenderModel} from "./CardStylingRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStylingCardConfigModel
  extends ResponsiveConfigModel<CardStylingConfigModel>
  implements ResponsiveConfigModelI<CardStylingConfigModel>{
  public highResolution: CardStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: CardStylingConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet: CardStylingConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet: CardStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public smartphone: CardStylingConfigModel=new CardStylingConfigModel()
  constructor() {
    super()
  }
  setSmartphone(smartphone:CardStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: CardStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: CardStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: CardStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: CardStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getStylingRenderProperties(screenSize: number): CardStylingRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new CardStylingRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
