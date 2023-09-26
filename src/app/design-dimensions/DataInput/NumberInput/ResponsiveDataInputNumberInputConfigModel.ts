import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {NumberInputDataInputConfigModel} from "./NumberInputDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {NumberInputDataInputRenderModel} from "./NumberInputDataInputRenderModel";
export class ResponsiveDataInputNumberInputConfigModel extends ResponsiveConfigModel<ResponsiveDataInputNumberInputConfigModel>
  implements ResponsiveConfigModelI<ResponsiveDataInputNumberInputConfigModel>{
  public portraitTablet: NumberInputDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:NumberInputDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: NumberInputDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: NumberInputDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:NumberInputDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: NumberInputDataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: NumberInputDataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: NumberInputDataInputConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: NumberInputDataInputConfigModel| ZeroValueType.DeterminedByEngine){
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
    const mapToNumberInputDataInputRenderProperties = (config: NumberInputDataInputConfigModel): NumberInputDataInputRenderModel => {
      const renderInstance = new NumberInputDataInputRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToNumberInputDataInputRenderProperties)
  }

}
