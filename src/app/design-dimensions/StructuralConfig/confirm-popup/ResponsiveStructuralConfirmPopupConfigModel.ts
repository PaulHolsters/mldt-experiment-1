import {ConfirmPopupRenderModel} from "./ConfirmPopupRenderModel";
import {ConfirmPopupConfigModel} from "./ConfirmPopupConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class ResponsiveStructuralConfirmPopupConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralConfirmPopupConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralConfirmPopupConfigModel>{
  public highResolution: ConfirmPopupConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:ConfirmPopupConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:ConfirmPopupConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:ConfirmPopupConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: ConfirmPopupConfigModel) {
    super()
  }
  setSmartphone(smartphone:ConfirmPopupConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ConfirmPopupConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ConfirmPopupConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ConfirmPopupConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ConfirmPopupConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): ConfirmPopupRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToConfirmPopupStructuralRenderProperties = (config: ConfirmPopupConfigModel): ConfirmPopupRenderModel => {
        const renderInstance = new ConfirmPopupRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToConfirmPopupStructuralRenderProperties)
  }
}
