import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {NumberInputDataRepresentationConfigModel} from "./NumberInputDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {NumberInputDataRepresentationRenderModel} from "./NumberInputDataRepresentationRenderModel";
export class ResponsiveDataRepresentationNumberInputConfigModel extends ResponsiveConfigModel<ResponsiveDataRepresentationNumberInputConfigModel>
  implements ResponsiveConfigModelI<ResponsiveDataRepresentationNumberInputConfigModel>{
  public portraitTablet: NumberInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:NumberInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: NumberInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: NumberInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:NumberInputDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: NumberInputDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: NumberInputDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: NumberInputDataRepresentationConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: NumberInputDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
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
    const mapToNumberInputDataRepresentationRenderProperties = (config: NumberInputDataRepresentationConfigModel): NumberInputDataRepresentationRenderModel => {
      const renderInstance = new NumberInputDataRepresentationRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToNumberInputDataRepresentationRenderProperties)
  }

}
