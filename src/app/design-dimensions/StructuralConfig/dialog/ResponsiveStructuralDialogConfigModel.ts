import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DialogStructuralConfigModel} from "./DialogStructuralConfigModel";
import {DialogStructuralRenderModel} from "./DialogStructuralRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralDialogConfigModel
  extends ResponsiveConfigModel<DialogStructuralConfigModel>
  implements ResponsiveConfigModelI<DialogStructuralConfigModel>{
  public highResolution: DialogStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop:DialogStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:DialogStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet:DialogStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor(public smartphone: DialogStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:DialogStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DialogStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:DialogStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DialogStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:DialogStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): DialogStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new DialogStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
