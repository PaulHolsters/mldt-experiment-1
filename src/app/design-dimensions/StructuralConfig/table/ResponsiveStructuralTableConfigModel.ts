import {TableRenderModel} from "./TableRenderModel";
import {TableConfigModel} from "./TableConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class ResponsiveStructuralTableConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralTableConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralTableConfigModel>{
  public highResolution: TableConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:TableConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:TableConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:TableConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: TableConfigModel) {
    super()
  }
  setSmartphone(smartphone:TableConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:TableConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:TableConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getTableStructuralRenderProperties(screenSize: number): TableRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToTableStructuralRenderProperties = (config: TableConfigModel): TableRenderModel => {
        const renderInstance = new TableRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToTableStructuralRenderProperties)
  }
}
