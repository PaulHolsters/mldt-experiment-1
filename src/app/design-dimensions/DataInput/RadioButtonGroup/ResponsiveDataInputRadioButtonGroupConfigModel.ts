import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {RadioButtonGroupDataInputConfigModel} from "./RadioButtonGroupDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {RadioButtonGroupDataInputRenderModel} from "./RadioButtonGroupDataInputRenderModel";
export class ResponsiveDataInputRadioButtonGroupConfigModel extends ResponsiveConfigModel<ResponsiveDataInputRadioButtonGroupConfigModel>
  implements ResponsiveConfigModelI<ResponsiveDataInputRadioButtonGroupConfigModel>{
  public portraitTablet: RadioButtonGroupDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:RadioButtonGroupDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: RadioButtonGroupDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: RadioButtonGroupDataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:RadioButtonGroupDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: RadioButtonGroupDataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: RadioButtonGroupDataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: RadioButtonGroupDataInputConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: RadioButtonGroupDataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:RadioButtonGroupDataInputConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataInputRenderProperties(screenSize: number): RadioButtonGroupDataInputRenderModel {
    const mapToRadioButtonGroupDataInputRenderProperties = (config: RadioButtonGroupDataInputConfigModel): RadioButtonGroupDataInputRenderModel => {
      const renderInstance = new RadioButtonGroupDataInputRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToRadioButtonGroupDataInputRenderProperties)
  }

}
