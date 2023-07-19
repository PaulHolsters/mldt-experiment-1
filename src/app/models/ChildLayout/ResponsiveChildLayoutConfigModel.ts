import {ChildLayoutConfigPropsModel} from "./ChildLayoutConfigPropsModel";
export class ResponsiveChildLayoutConfigModel {
  constructor(public smartphone:ChildLayoutConfigPropsModel,
              public portraitTablet?: ChildLayoutConfigPropsModel,
              public tablet?:ChildLayoutConfigPropsModel,
              public laptop?: ChildLayoutConfigPropsModel,
              public highResolution?: ChildLayoutConfigPropsModel) {
  }
  getInstance(){
    return 'childLayout'
  }
}
