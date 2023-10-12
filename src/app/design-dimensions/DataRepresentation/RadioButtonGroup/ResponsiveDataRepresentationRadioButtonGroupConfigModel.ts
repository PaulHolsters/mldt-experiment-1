import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {RadioButtonGroupDataRepresentationConfigModel} from "./RadioButtonGroupDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {RadioButtonGroupDataRepresentationRenderModel} from "./RadioButtonGroupDataRepresentationRenderModel";
import {BlueprintValue} from "../../../types/union-types";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ResponsiveDataRepresentationRadioButtonGroupConfigModel extends ResponsiveConfigModel<RadioButtonGroupDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<RadioButtonGroupDataRepresentationConfigModel>{
  public portraitTablet: RadioButtonGroupDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:RadioButtonGroupDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: RadioButtonGroupDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: RadioButtonGroupDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:RadioButtonGroupDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: RadioButtonGroupDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: RadioButtonGroupDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: RadioButtonGroupDataRepresentationConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: RadioButtonGroupDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:RadioButtonGroupDataRepresentationConfigModel=new RadioButtonGroupDataRepresentationConfigModel()) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number,
                                               data:BlueprintValue|undefined=undefined)
    : RadioButtonGroupDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new RadioButtonGroupDataRepresentationRenderModel()
    if(data){
      renderInstance?.setDBIValues(data)
    } else{
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
    }
    return renderInstance
  }

}
