import {VisibilityConfigPropsModel} from "./VisibilityConfigPropsModel";
export class ResponsiveVisibilityConfigModel {
  constructor(public smartphone:VisibilityConfigPropsModel = new VisibilityConfigPropsModel(),
              public portraitTablet?: VisibilityConfigPropsModel,
              public tablet?:VisibilityConfigPropsModel,
              public laptop?: VisibilityConfigPropsModel,
              public highResolution?: VisibilityConfigPropsModel) {
  }
}
