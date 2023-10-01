import {ResponsiveConfigModel} from "../../ResponsiveConfigModel";
import {ResponsiveConfigModelI} from "../../../Interfaces/ResponsiveConfigModelI";
import {DialogStructuralConfigModel} from "./DialogStructuralConfigModel";
import {DialogStructuralRenderModel} from "./DialogStructuralRenderModel";
import {DeterminedByEngine} from "../../../types/type-aliases";
export class ResponsiveStructuralDialogConfigModel
  extends ResponsiveConfigModel<DialogStructuralConfigModel>
  implements ResponsiveConfigModelI<DialogStructuralConfigModel>{
  public highResolution: DialogStructuralConfigModel| DeterminedByEngine = undefined
  public laptop:DialogStructuralConfigModel  | DeterminedByEngine = undefined
  public tablet:DialogStructuralConfigModel  | DeterminedByEngine = undefined
  public portraitTablet:DialogStructuralConfigModel | DeterminedByEngine = undefined
  constructor(public smartphone: DialogStructuralConfigModel) {
    super()
  }
  setSmartphone(smartphone:DialogStructuralConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: DialogStructuralConfigModel| DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet:DialogStructuralConfigModel | DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: DialogStructuralConfigModel | DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution:DialogStructuralConfigModel | DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }

  getInstance() {
    return 'table'
  }
  public getConfirmPopupStructuralRenderProperties(screenSize: number): DialogStructuralRenderModel {
    const config = this.getConfigModel(screenSize)
    const renderInstance = new DialogStructuralRenderModel()
    Object.entries(config).forEach(([k, v]) => {
      if (v) renderInstance.setProperty(k, v)
    })
    return renderInstance
  }
}
