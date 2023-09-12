import {ChildLayoutConfigModel} from "./ChildLayoutConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
import {ChildLayoutRenderModel} from "./ChildLayoutRenderModel";
import {ParentComponentPropsModel} from "./ParentRenderPropertiesModel";
import {ChildRenderPropertiesModel} from "./ChildRenderPropertiesModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
export class ResponsiveChildLayoutConfigModel extends ResponsiveConfigModel<ResponsiveChildLayoutConfigModel>{
  public smartphone:ChildLayoutConfigModel = new ChildLayoutConfigModel()
  public portraitTablet: ChildLayoutConfigModel|undefined = undefined
  public tablet:ChildLayoutConfigModel|undefined= undefined
  public laptop: ChildLayoutConfigModel|undefined= undefined
  public highResolution: ChildLayoutConfigModel|undefined= undefined
  constructor() {
    super()
  }
  setChildLayout(screensize:ScreenSize,model:ChildLayoutConfigModel){
    // todo
  }
  getInstance(){
    return 'childLayout'
  }
  getChildLayoutRenderProperties(screenSize: number): ChildLayoutRenderModel {
    // diegene die deze methode aanroept moet ervoor zorgen dat de properties effectief naar de bedoelde childComponents gaan, indien van toepassing
    const mapToChildLayoutRenderProperties = (childLayoutConfig: ChildLayoutConfigModel): ChildLayoutRenderModel => {
      const parentPropsObj = new ParentComponentPropsModel()
      const childPropsObj = new ChildRenderPropertiesModel()
      Object.entries(childLayoutConfig.horizontalLayout).forEach(([k]) => {
        const layout = childLayoutConfig.horizontalLayout.getComponentProperties(k, childLayoutConfig.verticalLayout)
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
