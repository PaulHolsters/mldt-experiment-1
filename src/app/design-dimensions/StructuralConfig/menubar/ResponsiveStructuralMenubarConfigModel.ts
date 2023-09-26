import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {MenubarConfigModel} from "./MenubarConfigModel";
import {MenubarRenderModel} from "./MenubarRenderModel";
export class ResponsiveStructuralMenubarConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralMenubarConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralMenubarConfigModel>{
  public highResolution: MenubarConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:MenubarConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:MenubarConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:MenubarConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: MenubarConfigModel) {
    super()
  }
  setSmartphone(smartphone:MenubarConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MenubarConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:MenubarConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MenubarConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:MenubarConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): MenubarRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToConfirmPopupStructuralRenderProperties = (config: MenubarConfigModel): MenubarRenderModel => {
        const renderInstance = new MenubarRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToConfirmPopupStructuralRenderProperties)
  }
}
