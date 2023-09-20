import {ScreenSize} from "../../../enums/screenSizes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableLayoutRenderModel} from "./TableLayoutRenderModel";
import {TableLayoutConfigModel} from "./TableLayoutConfigModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class ResponsiveTableLayoutConfigModel extends ResponsiveConfigModel<ResponsiveTableLayoutConfigModel>{
  public smartphone:TableLayoutConfigModel = new TableLayoutConfigModel()
  public portraitTablet: TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: TableLayoutConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
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
