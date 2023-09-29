import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {MultiSelectDataRepresentationConfigModel} from "./MultiSelectDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {MultiSelectDataRepresentationRenderModel} from "./MultiSelectDataRepresentationRenderModel";
export class ResponsiveDataRepresentationMultiSelectConfigModel extends ResponsiveConfigModel<MultiSelectDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<MultiSelectDataRepresentationConfigModel>{
  public portraitTablet: MultiSelectDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:MultiSelectDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: MultiSelectDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: MultiSelectDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:MultiSelectDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MultiSelectDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: MultiSelectDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MultiSelectDataRepresentationConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: MultiSelectDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:MultiSelectDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number): MultiSelectDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new MultiSelectDataRepresentationRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
