import {ChildPositioningConfigPropsModel} from "./ChildPositioningConfigPropsModel";
export class ResponsiveChildPositioningConfigModel {
  constructor(
                public smartphone:ChildPositioningConfigPropsModel = new ChildPositioningConfigPropsModel(),
                public portraitTablet?: ChildPositioningConfigPropsModel,
                public tablet?: ChildPositioningConfigPropsModel,
                public laptop?: ChildPositioningConfigPropsModel,
                public highResolution?: ChildPositioningConfigPropsModel) {
  }
}
