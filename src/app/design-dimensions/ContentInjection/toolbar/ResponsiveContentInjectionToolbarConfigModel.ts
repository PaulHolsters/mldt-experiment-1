import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ToolbarContentInjectionConfigModel} from "./ToolbarContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ToolbarContentInjectionRenderModel} from "./ToolbarContentInjectionRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class ResponsiveContentInjectionToolbarConfigModel extends ResponsiveConfigModel<ToolbarContentInjectionConfigModel>
  implements ResponsiveConfigModelI<ToolbarContentInjectionConfigModel>{
  public portraitTablet: ToolbarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:ToolbarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: ToolbarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: ToolbarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:ToolbarContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ToolbarContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ToolbarContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ToolbarContentInjectionConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: ToolbarContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:ToolbarContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): ToolbarContentInjectionRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new ToolbarContentInjectionRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
