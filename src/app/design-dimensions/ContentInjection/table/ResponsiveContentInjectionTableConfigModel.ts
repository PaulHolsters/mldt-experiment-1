import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableContentInjectionConfigModel} from "./TableContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {TableContentInjectionRenderModel} from "./TableContentInjectionRenderModel";
export class ResponsiveContentInjectionTableConfigModel<S> extends ResponsiveConfigModel<ResponsiveContentInjectionTableConfigModel<S>>
  implements ResponsiveConfigModelI<ResponsiveContentInjectionTableConfigModel<S>>{
  public portraitTablet: TableContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:TableContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: TableContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: TableContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:TableContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableContentInjectionConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
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
    const mapToTableContentInjectionRenderProperties = (config: TableContentInjectionConfigModel): TableContentInjectionRenderModel => {
      const renderInstance = new TableContentInjectionRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToTableContentInjectionRenderProperties)
  }

}
