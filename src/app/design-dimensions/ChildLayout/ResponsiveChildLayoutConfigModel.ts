import {ChildLayoutConfigModel} from "./ChildLayoutConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
import {ChildLayoutRenderModel} from "./ChildLayoutRenderModel";
import {ChildPropertiesRenderModel} from "./ChildPropertiesRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ParentRenderPropertiesModel} from "./ParentRenderPropertiesModel";

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
    // diegene die deze methode aanroept moet ervoor zorgen dat de properties effectief naar de bedoelde childComponents gaan, indien van toepassing
    const mapToChildLayoutRenderProperties = (childLayoutConfig: ChildLayoutConfigModel): ChildLayoutRenderModel => {
      const parentPropsObj = new ParentRenderPropertiesModel()
      const childPropsObj = new ChildPropertiesRenderModel()
      // todo doe nu is die omzetting!
      Object.entries(childLayoutConfig.layout).forEach(([k]) => {
        const layout = childLayoutConfig.layout.getComponentProperties(k, childLayoutConfig.verticalLayout)
        if (layout.parent) {
          parentPropsObj.setProperties(layout.parent)
        }
        if (layout.children) {
          childPropsObj.setProperties(layout.children)
        }
      })
      return new ChildLayoutRenderModel(parentPropsObj, childPropsObj)
    }
    return this.getRenderProperties(screenSize,mapToChildLayoutRenderProperties)
  }
}
