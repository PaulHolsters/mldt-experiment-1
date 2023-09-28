import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {TableContentInjectionRenderModel} from "./table/TableContentInjectionRenderModel";
import {TableContentInjectionConfigModel} from "./table/TableContentInjectionConfigModel";
import {DialogContentInjectionConfigModel} from "./dialog/DialogContentInjectionConfigModel";
import {MenubarContentInjectionConfigModel} from "./menubar/MenubarContentInjectionConfigModel";
import {DialogContentInjectionRenderModel} from "./dialog/DialogContentInjectionRenderModel";
import {MenubarContentInjectionRenderModel} from "./menubar/MenubarContentInjectionRenderModel";
export class ResponsiveContentInjectionConfigModel<ContentInjectConfigModelType,ContentInjectRenderModelType>
  extends ResponsiveConfigModel<ResponsiveContentInjectionConfigModel<ContentInjectConfigModelType,ContentInjectRenderModelType>>
  implements ResponsiveConfigModelI<ResponsiveContentInjectionConfigModel<ContentInjectConfigModelType,ContentInjectRenderModelType>>{
  public portraitTablet: ContentInjectConfigModelType|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:ContentInjectConfigModelType|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: ContentInjectConfigModelType|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: ContentInjectConfigModelType|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:ContentInjectConfigModelType){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: ContentInjectConfigModelType| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: ContentInjectConfigModelType| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: ContentInjectConfigModelType | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:ContentInjectConfigModelType| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:ContentInjectConfigModelType) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getContentInjectionRenderProperties(screenSize: number): ContentInjectRenderModelType {
    const mapToContentInjectionRenderProperties = (config: ContentInjectConfigModelType): ContentInjectRenderModelType => {
      // todo use constructor solution here
      if(config instanceof TableContentInjectionConfigModel){
        const renderInstance = new TableContentInjectionRenderModel()
        Object.entries(config).forEach(([k,v])=>{
          if(v) renderInstance?.setProperty(k,v)
        })
        return renderInstance
      } else if(config instanceof DialogContentInjectionConfigModel){
        const renderInstance = new DialogContentInjectionRenderModel()
        Object.entries(config).forEach(([k,v])=>{
          if(v) renderInstance?.setProperty(k,v)
        })
        return renderInstance
      } else if(config instanceof MenubarContentInjectionConfigModel){
        const renderInstance = new MenubarContentInjectionRenderModel()
        Object.entries(config).forEach(([k,v])=>{
          if(v) renderInstance?.setProperty(k,v)
        })
        return renderInstance
      } else throw new Error('not implemented branch')

    }
    return this.getRenderProperties(screenSize,mapToContentInjectionRenderProperties)
  }

}
