import {ChildLayoutConfigModel} from "./ChildLayoutConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
export class ResponsiveChildLayoutConfigModel {
  public smartphone:ChildLayoutConfigModel = new ChildLayoutConfigModel()
  public portraitTablet: ChildLayoutConfigModel|undefined = undefined
  public tablet:ChildLayoutConfigModel|undefined= undefined
  public laptop: ChildLayoutConfigModel|undefined= undefined
  public highResolution: ChildLayoutConfigModel|undefined= undefined
  constructor() {
  }
  setChildLayout(screensize:ScreenSize){
    // todo
  }
  getInstance(){
    return 'childLayout'
  }
}
