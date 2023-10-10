import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {RadioButtonGroupDataRepresentationConfigModel} from "./RadioButtonGroupDataRepresentationConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {RadioButtonGroupDataRepresentationRenderModel} from "./RadioButtonGroupDataRepresentationRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
import {ClientData} from "../../../services/data/client/ClientData";
import {OutputData} from "../../../types/union-types";
export class ResponsiveDataRepresentationRadioButtonGroupConfigModel extends ResponsiveConfigModel<RadioButtonGroupDataRepresentationConfigModel>
  implements ResponsiveConfigModelI<RadioButtonGroupDataRepresentationConfigModel>{
  public portraitTablet: RadioButtonGroupDataRepresentationConfigModel|DeterminedByEngine=undefined
  public tablet:RadioButtonGroupDataRepresentationConfigModel|DeterminedByEngine=undefined
  public laptop: RadioButtonGroupDataRepresentationConfigModel|DeterminedByEngine=undefined
  public highResolution: RadioButtonGroupDataRepresentationConfigModel|DeterminedByEngine=undefined
  setSmartphone(smartphone:RadioButtonGroupDataRepresentationConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: RadioButtonGroupDataRepresentationConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: RadioButtonGroupDataRepresentationConfigModel| DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: RadioButtonGroupDataRepresentationConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: RadioButtonGroupDataRepresentationConfigModel| DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:RadioButtonGroupDataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'content-injection'
  }
  public getDataRepresentationRenderProperties(screenSize: number,clientData?:OutputData): RadioButtonGroupDataRepresentationRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new RadioButtonGroupDataRepresentationRenderModel()
    if(clientData){
      renderInstance?.setDBIValues()
    } else{
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance?.setProperty(k,v)
      })
    }
    return renderInstance
  }

}
