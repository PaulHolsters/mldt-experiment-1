import {ConfirmPopupStructuralRenderModel} from "./ConfirmPopupStructuralRenderModel";
import {ConfirmPopupStructuralConfigModel} from "./ConfirmPopupStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class ResponsiveStructuralConfirmPopupConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralConfirmPopupConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralConfirmPopupConfigModel>{
  public highResolution: ConfirmPopupStructuralConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:ConfirmPopupStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:ConfirmPopupStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:ConfirmPopupStructuralConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: ConfirmPopupStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:ConfirmPopupStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ConfirmPopupStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ConfirmPopupStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ConfirmPopupStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ConfirmPopupStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): ConfirmPopupStructuralRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToConfirmPopupStructuralRenderProperties = (config: ConfirmPopupStructuralConfigModel): ConfirmPopupStructuralRenderModel => {
        const renderInstance = new ConfirmPopupStructuralRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToConfirmPopupStructuralRenderProperties)
  }
}
