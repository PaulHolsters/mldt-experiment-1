import {ScreenSize} from "../../../enums/screenSizes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableLayoutRenderModel} from "./TableLayoutRenderModel";
import {TableLayoutConfigModel} from "./TableLayoutConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class ResponsiveTableLayoutConfigModel extends ResponsiveConfigModel<TableLayoutConfigModel>
implements ResponsiveConfigModelI<TableLayoutConfigModel>{
  // todo los probleem op ivm het feit dat een nieuw scherm configureren een hele burden is nu
  public smartphone:TableLayoutConfigModel = new TableLayoutConfigModel()
  public portraitTablet: TableLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public tablet:TableLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public laptop: TableLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  public highResolution: TableLayoutConfigModel|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  setSmartphone(smartphone:TableLayoutConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableLayoutConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableLayoutConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableLayoutConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableLayoutConfigModel| NoValueType.CALCULATED_BY_ENGINE){
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
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TableLayoutRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance.setProperty(k,v)
    })
    return renderInstance
  }
}
