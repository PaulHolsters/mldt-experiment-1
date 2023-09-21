import {DataInputConfigModel} from "./DataInputConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {DataInputRenderModel} from "./DataInputRenderModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {NumberInputDataInputConfigModel} from "./NumberInput/NumberInputDataInputConfigModel";
import {RadioButtonGroupDataInputConfigModel} from "./RadioButtonGroup/RadioButtonGroupDataInputConfigModel";
import {RadioButtonGroupDataInputRenderModel} from "./RadioButtonGroup/RadioButtonGroupDataInputRenderModel";
import {NumberInputDataInputRenderModel} from "./NumberInput/NumberInputDataInputRenderModel";
import {TextInputDataInputConfigModel} from "./TextInput/TextInputDataInputConfigModel";
import {TextInputDataInputRenderModel} from "./TextInput/TextInputDataInputRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";

export class ResponsiveDataInputConfigModel extends ResponsiveConfigModel<ResponsiveDataInputConfigModel>
  implements ResponsiveConfigModelI<ResponsiveDataInputConfigModel>{
  public portraitTablet: DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:DataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: DataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DataInputConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: DataInputConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:DataInputConfigModel) {
    super()
  }
  getInstance(){
    return 'data-input'
  }
  public getDataInputRenderProperties(screenSize: number):DataInputRenderModel{
    const mapToToInputRenderProps = (config: DataInputConfigModel): DataInputRenderModel => {
      const renderInstance = new DataInputRenderModel()
      if(config.componentConfigModel instanceof NumberInputDataInputConfigModel){
        renderInstance.componentRenderModel = new NumberInputDataInputRenderModel()
      } else if(config.componentConfigModel instanceof RadioButtonGroupDataInputConfigModel){
        renderInstance.componentRenderModel = new RadioButtonGroupDataInputRenderModel()
      }
      else if(config.componentConfigModel instanceof TextInputDataInputConfigModel){
        renderInstance.componentRenderModel = new TextInputDataInputRenderModel()
      }
      Object.entries(config.componentConfigModel).forEach(([k,v])=>{
        if(v) renderInstance.componentRenderModel?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToInputRenderProps)
  }
}
