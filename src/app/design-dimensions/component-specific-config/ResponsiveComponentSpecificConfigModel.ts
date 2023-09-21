import {ComponentSpecificRenderModel} from "./ComponentSpecificRenderModel";
import {ComponentSpecificConfigModel} from "./ComponentSpecificConfigModel";
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
export class ResponsiveComponentSpecificConfigModel
  extends ResponsiveConfigModel<ResponsiveComponentSpecificConfigModel>
  implements ResponsiveConfigModelI<ResponsiveComponentSpecificConfigModel>{
  public highResolution: ComponentSpecificConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop: ComponentSpecificConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet: ComponentSpecificConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet: ComponentSpecificConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:ComponentSpecificConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ComponentSpecificConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ComponentSpecificConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ComponentSpecificConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ComponentSpecificConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone: ComponentSpecificConfigModel) {
    super()
  }
  getInstance() {
    return 'table'
  }
  public getComponentSpecificRenderProperties(screenSize: number): ComponentSpecificRenderModel {
    const mapToToComponentSpecificRenderProperties = (config: ComponentSpecificConfigModel): ComponentSpecificRenderModel => {
      const renderInstance = new ComponentSpecificRenderModel()
      if (config.componentSpecificConfigModel instanceof ConfirmPopupConfigModel) {
        renderInstance.componentSpecificRenderModel = new ConfirmPopupRenderModel()
      } else if (config.componentSpecificConfigModel instanceof DialogConfigModel) {
        renderInstance.componentSpecificRenderModel = new DialogRenderModel()
      } else if (config.componentSpecificConfigModel instanceof ImageConfigModel) {
        renderInstance.componentSpecificRenderModel = new ImageRenderModel()
      } else if (config.componentSpecificConfigModel instanceof MenubarConfigModel) {
        renderInstance.componentSpecificRenderModel = new MenubarRenderModel()
      } else if (config.componentSpecificConfigModel instanceof TableConfigModel) {
        renderInstance.componentSpecificRenderModel = new TableRenderModel()
      } else if (config.componentSpecificConfigModel instanceof ButtonConfigModel) {
        renderInstance.componentSpecificRenderModel = new ButtonRenderModel()
      }
      Object.entries(config.componentSpecificConfigModel).forEach(([k, v]) => {
        if (v) renderInstance.componentSpecificRenderModel?.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToToComponentSpecificRenderProperties)
  }
}
