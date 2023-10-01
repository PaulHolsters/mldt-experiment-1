import {ConfirmPopupStructuralRenderModel} from "./ConfirmPopupStructuralRenderModel";
import {ConfirmPopupStructuralConfigModel} from "./ConfirmPopupStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStructuralConfirmPopupConfigModel
  extends ResponsiveConfigModel<ConfirmPopupStructuralConfigModel>
  implements ResponsiveConfigModelI<ConfirmPopupStructuralConfigModel>{
  public highResolution: ConfirmPopupStructuralConfigModel| DeterminedByEngine = undefined
  public laptop:ConfirmPopupStructuralConfigModel  | DeterminedByEngine = undefined
  public tablet:ConfirmPopupStructuralConfigModel  | DeterminedByEngine = undefined
  public portraitTablet:ConfirmPopupStructuralConfigModel | DeterminedByEngine = undefined
  constructor(public smartphone: ConfirmPopupStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:ConfirmPopupStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ConfirmPopupStructuralConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ConfirmPopupStructuralConfigModel | DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ConfirmPopupStructuralConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ConfirmPopupStructuralConfigModel | DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): ConfirmPopupStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ConfirmPopupStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
