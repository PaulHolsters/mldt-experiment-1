import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {DialogConfigModel} from "./DialogConfigModel";
import {DialogRenderModel} from "./DialogRenderModel";
export class ResponsiveStructuralDialogConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralDialogConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralDialogConfigModel>{
  public highResolution: DialogConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:DialogConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:DialogConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:DialogConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: DialogConfigModel) {
    super()
  }
  setSmartphone(smartphone:DialogConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DialogConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:DialogConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DialogConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:DialogConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): DialogRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToDialogStructuralRenderProperties = (config: DialogConfigModel): DialogRenderModel => {
        const renderInstance = new DialogRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToDialogStructuralRenderProperties)
  }
}
