import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TableStylingConfigModel} from "./TableStylingConfigModel";
import {TableStylingRenderModel} from "./TableStylingRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStylingTableConfigModel
  extends ResponsiveConfigModel<TableStylingConfigModel>
  implements ResponsiveConfigModelI<TableStylingConfigModel>{
  public highResolution: TableStylingConfigModel| DeterminedByEngine = undefined
  public laptop: TableStylingConfigModel | DeterminedByEngine = undefined
  public tablet: TableStylingConfigModel | DeterminedByEngine = undefined
  public portraitTablet: TableStylingConfigModel| DeterminedByEngine = undefined
  constructor(public smartphone: TableStylingConfigModel) {
    super()
  }
  setSmartphone(smartphone:TableStylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableStylingConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableStylingConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableStylingConfigModel| DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableStylingConfigModel| DeterminedByEngine){
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
