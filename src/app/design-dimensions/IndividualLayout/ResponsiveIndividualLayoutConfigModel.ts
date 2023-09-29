import {IndividualLayoutConfigModel} from "./IndividualLayoutConfigModel";
import {IndividualLayoutRenderModel} from "./IndividualLayoutRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
export class ResponsiveIndividualLayoutConfigModel extends ResponsiveConfigModel<IndividualLayoutConfigModel>
implements ResponsiveConfigModelI<IndividualLayoutConfigModel>{
  public smartphone:IndividualLayoutConfigModel=new IndividualLayoutConfigModel()
  public portraitTablet: IndividualLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:IndividualLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: IndividualLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: IndividualLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:IndividualLayoutConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: IndividualLayoutConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: IndividualLayoutConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: IndividualLayoutConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: IndividualLayoutConfigModel| ZeroValueType.DeterminedByEngine){
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
