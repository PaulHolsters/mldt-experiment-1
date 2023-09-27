import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TableStylingConfigModel} from "./TableStylingConfigModel";
import {TableStylingRenderModel} from "./TableStylingRenderModel";
export class ResponsiveStylingTableConfigModel
  extends ResponsiveConfigModel<ResponsiveStylingTableConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStylingTableConfigModel>{
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
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToToTableStructuralRenderProperties = (config: TableStylingConfigModel): TableStylingRenderModel => {
      const renderInstance = new TableStylingRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToToTableStructuralRenderProperties)
  }
}
