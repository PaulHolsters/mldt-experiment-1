import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {DialogContentInjectionConfigModel} from "./DialogContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {DialogContentInjectionRenderModel} from "./DialogContentInjectionRenderModel";
export class ResponsiveContentInjectionDialogConfigModel extends ResponsiveConfigModel<ResponsiveContentInjectionDialogConfigModel>
  implements ResponsiveConfigModelI<ResponsiveContentInjectionDialogConfigModel>{
  public portraitTablet: DialogContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:DialogContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: DialogContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: DialogContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:DialogContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DialogContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: DialogContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DialogContentInjectionConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: DialogContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:DialogContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): DialogContentInjectionRenderModel {
    const mapToDialogContentInjectionRenderProperties = (config: DialogContentInjectionConfigModel): DialogContentInjectionRenderModel => {
      const renderInstance = new DialogContentInjectionRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToDialogContentInjectionRenderProperties)
  }

}
