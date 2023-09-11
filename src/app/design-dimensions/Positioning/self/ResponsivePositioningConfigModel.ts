import {PositioningConfigModel} from "./PositioningConfigModel";
import {PositioningRenderModel} from "./PositioningRenderModel";
import {ScreenSize} from "../../../enums/screenSizes.enum";
export class ResponsivePositioningConfigModel {
  constructor(public smartphone:PositioningConfigModel=new PositioningConfigModel(),
              public portraitTablet?: PositioningConfigModel,
              public tablet?:PositioningConfigModel,
              public laptop?: PositioningConfigModel,
              public highResolution?: PositioningConfigModel) {
  }
  getInstance(){
    return 'position'
  }
  public getPositionRenderProperties(screenSize: number): PositioningRenderModel {
    const translateToPositioningComponentProps =
      (positionConfig: PositioningConfigModel): PositioningRenderModel => {
        return new PositioningRenderModel(
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Top || positionConfig === CrossAxisHorizontalPositioningConfigType.Left,
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Center || positionConfig === CrossAxisHorizontalPositioningConfigType.Center,
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Bottom || positionConfig === CrossAxisHorizontalPositioningConfigType.Right,
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Baseline || positionConfig === CrossAxisHorizontalPositioningConfigType.Baseline,
          positionConfig.display)
      }
    if (this.hasScreenSizeProperty(stateModel, 'selfAlign') || this.hasScreenSizeProperty(stateModel, 'display')) {
      let lastScreenSize = screenSize
      const stateModelObj = Object.create(stateModel)
      while (lastScreenSize >= 0) {
        if (stateModelObj[ScreenSize[lastScreenSize]]) {
          return translateToPositioningComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
        }
        lastScreenSize--
      }
      throw new Error('No screensize configuration was found for given ResponsivePositioningConfigModel and screen ' + ScreenSize[screenSize])
    } else return new PositioningRenderModel()
  }
}
