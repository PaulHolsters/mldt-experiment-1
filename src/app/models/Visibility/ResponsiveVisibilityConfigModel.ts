import {VisibilityConfigPropsModel} from "./VisibilityConfigPropsModel";
export class ResponsiveVisibilityConfigModel {
  constructor(public smartphone:VisibilityConfigPropsModel = new VisibilityConfigPropsModel(),
              public portraitTablet: VisibilityConfigPropsModel|undefined,
              public tablet:VisibilityConfigPropsModel|undefined,
              public laptop: VisibilityConfigPropsModel|undefined,
              public highResolution: VisibilityConfigPropsModel|undefined) {
  }
}
