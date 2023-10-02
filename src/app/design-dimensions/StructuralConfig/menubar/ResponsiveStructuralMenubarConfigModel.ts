import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {MenubarStructuralConfigModel} from "./MenubarStructuralConfigModel";
import {MenubarStructuralRenderModel} from "./MenubarStructuralRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStructuralMenubarConfigModel
  extends ResponsiveConfigModel<MenubarStructuralConfigModel>
  implements ResponsiveConfigModelI<MenubarStructuralConfigModel>{
  public highResolution: MenubarStructuralConfigModel| DeterminedByEngine = undefined
  public laptop:MenubarStructuralConfigModel  | DeterminedByEngine = undefined
  public tablet:MenubarStructuralConfigModel  | DeterminedByEngine = undefined
  public portraitTablet:MenubarStructuralConfigModel | DeterminedByEngine = undefined
  constructor(public smartphone: MenubarStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:MenubarStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MenubarStructuralConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:MenubarStructuralConfigModel | DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MenubarStructuralConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:MenubarStructuralConfigModel | DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): MenubarStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new MenubarStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
