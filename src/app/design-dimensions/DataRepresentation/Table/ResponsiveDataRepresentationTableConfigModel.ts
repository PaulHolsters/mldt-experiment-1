import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TableDataRepresentationConfigModel} from "./TableDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TableDataRepresentationRenderModel} from "./TableDataRepresentationRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveDataRepresentationTableConfigModel extends ResponsiveConfigModel<TableDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<TableDataRepresentationConfigModel>{
  public portraitTablet: TableDataRepresentationConfigModel|DeterminedByEngine=undefined
  public tablet:TableDataRepresentationConfigModel|DeterminedByEngine=undefined
  public laptop: TableDataRepresentationConfigModel|DeterminedByEngine=undefined
  public highResolution: TableDataRepresentationConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:TableDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TableDataRepresentationConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TableDataRepresentationConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TableDataRepresentationConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TableDataRepresentationConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:TableDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number): TableDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TableDataRepresentationRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
