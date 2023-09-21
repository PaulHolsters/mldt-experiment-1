import {LayoutOverrideConfigModel} from "./LayoutOverrideConfigModel";
import {LayoutOverrideRenderModel} from "./LayoutOverrideRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {TableLayoutConfigModel} from "../Layout/Table/TableLayoutConfigModel";
export class ResponsiveLayoutOverrideConfigModel extends ResponsiveConfigModel<ResponsiveLayoutOverrideConfigModel>
implements ResponsiveConfigModelI<ResponsiveLayoutOverrideConfigModel>{
  public smartphone:LayoutOverrideConfigModel=new LayoutOverrideConfigModel()
  public portraitTablet: LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: LayoutOverrideConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:LayoutOverrideConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: LayoutOverrideConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: LayoutOverrideConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: LayoutOverrideConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: LayoutOverrideConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor() {
    super()
  }
  getInstance(){
    return 'position'
  }
  public getPositionRenderProperties(screenSize: number): LayoutOverrideRenderModel {
    const mapToPositioningRenderProperties =
      (config: LayoutOverrideConfigModel): LayoutOverrideRenderModel => {
        const renderInstance = new LayoutOverrideRenderModel()
        Object.entries(config).forEach(([k,v])=>{
          if(v) renderInstance.setProperty(k,v)
        })
        return renderInstance
      }
     return this.getRenderProperties(screenSize,mapToPositioningRenderProperties)
  }
}
