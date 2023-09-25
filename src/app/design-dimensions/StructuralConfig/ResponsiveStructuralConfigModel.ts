import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ConfirmPopupConfigModel} from "./confirm-popup/ConfirmPopupConfigModel";
import {DialogConfigModel} from "./dialog/DialogConfigModel";
import {ImageConfigModel} from "./image/ImageConfigModel";
import {MenubarConfigModel} from "./menubar/MenubarConfigModel";
import {TableConfigModel} from "./table/TableConfigModel";
import {ConfirmPopupRenderModel} from "./confirm-popup/ConfirmPopupRenderModel";
import {DialogRenderModel} from "./dialog/DialogRenderModel";
import {ImageRenderModel} from "./image/ImageRenderModel";
import {MenubarRenderModel} from "./menubar/MenubarRenderModel";
import {TableRenderModel} from "./table/TableRenderModel";
import {ButtonConfigModel} from "./button/ButtonConfigModel";
import {ButtonRenderModel} from "./button/ButtonRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {ComponentStructuralConfigModelType, ComponentStructuralRenderModelType} from "../../types/union-types";
export class ResponsiveStructuralConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralConfigModel>{
  // todo maak per component een resposnive class
  public highResolution: ComponentStructuralConfigModelType | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop: ComponentStructuralConfigModelType | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet: ComponentStructuralConfigModelType | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet: ComponentStructuralConfigModelType | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine

  setSmartphone(smartphone:ComponentStructuralConfigModelType){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ComponentStructuralConfigModelType| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ComponentStructuralConfigModelType| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ComponentStructuralConfigModelType | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ComponentStructuralConfigModelType| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone: ComponentStructuralConfigModelType) {
    super()
  }
  getInstance() {
    return 'table'
  }
  public getComponentSpecificRenderProperties(screenSize: number): ComponentStructuralRenderModelType {
    const mapToToComponentSpecificRenderProperties = (config: ComponentStructuralConfigModelType): ComponentStructuralRenderModelType => {
      let renderInstance: ComponentStructuralRenderModelType
      if (config instanceof ConfirmPopupConfigModel) {
        renderInstance = new ConfirmPopupRenderModel()
      } else if (config instanceof DialogConfigModel) {
        renderInstance = new DialogRenderModel()
      } else if (config instanceof ImageConfigModel) {
        renderInstance = new ImageRenderModel()
      } else if (config instanceof MenubarConfigModel) {
        renderInstance = new MenubarRenderModel()
      } else if (config instanceof TableConfigModel) {
        renderInstance  = new TableRenderModel()
      } else if (config instanceof ButtonConfigModel) {
        renderInstance = new ButtonRenderModel()
      } else throw new Error('unimplemented ComponentStructuralRenderModelType')
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToToComponentSpecificRenderProperties)
  }
}
