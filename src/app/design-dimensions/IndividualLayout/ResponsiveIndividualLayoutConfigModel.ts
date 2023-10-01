import {IndividualLayoutConfigModel} from "./IndividualLayoutConfigModel";
import {IndividualLayoutRenderModel} from "./IndividualLayoutRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../types/type-aliases";
export class ResponsiveIndividualLayoutConfigModel extends ResponsiveConfigModel<IndividualLayoutConfigModel>
implements ResponsiveConfigModelI<IndividualLayoutConfigModel>{
  public smartphone:IndividualLayoutConfigModel=new IndividualLayoutConfigModel()
  public portraitTablet: IndividualLayoutConfigModel|DeterminedByEngine=undefined
  public tablet:IndividualLayoutConfigModel|DeterminedByEngine=undefined
  public laptop: IndividualLayoutConfigModel|DeterminedByEngine=undefined
  public highResolution: IndividualLayoutConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:IndividualLayoutConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: IndividualLayoutConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: IndividualLayoutConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: IndividualLayoutConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: IndividualLayoutConfigModel| DeterminedByEngine){
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
