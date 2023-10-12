import {IndividualLayoutConfigModel} from "./IndividualLayoutConfigModel";
import {IndividualLayoutRenderModel} from "./IndividualLayoutRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../enums/NoValueTypes.enum";
export class ResponsiveIndividualLayoutConfigModel extends ResponsiveConfigModel<IndividualLayoutConfigModel>
implements ResponsiveConfigModelI<IndividualLayoutConfigModel>{
  public smartphone:IndividualLayoutConfigModel=new IndividualLayoutConfigModel()
  public portraitTablet: IndividualLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:IndividualLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: IndividualLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: IndividualLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:IndividualLayoutConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: IndividualLayoutConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: IndividualLayoutConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: IndividualLayoutConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: IndividualLayoutConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor() {
    super()
  }
  getInstance(){
    return 'position'
  }
  public getPositionRenderProperties(screenSize: number): IndividualLayoutRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new IndividualLayoutRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance.setProperty(k,v)
    })
    return renderInstance
  }
}
