import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {RadioButtonGroupDataInputConfigModel} from "./RadioButtonGroupDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {RadioButtonGroupDataInputRenderModel} from "./RadioButtonGroupDataInputRenderModel";
import {BlueprintValue} from "../../../types/union-types";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveDataInputRadioButtonGroupConfigModel extends ResponsiveConfigModel<RadioButtonGroupDataInputConfigModel>
  implements ResponsiveConfigModelI<RadioButtonGroupDataInputConfigModel>{
  public portraitTablet: RadioButtonGroupDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:RadioButtonGroupDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: RadioButtonGroupDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: RadioButtonGroupDataInputConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:RadioButtonGroupDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: RadioButtonGroupDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: RadioButtonGroupDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: RadioButtonGroupDataInputConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: RadioButtonGroupDataInputConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:RadioButtonGroupDataInputConfigModel=new RadioButtonGroupDataInputConfigModel()) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataInputRenderProperties(screenSize: number,
                                      data:BlueprintValue|undefined=undefined): RadioButtonGroupDataInputRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new RadioButtonGroupDataInputRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      renderInstance.setProperty(k,v)
    })
    return renderInstance
  }

}
