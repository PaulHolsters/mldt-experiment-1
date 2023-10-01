import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TextInputDataInputConfigModel} from "./TextInputDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TextInputDataInputRenderModel} from "./TextInputDataInputRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveDataInputTextInputConfigModel extends ResponsiveConfigModel<TextInputDataInputConfigModel>
  implements ResponsiveConfigModelI<TextInputDataInputConfigModel>{
  public portraitTablet: TextInputDataInputConfigModel|DeterminedByEngine=undefined
  public tablet:TextInputDataInputConfigModel|DeterminedByEngine=undefined
  public laptop: TextInputDataInputConfigModel|DeterminedByEngine=undefined
  public highResolution: TextInputDataInputConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:TextInputDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TextInputDataInputConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TextInputDataInputConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TextInputDataInputConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TextInputDataInputConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:TextInputDataInputConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataInputRenderProperties(screenSize: number): TextInputDataInputRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TextInputDataInputRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
