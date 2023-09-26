import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {RadioButtonGroupDataRepresentationConfigModel} from "./RadioButtonGroupDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {RadioButtonGroupDataRepresentationRenderModel} from "./RadioButtonGroupDataRepresentationRenderModel";
export class ResponsiveDataRepresentationRadioButtonConfigModel extends ResponsiveConfigModel<ResponsiveDataRepresentationRadioButtonConfigModel>
  implements ResponsiveConfigModelI<ResponsiveDataRepresentationRadioButtonConfigModel>{
  public portraitTablet: RadioButtonGroupDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:RadioButtonGroupDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: RadioButtonGroupDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: RadioButtonGroupDataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:RadioButtonGroupDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: RadioButtonGroupDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: RadioButtonGroupDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: RadioButtonGroupDataRepresentationConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: RadioButtonGroupDataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:RadioButtonGroupDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number): RadioButtonGroupDataRepresentationRenderModel {
    const mapToRadioButtonGroupDataRepresentationRenderProperties = (config: RadioButtonGroupDataRepresentationConfigModel): RadioButtonGroupDataRepresentationRenderModel => {
      const renderInstance = new RadioButtonGroupDataRepresentationRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToRadioButtonGroupDataRepresentationRenderProperties)
  }

}
