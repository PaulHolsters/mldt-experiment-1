import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {MenubarContentInjectionConfigModel} from "./MenubarContentInjectionConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {MenubarContentInjectionRenderModel} from "./MenubarContentInjectionRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveContentInjectionMenubarConfigModel extends ResponsiveConfigModel<MenubarContentInjectionConfigModel>
  implements ResponsiveConfigModelI<MenubarContentInjectionConfigModel>{
  public portraitTablet: MenubarContentInjectionConfigModel|DeterminedByEngine=undefined
  public tablet:MenubarContentInjectionConfigModel|DeterminedByEngine=undefined
  public laptop: MenubarContentInjectionConfigModel|DeterminedByEngine=undefined
  public highResolution: MenubarContentInjectionConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:MenubarContentInjectionConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MenubarContentInjectionConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: MenubarContentInjectionConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MenubarContentInjectionConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: MenubarContentInjectionConfigModel| DeterminedByEngine){
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
