import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableContentInjectionConfigModel} from "./TableContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TableContentInjectionRenderModel} from "./TableContentInjectionRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveContentInjectionTableConfigModel extends ResponsiveConfigModel<TableContentInjectionConfigModel>
  implements ResponsiveConfigModelI<TableContentInjectionConfigModel>{
  public portraitTablet: TableContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:TableContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: TableContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: TableContentInjectionConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:TableContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableContentInjectionConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableContentInjectionConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:TableContentInjectionConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): TableContentInjectionRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TableContentInjectionRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
