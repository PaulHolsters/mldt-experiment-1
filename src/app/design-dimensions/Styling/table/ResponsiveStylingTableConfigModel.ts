import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TableStylingConfigModel} from "./TableStylingConfigModel";
import {TableStylingRenderModel} from "./TableStylingRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStylingTableConfigModel
  extends ResponsiveConfigModel<TableStylingConfigModel>
  implements ResponsiveConfigModelI<TableStylingConfigModel>{
  public highResolution: TableStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: TableStylingConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet: TableStylingConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet: TableStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor(public smartphone: TableStylingConfigModel) {
    super()
  }
  setSmartphone(smartphone:TableStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableStylingConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  getInstance() {
    return 'table'
  }
  public getTableStructuralRenderProperties(screenSize: number): TableStylingRenderModel {
    const configModel = this.getConfigModel(screenSize)
    const renderInstance = new TableStylingRenderModel()
    Object.entries(configModel).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
