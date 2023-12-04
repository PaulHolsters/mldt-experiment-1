import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {CardContentInjectionConfigModel} from "./CardContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {CardContentInjectionRenderModel} from "./CardContentInjectionRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class ResponsiveContentInjectionCardConfigModel extends ResponsiveConfigModel<CardContentInjectionConfigModel>
  implements ResponsiveConfigModelI<CardContentInjectionConfigModel>{
  public portraitTablet: CardContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:CardContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: CardContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: CardContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:CardContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: CardContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: CardContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: CardContentInjectionConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: CardContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:CardContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): CardContentInjectionRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new CardContentInjectionRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
