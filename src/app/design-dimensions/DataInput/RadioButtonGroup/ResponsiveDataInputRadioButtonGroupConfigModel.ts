import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {RadioButtonGroupDataInputConfigModel} from "./RadioButtonGroupDataInputConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {RadioButtonGroupDataInputRenderModel} from "./RadioButtonGroupDataInputRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveDataInputRadioButtonGroupConfigModel extends ResponsiveConfigModel<RadioButtonGroupDataInputConfigModel>
  implements ResponsiveConfigModelI<RadioButtonGroupDataInputConfigModel>{
  public portraitTablet: RadioButtonGroupDataInputConfigModel|DeterminedByEngine=undefined
  public tablet:RadioButtonGroupDataInputConfigModel|DeterminedByEngine=undefined
  public laptop: RadioButtonGroupDataInputConfigModel|DeterminedByEngine=undefined
  public highResolution: RadioButtonGroupDataInputConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:RadioButtonGroupDataInputConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: RadioButtonGroupDataInputConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: RadioButtonGroupDataInputConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: RadioButtonGroupDataInputConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: RadioButtonGroupDataInputConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:RadioButtonGroupDataInputConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataInputRenderProperties(screenSize: number): RadioButtonGroupDataInputRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new RadioButtonGroupDataInputRenderModel()
    Object.entries(config).forEach(([k,v])=>{
      if(v) renderInstance?.setProperty(k,v)
    })
    return renderInstance
  }

}
