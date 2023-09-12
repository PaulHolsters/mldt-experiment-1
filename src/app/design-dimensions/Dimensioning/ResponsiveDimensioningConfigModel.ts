import {DimensioningConfigModel} from "./DimensioningConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
import {DimensioningRenderModel} from "./DimensioningRenderModel";
import {HeightConfigModel} from "./HeightConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {FixedDimensionValueConfigType} from "../../enums/FixedDimensionValueConfigTypes.enum";
import {ComponentDimensionValueConfigType} from "../../enums/componentDimensionValueConfigTypes.enum";
import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {GrowValueConfigType} from "../../enums/GrowValueConfigTypes.enum";
import {ShrinkValueConfigType} from "../../enums/ShrinkValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigModel} from "./WidthConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
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
      if (dimensionsConfig.height && dimensionsConfig.height instanceof HeightConfigModel) {
        if (dimensionsConfig.height.fixed && dimensionsConfig.height.fixed instanceof FixedDimensioningConfigModel) {
          switch (dimensionsConfig.height.fixed.type) {
            case DimensionValueConfigType.Hardcoded:
              switch (dimensionsConfig.height.fixed.unit) {
                case DimensionUnitConfigType.REM:
                  compPropsObj.height = dimensionsConfig.height.fixed.value + 'rem'
                  break
                case DimensionUnitConfigType.PX:
                  compPropsObj.height = dimensionsConfig.height.fixed.value + 'px'
                  break
                case DimensionUnitConfigType.Percentage:
                  compPropsObj.height = dimensionsConfig.height.fixed.value + '%'
                  break
              }
              break
            case DimensionValueConfigType.Calculated:
              if (typeof dimensionsConfig.height.fixed.value === 'string')
                compPropsObj.calcHeight = dimensionsConfig.height.fixed.value
              break
          }
        } else if (dimensionsConfig.height.fixed && dimensionsConfig.height.fixed === FixedDimensionValueConfigType.Parent) {
          compPropsObj.height = ComponentDimensionValueConfigType.Parent
        }
        if (dimensionsConfig.height.dynamic && dimensionsConfig.height.dynamic instanceof DynamicDimensioningConfigModel) {
          if (dimensionsConfig.height.dynamic.grow && dimensionsConfig.height.dynamic.grow === GrowValueConfigType.Parent) {
            compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.height.dynamic.grow && !isNaN(dimensionsConfig.height.dynamic.grow)) {
            compPropsObj.grow = dimensionsConfig.height.dynamic.grow
          }
          if (dimensionsConfig.height.dynamic.shrink && dimensionsConfig.height.dynamic.shrink === ShrinkValueConfigType.Parent) {
            compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.height.dynamic.shrink && !isNaN(dimensionsConfig.height.dynamic.shrink)) {
            compPropsObj.shrink = dimensionsConfig.height.dynamic.shrink
          }
        } else if (dimensionsConfig.height.dynamic === DynamicDimensionValueConfigType.Parent) {
          compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
        }
      }
      if (dimensionsConfig.width && dimensionsConfig.width instanceof WidthConfigModel) {
        if (dimensionsConfig.width.fixed && dimensionsConfig.width.fixed instanceof FixedDimensioningConfigModel) {
          switch (dimensionsConfig.width.fixed.type) {
            case DimensionValueConfigType.Hardcoded:
              switch (dimensionsConfig.width.fixed.unit) {
                case DimensionUnitConfigType.REM:
                  compPropsObj.width = dimensionsConfig.width.fixed.value + 'rem'
                  break
                case DimensionUnitConfigType.PX:
                  compPropsObj.width = dimensionsConfig.width.fixed.value + 'px'
                  break
                case DimensionUnitConfigType.Percentage:
                  compPropsObj.width = dimensionsConfig.width.fixed.value + '%'
                  break
              }
              break
            case DimensionValueConfigType.Calculated:
              if (typeof dimensionsConfig.width.fixed.value === 'string')
                compPropsObj.calcWidth = dimensionsConfig.width.fixed.value
              break
          }
        } else if (dimensionsConfig.width.fixed && dimensionsConfig.width.fixed === FixedDimensionValueConfigType.Parent) {
          compPropsObj.width = ComponentDimensionValueConfigType.Parent
        }
        if (dimensionsConfig.width.dynamic && dimensionsConfig.width.dynamic instanceof DynamicDimensioningConfigModel) {
          if (dimensionsConfig.width.dynamic.grow && dimensionsConfig.width.dynamic.grow === GrowValueConfigType.Parent) {
            compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.width.dynamic.grow && !isNaN(dimensionsConfig.width.dynamic.grow)) {
            compPropsObj.grow = dimensionsConfig.width.dynamic.grow
          }
          if (dimensionsConfig.width.dynamic.shrink && dimensionsConfig.width.dynamic.shrink === ShrinkValueConfigType.Parent) {
            compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.width.dynamic.shrink && !isNaN(dimensionsConfig.width.dynamic.shrink)) {
            compPropsObj.shrink = dimensionsConfig.width.dynamic.shrink
          }
        } else if (dimensionsConfig.width.dynamic === DynamicDimensionValueConfigType.Parent) {
          compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
        }
      }
      return compPropsObj
    }
    return this.getRenderProperties(screenSize,mapToDimensioningRenderProperties)
  }
  getInstance(){
    return 'dimensions'
  }
}
