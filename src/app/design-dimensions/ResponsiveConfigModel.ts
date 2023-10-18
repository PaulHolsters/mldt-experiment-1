import {ScreenSize} from "../enums/screenSizes.enum";
import {ConfigModelType} from "../types/union-types";
import {NoValueType} from "../enums/NoValueTypes.enum";

export class ResponsiveConfigModel<T extends ConfigModelType>{
  protected getConfigModel(screenSize:ScreenSize):T{
    // todo de Reflect methodes maken dat TypeScript niet kan garanderen dat er effectief iets als T teruggegeven wordt
    let lastScreenSize:ScreenSize = screenSize
    while (lastScreenSize >= 0) {
      if (Reflect.has(this,ScreenSize[lastScreenSize]) && !(Reflect.get(this, ScreenSize[lastScreenSize])===NoValueType.CALCULATED_BY_ENGINE)) {
        return Reflect.get(this, ScreenSize[lastScreenSize])
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
