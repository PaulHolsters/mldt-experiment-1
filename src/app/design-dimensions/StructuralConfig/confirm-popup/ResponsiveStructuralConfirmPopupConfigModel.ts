import {ConfirmPopupStructuralRenderModel} from "./ConfirmPopupStructuralRenderModel";
import {ConfirmPopupStructuralConfigModel} from "./ConfirmPopupStructuralConfigModel";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralConfirmPopupConfigModel
  extends ResponsiveConfigModel<ConfirmPopupStructuralConfigModel>
  implements ResponsiveConfigModelI<ConfirmPopupStructuralConfigModel>{
  public highResolution: ConfirmPopupStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop:ConfirmPopupStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:ConfirmPopupStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet:ConfirmPopupStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor(public smartphone: ConfirmPopupStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:ConfirmPopupStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ConfirmPopupStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:ConfirmPopupStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ConfirmPopupStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ConfirmPopupStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getStructuralRenderProperties(screenSize: number): ConfirmPopupStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ConfirmPopupStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
