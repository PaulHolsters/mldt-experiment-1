import {DimensioningConfigModel} from "./DimensioningConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
import {DimensioningRenderModel} from "./DimensioningRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {CalculatedDimensioningConfigModel} from "./CalculatedDimensioningConfigModel";
import {NonCalculatedDimensioningConfigModel} from "./NonCalculatedDimensioningConfigModel";
import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";

export class ResponsiveDimensioningConfigModel extends ResponsiveConfigModel<ResponsiveDimensioningConfigModel>{
  highResolution: DimensioningConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  laptop: DimensioningConfigModel | ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  portraitTablet: DimensioningConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  tablet: DimensioningConfigModel| ZeroValueType.DeterminedByEngine =ZeroValueType.DeterminedByEngine
  setDimensions(screensize:ScreenSize,model:DimensioningConfigModel){
    // todo
  }
  constructor(public smartphone:DimensioningConfigModel){
    super()
  }
  public getDimensionsRenderProperties(screenSize: number): DimensioningRenderModel {
    const mapToDimensioningRenderProperties = (dimensionsConfig: DimensioningConfigModel): DimensioningRenderModel => {
      const compPropsObj = new DimensioningRenderModel()
      if(dimensionsConfig.width){
        if(dimensionsConfig.width instanceof CalculatedDimensioningConfigModel){
          compPropsObj.width = dimensionsConfig.width.value
        } else if(dimensionsConfig.width instanceof NonCalculatedDimensioningConfigModel){
          compPropsObj.width = dimensionsConfig.width.value+dimensionsConfig.width.unit
        } else if(dimensionsConfig.width === ParentConfigType.static){
          compPropsObj.width = ParentConfigType.static
          compPropsObj.calcWidth = ParentConfigType.static
        } else throw new Error('Er is een optie bijgekomen die nog niet werd geïmplementeerd')
      }
      if(dimensionsConfig.height){
        if(dimensionsConfig.height instanceof CalculatedDimensioningConfigModel){
          compPropsObj.height = dimensionsConfig.height.value
        } else if(dimensionsConfig.height instanceof NonCalculatedDimensioningConfigModel){
          compPropsObj.height = dimensionsConfig.height.value+dimensionsConfig.height.unit
        } else if(dimensionsConfig.height === ParentConfigType.static){
          compPropsObj.height = ParentConfigType.static
          compPropsObj.calcHeight = ParentConfigType.static
        } else throw new Error('Er is een optie bijgekomen die nog niet werd geïmplementeerd')
      }
      if(dimensionsConfig.dynamic){
        compPropsObj.grow = dimensionsConfig.dynamic.grow
        compPropsObj.shrink = dimensionsConfig.dynamic.shrink
      }
      return compPropsObj
    }
    return this.getRenderProperties(screenSize,mapToDimensioningRenderProperties)
  }
  getInstance(){
    return 'dimensions'
  }
}
