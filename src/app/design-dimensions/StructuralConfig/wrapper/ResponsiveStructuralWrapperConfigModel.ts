import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {WrapperStructuralConfigModel} from "./WrapperStructuralConfigModel";
import {WrapperStructuralRenderModel} from "./WrapperStructuralRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveStructuralWrapperConfigModel
  extends ResponsiveConfigModel<WrapperStructuralConfigModel>
  implements ResponsiveConfigModelI<WrapperStructuralConfigModel>{
  public highResolution: WrapperStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop:WrapperStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:WrapperStructuralConfigModel  | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet:WrapperStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor(public smartphone: WrapperStructuralConfigModel=new WrapperStructuralConfigModel()) {
    super()
  }
  setSmartphone(smartphone:WrapperStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: WrapperStructuralConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:WrapperStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: WrapperStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:WrapperStructuralConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getStructuralRenderProperties(screenSize: number): WrapperStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new WrapperStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
