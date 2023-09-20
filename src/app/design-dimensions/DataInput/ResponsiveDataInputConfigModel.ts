import {DataInputConfigModel} from "./DataInputConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ResponsiveDataRepresentationConfigModel} from "../DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {DataInputRenderModel} from "./DataInputRenderModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {MenubarContentInjectionConfigModel} from "../ContentInjection/menubar/MenubarContentInjectionConfigModel";
import {MenubarContentInjectionRenderModel} from "../ContentInjection/menubar/MenubarContentInjectionRenderModel";
import {DialogContentInjectionConfigModel} from "../ContentInjection/dialog/DialogContentInjectionConfigModel";
import {DialogContentInjectionRenderModel} from "../ContentInjection/dialog/DialogContentInjectionRenderModel";
import {TableContentInjectionConfigModel} from "../ContentInjection/table/TableContentInjectionConfigModel";
import {TableContentInjectionRenderModel} from "../ContentInjection/table/TableContentInjectionRenderModel";
import {NumberInputDataInputConfigModel} from "./NumberInput/NumberInputDataInputConfigModel";
import {
  NumberInputDataRepresentationRenderModel
} from "../DataRepresentation/NumberInput/NumberInputDataRepresentationRenderModel";
import {RadioButtonGroupDataInputConfigModel} from "./RadioButtonGroup/RadioButtonGroupDataInputConfigModel";
import {RadioButtonGroupDataInputRenderModel} from "./RadioButtonGroup/RadioButtonGroupDataInputRenderModel";
import {NumberInputDataInputRenderModel} from "./NumberInput/NumberInputDataInputRenderModel";
import {TextInputDataInputConfigModel} from "./TextInput/TextInputDataInputConfigModel";
import {TextInputDataInputRenderModel} from "./TextInput/TextInputDataInputRenderModel";

export class ResponsiveDataInputConfigModel extends ResponsiveConfigModel<ResponsiveDataRepresentationConfigModel>  {
  public portraitTablet: DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: DataInputConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
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
