import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TextInputDataRepresentationConfigModel} from "./TextInputDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {TextInputDataRepresentationRenderModel} from "./TextInputDataRepresentationRenderModel";
export class ResponsiveDataRepresentationTextInputConfigModel extends ResponsiveConfigModel<ResponsiveDataRepresentationTextInputConfigModel>
  implements ResponsiveConfigModelI<ResponsiveDataRepresentationTextInputConfigModel>{
  public portraitTablet: TextInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:TextInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: TextInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: TextInputDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:TextInputDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TextInputDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TextInputDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TextInputDataRepresentationConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TextInputDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
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
    const mapToTextInputDataRepresentationRenderProperties = (config: TextInputDataRepresentationConfigModel): TextInputDataRepresentationRenderModel => {
      const renderInstance = new TextInputDataRepresentationRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToTextInputDataRepresentationRenderProperties)
  }

}
