import {ScreenSize} from "../enums/screenSizes.enum";
import {
  ConfigModelType
} from "../types/union-types";

export class ResponsiveConfigModel
<T extends ConfigModelType>{
  protected getRenderProperties(screenSize:ScreenSize,mapping:(configModelType:T)=>RenderModelType<T>):RenderModelType<T>{
    let lastScreenSize:ScreenSize = screenSize
    while (lastScreenSize >= 0) {
      if (Reflect.has(this,ScreenSize[lastScreenSize])) {
        return mapping(Reflect.get(this,ScreenSize[lastScreenSize]))
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveContainerChildLayoutConfigModel and screen ' + ScreenSize[screenSize])
  }

  protected hasScreenSizeProperty(property: string): boolean {
    let lastScreenSize = ScreenSize.highResolution
    while (lastScreenSize >= 0) {
      if (Reflect.has(this,ScreenSize[lastScreenSize]) && Reflect.get(this,ScreenSize[lastScreenSize])){
        return true
      }
      lastScreenSize--
    }
    return false
  }
}
