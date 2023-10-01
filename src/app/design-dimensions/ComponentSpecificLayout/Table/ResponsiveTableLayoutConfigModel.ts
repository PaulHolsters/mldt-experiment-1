import {ScreenSize} from "../../../enums/screenSizes.enum";
import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableLayoutRenderModel} from "./TableLayoutRenderModel";
import {TableLayoutConfigModel} from "./TableLayoutConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DeterminedByEngine} from "../../../types/type-aliases";

export class ResponsiveTableLayoutConfigModel extends ResponsiveConfigModel<TableLayoutConfigModel>
implements ResponsiveConfigModelI<TableLayoutConfigModel>{
  // todo los probleem op ivm het feit dat een nieuw scherm configureren een hele burden is nu
  public smartphone:TableLayoutConfigModel = new TableLayoutConfigModel()
  public portraitTablet: TableLayoutConfigModel|DeterminedByEngine=undefined
  public tablet:TableLayoutConfigModel|DeterminedByEngine=undefined
  public laptop: TableLayoutConfigModel|DeterminedByEngine=undefined
  public highResolution: TableLayoutConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:TableLayoutConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableLayoutConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableLayoutConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableLayoutConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableLayoutConfigModel| DeterminedByEngine){
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
