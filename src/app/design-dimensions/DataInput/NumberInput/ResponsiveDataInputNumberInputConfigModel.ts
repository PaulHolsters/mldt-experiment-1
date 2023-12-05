import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {NumberInputDataInputConfigModel} from "./NumberInputDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NumberInputDataInputRenderModel} from "./NumberInputDataInputRenderModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveDataInputNumberInputConfigModel extends ResponsiveConfigModel<NumberInputDataInputConfigModel>
  implements ResponsiveConfigModelI<NumberInputDataInputConfigModel>{
  public portraitTablet: NumberInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:NumberInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: NumberInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: NumberInputDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:NumberInputDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: NumberInputDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: NumberInputDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: NumberInputDataInputConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: NumberInputDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:NumberInputDataInputConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataInputRenderProperties(screenSize: number): NumberInputDataInputRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new NumberInputDataInputRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      renderInstance.setProperty(k,v)
    })
    return renderInstance
  }

}
