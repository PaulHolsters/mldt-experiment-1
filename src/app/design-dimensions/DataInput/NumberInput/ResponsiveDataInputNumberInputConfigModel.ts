import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {NumberInputDataInputConfigModel} from "./NumberInputDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {NumberInputDataInputRenderModel} from "./NumberInputDataInputRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
import {BlueprintValue} from "../../../types/union-types";
export class ResponsiveDataInputNumberInputConfigModel extends ResponsiveConfigModel<NumberInputDataInputConfigModel>
  implements ResponsiveConfigModelI<NumberInputDataInputConfigModel>{
  public portraitTablet: NumberInputDataInputConfigModel|DeterminedByEngine=undefined
  public tablet:NumberInputDataInputConfigModel|DeterminedByEngine=undefined
  public laptop: NumberInputDataInputConfigModel|DeterminedByEngine=undefined
  public highResolution: NumberInputDataInputConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:NumberInputDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: NumberInputDataInputConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: NumberInputDataInputConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: NumberInputDataInputConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: NumberInputDataInputConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:NumberInputDataInputConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataInputRenderProperties(screenSize: number,
                                      data:BlueprintValue|undefined=undefined): NumberInputDataInputRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new NumberInputDataInputRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
