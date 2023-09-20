import {ContentInjectionConfigModel} from "./ContentInjectionConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ContentInjectionRenderModel} from "./ContentInjectionRenderModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ConfirmPopupConfigModel} from "../component-specific-config/confirm-popup/ConfirmPopupConfigModel";
import {ConfirmPopupRenderModel} from "../component-specific-config/confirm-popup/ConfirmPopupRenderModel";
import {DialogConfigModel} from "../component-specific-config/dialog/DialogConfigModel";
import {DialogRenderModel} from "../component-specific-config/dialog/DialogRenderModel";
import {ImageConfigModel} from "../component-specific-config/image/ImageConfigModel";
import {ImageRenderModel} from "../component-specific-config/image/ImageRenderModel";
import {MenubarConfigModel} from "../component-specific-config/menubar/MenubarConfigModel";
import {MenubarRenderModel} from "../component-specific-config/menubar/MenubarRenderModel";
import {TableConfigModel} from "../component-specific-config/table/TableConfigModel";
import {TableRenderModel} from "../component-specific-config/table/TableRenderModel";
import {DialogContentInjectionConfigModel} from "./dialog/DialogContentInjectionConfigModel";
import {MenubarContentInjectionConfigModel} from "./menubar/MenubarContentInjectionConfigModel";
import {TableContentInjectionConfigModel} from "./table/TableContentInjectionConfigModel";
import {MenubarContentInjectionRenderModel} from "./menubar/MenubarContentInjectionRenderModel";
import {DialogContentInjectionRenderModel} from "./dialog/DialogContentInjectionRenderModel";
import {TableContentInjectionRenderModel} from "./table/TableContentInjectionRenderModel";

export class ResponsiveContentInjectionConfigModel extends ResponsiveConfigModel<ResponsiveContentInjectionConfigModel> {
  public portraitTablet: ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  constructor(public smartphone:ContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): ContentInjectionRenderModel {
    const mapToToContentInjectionRenderProperties = (config: ContentInjectionConfigModel): ContentInjectionRenderModel => {
      const renderInstance = new ContentInjectionRenderModel()
      if(config.componentContentInjectionConfigModel instanceof MenubarContentInjectionConfigModel){
        renderInstance.componentContentInjectionRenderModel = new MenubarContentInjectionRenderModel()
      } else if(config.componentContentInjectionConfigModel instanceof DialogContentInjectionConfigModel){
        renderInstance.componentContentInjectionRenderModel = new DialogContentInjectionRenderModel()
      }
      else if(config.componentContentInjectionConfigModel instanceof TableContentInjectionConfigModel){
        renderInstance.componentContentInjectionRenderModel = new TableContentInjectionRenderModel()
      }
      Object.entries(config.componentContentInjectionConfigModel).forEach(([k,v])=>{
        if(v) renderInstance.componentContentInjectionRenderModel?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToContentInjectionRenderProperties)
  }

}
