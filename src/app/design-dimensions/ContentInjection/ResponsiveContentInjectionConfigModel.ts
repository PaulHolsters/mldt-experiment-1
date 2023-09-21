import {ContentInjectionConfigModel} from "./ContentInjectionConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ContentInjectionRenderModel} from "./ContentInjectionRenderModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {DialogContentInjectionConfigModel} from "./dialog/DialogContentInjectionConfigModel";
import {MenubarContentInjectionConfigModel} from "./menubar/MenubarContentInjectionConfigModel";
import {TableContentInjectionConfigModel} from "./table/TableContentInjectionConfigModel";
import {MenubarContentInjectionRenderModel} from "./menubar/MenubarContentInjectionRenderModel";
import {DialogContentInjectionRenderModel} from "./dialog/DialogContentInjectionRenderModel";
import {TableContentInjectionRenderModel} from "./table/TableContentInjectionRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";

export class ResponsiveContentInjectionConfigModel extends ResponsiveConfigModel<ResponsiveContentInjectionConfigModel>
  implements ResponsiveConfigModelI<ResponsiveContentInjectionConfigModel>{
  public portraitTablet: ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: ContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:ContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ContentInjectionConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
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
