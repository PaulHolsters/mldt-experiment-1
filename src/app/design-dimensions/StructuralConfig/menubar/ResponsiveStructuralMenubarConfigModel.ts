import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {MenubarStructuralConfigModel} from "./MenubarStructuralConfigModel";
import {MenubarStructuralRenderModel} from "./MenubarStructuralRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralMenubarConfigModel
  extends ResponsiveConfigModel<MenubarStructuralConfigModel>
  implements ResponsiveConfigModelI<MenubarStructuralConfigModel>{
  public highResolution: MenubarStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop:MenubarStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:MenubarStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet:MenubarStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor(public smartphone: MenubarStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:MenubarStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MenubarStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:MenubarStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MenubarStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:MenubarStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getStructuralRenderProperties(screenSize: number): MenubarStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new MenubarStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
