import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {MenubarContentInjectionConfigModel} from "./MenubarContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {MenubarContentInjectionRenderModel} from "./MenubarContentInjectionRenderModel";
export class ResponsiveContentInjectionMenubarConfigModel extends ResponsiveConfigModel<MenubarContentInjectionConfigModel>
  implements ResponsiveConfigModelI<MenubarContentInjectionConfigModel>{
  public portraitTablet: MenubarContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:MenubarContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: MenubarContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: MenubarContentInjectionConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:MenubarContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MenubarContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: MenubarContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MenubarContentInjectionConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: MenubarContentInjectionConfigModel| ZeroValueType.DeterminedByEngine){
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
