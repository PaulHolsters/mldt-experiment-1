import {StylingConfigModel} from "./StylingConfigModel";
import {StylingRenderModel} from "./StylingRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {ButtonStylingConfigModel} from "./button/ButtonStylingConfigModel";
import {IconStylingConfigModel} from "./icon/IconStylingConfigModel";
import {ButtonStylingRenderModel} from "./button/ButtonStylingRenderModel";
import {IconStylingRenderModel} from "./icon/IconStylingRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {SpacingConfigModel} from "../Spacing/SpacingConfigModel";
import {TableStylingConfigModel} from "./table/TableStylingConfigModel";
import {TableStylingRenderModel} from "./table/TableStylingRenderModel";

export class ResponsiveStylingConfigModel extends ResponsiveConfigModel<ResponsiveStylingConfigModel>
  implements ResponsiveConfigModelI<ResponsiveStylingConfigModel>{
  public portraitTablet: StylingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public tablet:StylingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public laptop: StylingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public highResolution: StylingConfigModel|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  setSmartphone(smartphone:StylingConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: StylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: StylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: StylingConfigModel | ZeroValueType.DeterminedByEngine){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: StylingConfigModel| ZeroValueType.DeterminedByEngine){
    this.highResolution = highResolution
    return this
  }
  constructor(public smartphone:StylingConfigModel) {
    // todo voor background, spacing, border etc. moet je aprte modellen maken omdat deze sowieso voor alle componenten hetzelfde zijn en
    //      altijd opgaan
    super()
  }
  public getInstance(){
    return 'styling'
  }
  public getStylingRenderProperties(screenSize: number): StylingRenderModel {
    const mapToStylingRenderProperties =
      (stylingConfig: StylingConfigModel): StylingRenderModel => {
        const rm = new StylingRenderModel()
        if(stylingConfig.componentConfigModel instanceof ButtonStylingConfigModel){
          rm.componentRenderModel=new ButtonStylingRenderModel()
        } else if(stylingConfig.componentConfigModel instanceof IconStylingConfigModel){
          rm.componentRenderModel=new IconStylingRenderModel()
        } else if(stylingConfig.componentConfigModel instanceof TableStylingConfigModel){
          rm.componentRenderModel=new TableStylingRenderModel()
        }
        Object.entries(stylingConfig.componentConfigModel).forEach(([k,v])=>{
          if(v) rm.componentRenderModel?.setProperty(k,v)
        })
        return rm
      }
      return this.getRenderProperties(screenSize,mapToStylingRenderProperties)
  }
}
