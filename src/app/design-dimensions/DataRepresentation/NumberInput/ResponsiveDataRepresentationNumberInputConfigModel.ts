import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {NumberInputDataRepresentationConfigModel} from "./NumberInputDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NumberInputDataRepresentationRenderModel} from "./NumberInputDataRepresentationRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveDataRepresentationNumberInputConfigModel extends ResponsiveConfigModel<NumberInputDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<NumberInputDataRepresentationConfigModel>{
  public portraitTablet: NumberInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:NumberInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: NumberInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: NumberInputDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:NumberInputDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: NumberInputDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: NumberInputDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: NumberInputDataRepresentationConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: NumberInputDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:NumberInputDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number): NumberInputDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new NumberInputDataRepresentationRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      renderInstance.setProperty(k,v)
    })
    return renderInstance
  }

}
