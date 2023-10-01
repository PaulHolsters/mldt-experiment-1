import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {DialogContentInjectionConfigModel} from "./DialogContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DialogContentInjectionRenderModel} from "./DialogContentInjectionRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveContentInjectionDialogConfigModel extends ResponsiveConfigModel<DialogContentInjectionConfigModel>
  implements ResponsiveConfigModelI<DialogContentInjectionConfigModel>{
  public portraitTablet: DialogContentInjectionConfigModel|DeterminedByEngine=undefined
  public tablet:DialogContentInjectionConfigModel|DeterminedByEngine=undefined
  public laptop: DialogContentInjectionConfigModel|DeterminedByEngine=undefined
  public highResolution: DialogContentInjectionConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:DialogContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DialogContentInjectionConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: DialogContentInjectionConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DialogContentInjectionConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: DialogContentInjectionConfigModel| DeterminedByEngine){
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
    const config = this.getConfigModel(screenSize)
    const renderInstance = new DialogContentInjectionRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
