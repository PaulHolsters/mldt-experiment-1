import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {CardStructuralConfigModel} from "./CardStructuralConfigModel";
import {CardStructuralRenderModel} from "./CardStructuralRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralCardConfigModel
  extends ResponsiveConfigModel<CardStructuralConfigModel>
  implements ResponsiveConfigModelI<CardStructuralConfigModel>{
  public highResolution: CardStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop:CardStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:CardStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet:CardStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor(public smartphone: CardStructuralConfigModel=new CardStructuralConfigModel()) {
    super()
  }
  setSmartphone(smartphone:CardStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: CardStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:CardStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: CardStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:CardStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getStructuralRenderProperties(screenSize: number): CardStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new CardStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
