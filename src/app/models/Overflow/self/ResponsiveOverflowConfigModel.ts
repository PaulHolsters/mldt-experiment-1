import {OverflowConfigPropsModel} from "./OverflowConfigPropsModel";
export class ResponsiveOverflowConfigModel {
  constructor(public smartphone:OverflowConfigPropsModel,
              public portraitTablet?: OverflowConfigPropsModel,
              public tablet?:OverflowConfigPropsModel,
              public laptop?: OverflowConfigPropsModel,
              public highResolution?: OverflowConfigPropsModel) {
  }
  getInstance(){
    return 'overflow'
  }
}
