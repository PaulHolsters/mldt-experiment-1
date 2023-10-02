import {TableStructuralRenderModel} from "./TableStructuralRenderModel";
import {TableStructuralConfigModel} from "./TableStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStructuralTableConfigModel
  extends ResponsiveConfigModel<TableStructuralConfigModel>
  implements ResponsiveConfigModelI<TableStructuralConfigModel>{
  public highResolution: TableStructuralConfigModel| DeterminedByEngine = undefined
  public laptop:TableStructuralConfigModel  | DeterminedByEngine = undefined
  public tablet:TableStructuralConfigModel  | DeterminedByEngine = undefined
  public portraitTablet:TableStructuralConfigModel | DeterminedByEngine = undefined
  public smartphone:TableStructuralConfigModel = new TableStructuralConfigModel()
  constructor() {
    super()
  }
  setSmartphone(smartphone:TableStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableStructuralConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:TableStructuralConfigModel | DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableStructuralConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:TableStructuralConfigModel | DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getTableStructuralRenderProperties(screenSize: number): TableStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TableStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
