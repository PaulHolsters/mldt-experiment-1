import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TextInputDataRepresentationConfigModel} from "./TextInputDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TextInputDataRepresentationRenderModel} from "./TextInputDataRepresentationRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveDataRepresentationTextInputConfigModel extends ResponsiveConfigModel<TextInputDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<TextInputDataRepresentationConfigModel>{
  public portraitTablet: TextInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:TextInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: TextInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: TextInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:TextInputDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TextInputDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TextInputDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TextInputDataRepresentationConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TextInputDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:TextInputDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number): TextInputDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TextInputDataRepresentationRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      renderInstance.setProperty(k,v)
    })
    return renderInstance
  }

}
