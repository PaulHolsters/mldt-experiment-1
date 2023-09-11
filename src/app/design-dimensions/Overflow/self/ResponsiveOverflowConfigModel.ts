import {OverflowConfigModel} from "./OverflowConfigModel";
import {OverflowRenderModel} from "./OverflowRenderModel";
import {OverflowValueConfigType} from "../../../enums/overflowValueConfigTypes.enum";
import {ScreenSize} from "../../../enums/screenSizes.enum";
import {OverflowChildConfigPropsModel} from "../children/OverflowChildConfigPropsModel";
export class ResponsiveOverflowConfigModel {
  constructor(public smartphone:OverflowConfigModel,
              public portraitTablet?: OverflowConfigModel,
              public tablet?:OverflowConfigModel,
              public laptop?: OverflowConfigModel,
              public highResolution?: OverflowConfigModel) {
  }
  getInstance(){
    return 'overflow'
  }
  public getOverflowChildRenderProperties(componentName: string, stateModel: ResponsiveOverflowConfigModel, screenSize: number): OverflowRenderModel {
    const translateToOverflowComponentProps =
      (overflowConfig: OverflowChildConfigPropsModel): OverflowRenderModel => {
        return new OverflowRenderModel(
          overflowConfig.overflow === OverflowValueConfigType.Scroll,
          overflowConfig.overflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Hidden,
          overflowConfig.verticalOverflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Scroll,
          overflowConfig.verticalOverflow === OverflowValueConfigType.Scroll)
      }
    if (this.hasScreenSizeProperty(stateModel, 'childOverflowConfig')) {
      let lastScreenSize = screenSize
      const stateModelObj = Object.create(stateModel)
      while (lastScreenSize >= 0) {
        if (stateModelObj[ScreenSize[lastScreenSize]]) {
          return translateToOverflowComponentProps(stateModelObj[ScreenSize[lastScreenSize]].childOverflowConfig)
        }
        lastScreenSize--
      }
      throw new Error('No screensize configuration was found for given ResponsiveOverflowConfigModel and screen ' + ScreenSize[screenSize])
    } else return new OverflowRenderModel()
  }
  public getOverflowRenderProperties(screenSize: number): OverflowRenderModel {
    const translateToOverflowComponentProps =
      (overflowConfig: OverflowConfigModel): OverflowRenderModel => {
        return new OverflowRenderModel(
          overflowConfig.overflow === OverflowValueConfigType.Auto,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Auto,
          overflowConfig.overflow === OverflowValueConfigType.Scroll,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Scroll,
          overflowConfig.overflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Hidden)
      }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToOverflowComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveOverflowConfigModel and screen ' + ScreenSize[screenSize])
  }


}
