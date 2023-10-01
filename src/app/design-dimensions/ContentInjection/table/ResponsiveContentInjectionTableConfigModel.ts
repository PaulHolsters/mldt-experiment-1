import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableContentInjectionConfigModel} from "./TableContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TableContentInjectionRenderModel} from "./TableContentInjectionRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveContentInjectionTableConfigModel extends ResponsiveConfigModel<TableContentInjectionConfigModel>
  implements ResponsiveConfigModelI<TableContentInjectionConfigModel>{
  public portraitTablet: TableContentInjectionConfigModel|DeterminedByEngine=undefined
  public tablet:TableContentInjectionConfigModel|DeterminedByEngine=undefined
  public laptop: TableContentInjectionConfigModel|DeterminedByEngine=undefined
  public highResolution: TableContentInjectionConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:TableContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableContentInjectionConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableContentInjectionConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableContentInjectionConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableContentInjectionConfigModel| DeterminedByEngine){
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
