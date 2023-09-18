import {StylingConfigModel} from "./StylingConfigModel";
import {NoValueType} from "../../enums/no_value_type";
import {StylingRenderModel} from "./StylingRenderModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
export class ResponsiveStylingConfigModel {
  constructor(public smartphone:StylingConfigModel,
              public portraitTablet?: StylingConfigModel,
              public tablet?:StylingConfigModel,
              public laptop?: StylingConfigModel,
              public highResolution?: StylingConfigModel) {
  }
  public getInstance(){
    return 'styling'
  }
  public getStylingRenderProperties(componentName: string, stateModel: ResponsiveStylingConfigModel, screenSize: number): StylingRenderModel {
    const translateToStylingComponentProps =
      (stylingConfig: StylingConfigModel): StylingRenderModel => {
        return new StylingRenderModel(
          stylingConfig.backgroundColor,
          stylingConfig.border,
          stylingConfig.fontWeight,
          stylingConfig.textColor,
          stylingConfig.textDecoration,
          stylingConfig.fontSize,
          stylingConfig.fontStyle,
          stylingConfig.tableStyle,
          stylingConfig.responsiveTableLayout,
          stylingConfig.tableBreakpoint,
          stylingConfig.buttonSize,
          stylingConfig.buttonMeaning,
          stylingConfig.buttonAppearance,
          stylingConfig.buttonForm,
          stylingConfig.iconSize,
          stylingConfig.iconMeaning
        )
      }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToStylingComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveStylingConfigModel and screen ' + ScreenSize[screenSize])
  }
}
