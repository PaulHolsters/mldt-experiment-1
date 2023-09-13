import {ChildLayoutConfigModel} from "./ChildLayoutConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
import {ChildLayoutRenderModel} from "./ChildLayoutRenderModel";
import {ChildPropertiesRenderModel} from "./ChildPropertiesRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ParentRenderPropertiesModel} from "./ParentRenderPropertiesModel";
import {RowLayoutConfigModel} from "./RowLayoutConfigModel";
import {HorizontalRowLayoutConfigType} from "../../enums/HorizontalRowLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {VerticalColumnLayoutConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";
import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";

export class ResponsiveChildLayoutConfigModel extends ResponsiveConfigModel<ResponsiveChildLayoutConfigModel>{
  public smartphone:ChildLayoutConfigModel = new ChildLayoutConfigModel()
  public portraitTablet: ChildLayoutConfigModel|undefined = undefined
  public tablet:ChildLayoutConfigModel|undefined= undefined
  public laptop: ChildLayoutConfigModel|undefined= undefined
  public highResolution: ChildLayoutConfigModel|undefined= undefined
  constructor() {
    super()
  }
  setChildLayout(screenSize:ScreenSize,model:ChildLayoutConfigModel){
    Reflect.set(this,ScreenSize[screenSize],model)
  }
  getInstance(){
    return 'childLayout'
  }
  getChildLayoutRenderProperties(screenSize: number): ChildLayoutRenderModel {
    const mapToChildLayoutRenderProperties = (childLayoutConfig: ChildLayoutConfigModel): ChildLayoutRenderModel => {
      const parentPropsObj = new ParentRenderPropertiesModel()
      const childPropsObj = new ChildPropertiesRenderModel()
      parentPropsObj.wrap = childLayoutConfig.layout.wrap
      if(childLayoutConfig.layout instanceof RowLayoutConfigModel){
        parentPropsObj.row = true
        parentPropsObj.column = false
        parentPropsObj.justifyContentStart = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalRowLayoutConfigType.Left
        parentPropsObj.justifyContentCenter = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalRowLayoutConfigType.Center
        parentPropsObj.justifyContentEnd = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalRowLayoutConfigType.Right
        parentPropsObj.justifyContentEvenly = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalRowLayoutConfigType.Evenly
        parentPropsObj.justifyContentBetween = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalRowLayoutConfigType.Between
        parentPropsObj.justifyContentAround = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalRowLayoutConfigType.Around
        parentPropsObj.alignItemsStart = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalRowLayoutConfigType.Top
        parentPropsObj.alignItemsCenter = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalRowLayoutConfigType.Center
        parentPropsObj.alignItemsEnd = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalRowLayoutConfigType.Bottom
        parentPropsObj.alignItemsBaseline = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalRowLayoutConfigType.Baseline
        parentPropsObj.alignItemsStretch = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalRowLayoutConfigType.Stretch
      } else{
        parentPropsObj.row = false
        parentPropsObj.column = true
        parentPropsObj.justifyContentStart = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalColumnLayoutConfigType.Top
        parentPropsObj.justifyContentCenter = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalColumnLayoutConfigType.Center
        parentPropsObj.justifyContentEnd = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalColumnLayoutConfigType.Bottom
        parentPropsObj.justifyContentEvenly = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalColumnLayoutConfigType.Evenly
        parentPropsObj.justifyContentBetween = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalColumnLayoutConfigType.Between
        parentPropsObj.justifyContentAround = childLayoutConfig.layout.verticalLayoutOfChildren === VerticalColumnLayoutConfigType.Around
        parentPropsObj.alignItemsStart = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalColumnLayoutConfigType.Left
        parentPropsObj.alignItemsCenter = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalColumnLayoutConfigType.Center
        parentPropsObj.alignItemsEnd = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalColumnLayoutConfigType.Right
        parentPropsObj.alignItemsBaseline = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalColumnLayoutConfigType.Baseline
        parentPropsObj.alignItemsStretch = childLayoutConfig.layout.horizontalLayoutOfChildren === HorizontalColumnLayoutConfigType.Stretch
      }
      if(childLayoutConfig.childConfig){
        // todo fix opsplitsing in deze mapping
        if(childLayoutConfig.childConfig.dimensions){
          const dimensioningRenderModel = childLayoutConfig.childConfig.dimensions.getDimensionsRenderProperties(screenSize)
          childPropsObj.calcHeight = dimensioningRenderModel.calcHeight
          childPropsObj.height = dimensioningRenderModel.height
          childPropsObj.calcWidth = dimensioningRenderModel.calcWidth
          childPropsObj.width = dimensioningRenderModel.width
          childPropsObj.grow = dimensioningRenderModel.grow
          childPropsObj.shrink = dimensioningRenderModel.shrink
        }
        if(childLayoutConfig.childConfig.visibility){
          const visibilityRenderModel = childLayoutConfig.childConfig.visibility.getVisibilityRenderProperties(screenSize)
          childPropsObj.holdSpace = visibilityRenderModel.holdSpace
          childPropsObj.visible = visibilityRenderModel.visible
        }
      }
      return new ChildLayoutRenderModel(parentPropsObj, childPropsObj)
    }
    return this.getRenderProperties(screenSize,mapToChildLayoutRenderProperties)
  }
}
