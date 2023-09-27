import {ScreenSize} from "../../../enums/screenSizes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableLayoutRenderModel} from "./TableLayoutRenderModel";
import {TableLayoutConfigModel} from "./TableLayoutConfigModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";

export class ResponsiveTableLayoutConfigModel extends ResponsiveConfigModel<ResponsiveTableLayoutConfigModel>
implements ResponsiveConfigModelI<ResponsiveTableLayoutConfigModel>{
  public smartphone:TableLayoutConfigModel = new TableLayoutConfigModel()
  public portraitTablet: TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:TableLayoutConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableLayoutConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableLayoutConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableLayoutConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableLayoutConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor() {
    super()
  }
  setTableLayout(screenSize:ScreenSize,model:TableLayoutConfigModel){
    Reflect.set(this,ScreenSize[screenSize],model)
  }
  getInstance(){
    return 'childLayout'
  }
  getTableLayoutRenderProperties(screenSize: number): TableLayoutRenderModel {
    const mapToTableLayoutRenderProperties = (config: TableLayoutConfigModel): TableLayoutRenderModel => {
      const renderInstance = new TableLayoutRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance

    }
    return this.getRenderProperties(screenSize,mapToTableLayoutRenderProperties)
  }
}
