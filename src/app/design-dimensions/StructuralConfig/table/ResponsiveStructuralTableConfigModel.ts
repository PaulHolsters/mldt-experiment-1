import {TableStructuralRenderModel} from "./TableStructuralRenderModel";
import {TableStructuralConfigModel} from "./TableStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralTableConfigModel
  extends ResponsiveConfigModel<TableStructuralConfigModel>
  implements ResponsiveConfigModelI<TableStructuralConfigModel>{
  public highResolution: TableStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop:TableStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:TableStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet:TableStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public smartphone:TableStructuralConfigModel = new TableStructuralConfigModel()
  constructor() {
    super()
  }
  setSmartphone(smartphone:TableStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:TableStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:TableStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  getInstance() {
    return 'table'
  }
  public getStructuralRenderProperties(screenSize: number): TableStructuralRenderModel {
    // todo werk dbe waarden verder af!!
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TableStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
