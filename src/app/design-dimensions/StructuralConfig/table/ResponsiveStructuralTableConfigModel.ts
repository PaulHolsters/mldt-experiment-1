import {TableStructuralRenderModel} from "./TableStructuralRenderModel";
import {TableStructuralConfigModel} from "./TableStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class ResponsiveStructuralTableConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralTableConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralTableConfigModel>{
  public highResolution: TableStructuralConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:TableStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:TableStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:TableStructuralConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: TableStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:TableStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:TableStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:TableStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getTableStructuralRenderProperties(screenSize: number): TableStructuralRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToTableStructuralRenderProperties = (config: TableStructuralConfigModel): TableStructuralRenderModel => {
        const renderInstance = new TableStructuralRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToTableStructuralRenderProperties)
  }
}
