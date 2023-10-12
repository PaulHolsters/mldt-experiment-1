import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {MenubarContentInjectionConfigModel} from "./MenubarContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {MenubarContentInjectionRenderModel} from "./MenubarContentInjectionRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class ResponsiveContentInjectionMenubarConfigModel extends ResponsiveConfigModel<MenubarContentInjectionConfigModel>
  implements ResponsiveConfigModelI<MenubarContentInjectionConfigModel>{
  public portraitTablet: MenubarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:MenubarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: MenubarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: MenubarContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:MenubarContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MenubarContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: MenubarContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MenubarContentInjectionConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: MenubarContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:MenubarContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): MenubarContentInjectionRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new MenubarContentInjectionRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
