import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TextInputDataInputConfigModel} from "./TextInputDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TextInputDataInputRenderModel} from "./TextInputDataInputRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveDataInputTextInputConfigModel extends ResponsiveConfigModel<TextInputDataInputConfigModel>
  implements ResponsiveConfigModelI<TextInputDataInputConfigModel>{
  public portraitTablet: TextInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:TextInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: TextInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: TextInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:TextInputDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TextInputDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TextInputDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TextInputDataInputConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TextInputDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:TextInputDataInputConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataInputRenderProperties(screenSize: number): TextInputDataInputRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TextInputDataInputRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      renderInstance.setProperty(k,v)
    })
    return renderInstance
  }

}
