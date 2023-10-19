import {SizeConfigModel} from "./SizeConfigModel";
import {SizeRenderModel} from "./SizeRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {CalculatedSizeConfigModel} from "./CalculatedSizeConfigModel";
import {NonCalculatedSizeConfigModel} from "./NonCalculatedSizeConfigModel";
import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {ButtonSizeConfigModel} from "./button/ButtonSizeConfigModel";
import {ButtonSizeRenderModel} from "./button/ButtonSizeRenderModel";
import {ResponsiveConfigModelI} from "../../Interfaces/ResponsiveConfigModelI";
import {IconSizeConfigModel} from "./icon/IconSizeConfigModel";
import {IconSizeRenderModel} from "./icon/IconSizeRenderModel";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class ResponsiveSizeConfigModel
  extends ResponsiveConfigModel<SizeConfigModel>
  implements ResponsiveConfigModelI<SizeConfigModel>{
  public highResolution: SizeConfigModel| NoValueType.CALCULATED_BY_ENGINE =NoValueType.CALCULATED_BY_ENGINE
  public laptop: SizeConfigModel | NoValueType.CALCULATED_BY_ENGINE =NoValueType.CALCULATED_BY_ENGINE
  public portraitTablet: SizeConfigModel| NoValueType.CALCULATED_BY_ENGINE =NoValueType.CALCULATED_BY_ENGINE
  public tablet: SizeConfigModel| NoValueType.CALCULATED_BY_ENGINE =NoValueType.CALCULATED_BY_ENGINE
  public smartphone:SizeConfigModel = new SizeConfigModel()
  setSmartphone(smartphone:SizeConfigModel){
    this.smartphone = smartphone
    return this
  }
  setPortraitTablet(portraitTablet: SizeConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.portraitTablet = portraitTablet
    return this
  }
  setTablet(tablet: SizeConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.tablet = tablet
    return this
  }
  setLaptop(laptop: SizeConfigModel | NoValueType.CALCULATED_BY_ENGINE){
    this.laptop = laptop
    return this
  }
  setHighResolution(highResolution: SizeConfigModel| NoValueType.CALCULATED_BY_ENGINE){
    this.highResolution = highResolution
    return this
  }
  constructor(){
    super()
  }
  public getSizeRenderProperties(screenSize: number): SizeRenderModel {
    // todo fix omzetting
    const dimensionsConfig = this.getConfigModel(screenSize)
    const compPropsObj = new SizeRenderModel()
    if(dimensionsConfig.width!==NoValueType.NO_VALUE_NEEDED){
      if(dimensionsConfig.width instanceof CalculatedSizeConfigModel){
        compPropsObj.calcWidth = dimensionsConfig.width.value
      } else if(dimensionsConfig.width instanceof NonCalculatedSizeConfigModel){
        compPropsObj.width = dimensionsConfig.width.value+dimensionsConfig.width.unit
      } else if(dimensionsConfig.width === ParentConfigType.static){
        compPropsObj.width = ParentConfigType.static
        compPropsObj.calcWidth = ParentConfigType.static
      } else throw new Error('Er is een optie bijgekomen die nog niet werd geïmplementeerd')
    }
    if(dimensionsConfig.height!==NoValueType.NO_VALUE_NEEDED){
      if(dimensionsConfig.height instanceof CalculatedSizeConfigModel){
        compPropsObj.calcHeight = dimensionsConfig.height.value
      } else if(dimensionsConfig.height instanceof NonCalculatedSizeConfigModel){
        compPropsObj.height = dimensionsConfig.height.value+dimensionsConfig.height.unit
      } else if(dimensionsConfig.height === ParentConfigType.static){
        compPropsObj.height = ParentConfigType.static
        compPropsObj.calcHeight = ParentConfigType.static
      } else throw new Error('Er is een optie bijgekomen die nog niet werd geïmplementeerd')
    }
    if(dimensionsConfig.dynamicSize!==NoValueType.NO_VALUE_NEEDED){
      compPropsObj.grow = dimensionsConfig.dynamicSize.grow
      compPropsObj.shrink = dimensionsConfig.dynamicSize.shrink
    }
    if(dimensionsConfig.componentSpecificSize!==NoValueType.NO_VALUE_ALLOWED){
      // todo zorg ervoor via conditional typing dat je hier altijd de juiste moet gebruiken (naming!)
      //      hier zit meer generics in verborgen!
      if(dimensionsConfig.componentSpecificSize instanceof ButtonSizeConfigModel){
        const rm = new ButtonSizeRenderModel()
        rm.size = dimensionsConfig.componentSpecificSize.size
        compPropsObj.componentSpecificSize = rm
      }
      if(dimensionsConfig.componentSpecificSize instanceof IconSizeConfigModel){
        const rm = new IconSizeRenderModel()
        rm.size = dimensionsConfig.componentSpecificSize.size
        compPropsObj.componentSpecificSize = rm
      }
    }
    return compPropsObj
  }
  getInstance(){
    return 'size'
  }
}
