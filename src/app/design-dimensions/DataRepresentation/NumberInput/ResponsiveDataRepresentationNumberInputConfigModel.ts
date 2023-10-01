import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {NumberInputDataRepresentationConfigModel} from "./NumberInputDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NumberInputDataRepresentationRenderModel} from "./NumberInputDataRepresentationRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveDataRepresentationNumberInputConfigModel extends ResponsiveConfigModel<NumberInputDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<NumberInputDataRepresentationConfigModel>{
  public portraitTablet: NumberInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  public tablet:NumberInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  public laptop: NumberInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  public highResolution: NumberInputDataRepresentationConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:NumberInputDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: NumberInputDataRepresentationConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: NumberInputDataRepresentationConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: NumberInputDataRepresentationConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: NumberInputDataRepresentationConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:NumberInputDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number): NumberInputDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new NumberInputDataRepresentationRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
