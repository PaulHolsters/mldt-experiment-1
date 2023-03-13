import {StylingConfigPropsModel} from "./StylingConfigPropsModel";
export class ResponsiveStylingConfigModel {
  constructor(public smartphone:StylingConfigPropsModel = new StylingConfigPropsModel(),
              public portraitTablet?: StylingConfigPropsModel,
              public tablet?:StylingConfigPropsModel,
              public laptop?: StylingConfigPropsModel,
              public highResolution?: StylingConfigPropsModel) {
  }
}
