import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TableStylingConfigModel} from "./TableStylingConfigModel";
import {TableStylingRenderModel} from "./TableStylingRenderModel";
export class ResponsiveStylingTableConfigModel
  extends ResponsiveConfigModel<TableStylingConfigModel>
  implements ResponsiveConfigModelI<TableStylingConfigModel>{
  public highResolution: TableStylingConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop: TableStylingConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet: TableStylingConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet: TableStylingConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: TableStylingConfigModel) {
    super()
  }
  setSmartphone(smartphone:TableStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableStylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableStylingConfigModel| ZeroValueType.DeterminedByEngine){
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
