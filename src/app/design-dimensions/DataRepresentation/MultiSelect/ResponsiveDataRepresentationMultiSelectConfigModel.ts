import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {MultiSelectDataRepresentationConfigModel} from "./MultiSelectDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {MultiSelectDataRepresentationRenderModel} from "./MultiSelectDataRepresentationRenderModel";
import {BlueprintValue} from "../../../types/union-types";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class ResponsiveDataRepresentationMultiSelectConfigModel extends ResponsiveConfigModel<MultiSelectDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<MultiSelectDataRepresentationConfigModel>{
  public portraitTablet: MultiSelectDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:MultiSelectDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: MultiSelectDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: MultiSelectDataRepresentationConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:MultiSelectDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: MultiSelectDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: MultiSelectDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: MultiSelectDataRepresentationConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: MultiSelectDataRepresentationConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:MultiSelectDataRepresentationConfigModel=new MultiSelectDataRepresentationConfigModel()) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number,
                                               data:BlueprintValue|undefined=undefined)
    : MultiSelectDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new MultiSelectDataRepresentationRenderModel()
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
