import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {DialogStructuralConfigModel} from "./DialogStructuralConfigModel";
import {DialogStructuralRenderModel} from "./DialogStructuralRenderModel";
export class ResponsiveStructuralDialogConfigModel
  extends ResponsiveConfigModel<ResponsiveStructuralDialogConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStructuralDialogConfigModel>{
  public highResolution: DialogStructuralConfigModel| ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public laptop:DialogStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public tablet:DialogStructuralConfigModel  | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  public portraitTablet:DialogStructuralConfigModel | ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor(public smartphone: DialogStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:DialogStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DialogStructuralConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:DialogStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DialogStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:DialogStructuralConfigModel | ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): DialogStructuralRenderModel {
    // todo hier kan je de constructie methode wel toepassen denk ik
    const mapToDialogStructuralRenderProperties = (config: DialogStructuralConfigModel): DialogStructuralRenderModel => {
        const renderInstance = new DialogStructuralRenderModel()
      Object.entries(config).forEach(([k, v]) => {
        if (v) renderInstance.setProperty(k, v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize, mapToDialogStructuralRenderProperties)
  }
}
