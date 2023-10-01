import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {TextInputDataRepresentationConfigModel} from "./TextInputDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {TextInputDataRepresentationRenderModel} from "./TextInputDataRepresentationRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveDataRepresentationTextInputConfigModel extends ResponsiveConfigModel<TextInputDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<TextInputDataRepresentationConfigModel>{
  public portraitTablet: TextInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  public tablet:TextInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  public laptop: TextInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  public highResolution: TextInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:TextInputDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: TextInputDataRepresentationConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: TextInputDataRepresentationConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: TextInputDataRepresentationConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: TextInputDataRepresentationConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:TextInputDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number): TextInputDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new TextInputDataRepresentationRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
