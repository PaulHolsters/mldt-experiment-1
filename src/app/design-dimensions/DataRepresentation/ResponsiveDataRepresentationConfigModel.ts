import {DataRepresentationConfigModel} from "./DataRepresentationConfigModel";
import {DataRepresentationRenderModel} from "./DataRepresentationRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {NumberInputDataInputConfigModel} from "../DataInput/NumberInput/NumberInputDataInputConfigModel";
import {NumberInputDataInputRenderModel} from "../DataInput/NumberInput/NumberInputDataInputRenderModel";
import {RadioButtonGroupDataInputConfigModel} from "../DataInput/RadioButtonGroup/RadioButtonGroupDataInputConfigModel";
import {RadioButtonGroupDataInputRenderModel} from "../DataInput/RadioButtonGroup/RadioButtonGroupDataInputRenderModel";
import {TextInputDataInputConfigModel} from "../DataInput/TextInput/TextInputDataInputConfigModel";
import {TextInputDataInputRenderModel} from "../DataInput/TextInput/TextInputDataInputRenderModel";
import {MultiSelectDataRepresentationConfigModel} from "./MultiSelect/MultiSelectDataRepresentationConfigModel";
import {MultiSelectDataRepresentationRenderModel} from "./MultiSelect/MultiSelectDataRepresentationRenderModel";
import {NumberInputDataRepresentationConfigModel} from "./NumberInput/NumberInputDataRepresentationConfigModel";
import {NumberInputDataRepresentationRenderModel} from "./NumberInput/NumberInputDataRepresentationRenderModel";
import {
  RadioButtonGroupDataRepresentationConfigModel
} from "./RadioButtonGroup/RadioButtonGroupDataRepresentationConfigModel";
import {
  RadioButtonGroupDataRepresentationRenderModel
} from "./RadioButtonGroup/RadioButtonGroupDataRepresentationRenderModel";
import {TableDataRepresentationConfigModel} from "./Table/TableDataRepresentationConfigModel";
import {TableDataRepresentationRenderModel} from "./Table/TableDataRepresentationRenderModel";
import {TextInputDataRepresentationConfigModel} from "./TextInput/TextInputDataRepresentationConfigModel";
import {TextInputDataRepresentationRenderModel} from "./TextInput/TextInputDataRepresentationRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {DataInputConfigModel} from "../DataInput/DataInputConfigModel";
export class ResponsiveDataRepresentationConfigModel extends ResponsiveConfigModel<ResponsiveDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<ResponsiveDataRepresentationConfigModel>{
  public portraitTablet: DataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:DataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: DataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: DataRepresentationConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:DataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: DataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DataRepresentationConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: DataRepresentationConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:DataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'data-representation'
  }
  public getDataRepresentationRenderProperties(screenSize: number):DataRepresentationRenderModel{
    const mapToToDataRepresentationRenderProps = (config: DataRepresentationConfigModel): DataRepresentationRenderModel => {
      const renderInstance = new DataRepresentationRenderModel()
      if(config.componentConfigModel instanceof MultiSelectDataRepresentationConfigModel){
        renderInstance.componentRenderModel = new MultiSelectDataRepresentationRenderModel()
      } else if(config.componentConfigModel instanceof NumberInputDataRepresentationConfigModel){
        renderInstance.componentRenderModel = new NumberInputDataRepresentationRenderModel()
      } else if(config.componentConfigModel instanceof RadioButtonGroupDataRepresentationConfigModel){
        renderInstance.componentRenderModel = new RadioButtonGroupDataRepresentationRenderModel()
      } else if(config.componentConfigModel instanceof TableDataRepresentationConfigModel){
        renderInstance.componentRenderModel = new TableDataRepresentationRenderModel()
      } else if(config.componentConfigModel instanceof TextInputDataRepresentationConfigModel){
        renderInstance.componentRenderModel = new TextInputDataRepresentationRenderModel()
      }
      Object.entries(config.componentConfigModel).forEach(([k,v])=>{
        if(v) renderInstance.componentRenderModel?.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToDataRepresentationRenderProps)
  }
}
