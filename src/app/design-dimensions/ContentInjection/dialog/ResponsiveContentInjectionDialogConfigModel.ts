import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {DialogContentInjectionConfigModel} from "./DialogContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DialogContentInjectionRenderModel} from "./DialogContentInjectionRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveContentInjectionDialogConfigModel extends ResponsiveConfigModel<DialogContentInjectionConfigModel>
  implements ResponsiveConfigModelI<DialogContentInjectionConfigModel>{
  public portraitTablet: DialogContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:DialogContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: DialogContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: DialogContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:DialogContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DialogContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: DialogContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DialogContentInjectionConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: DialogContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
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
