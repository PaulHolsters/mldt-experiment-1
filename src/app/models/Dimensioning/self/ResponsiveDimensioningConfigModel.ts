import {DimensioningConfigPropsModel} from "./DimensioningConfigPropsModel";
export class ResponsiveDimensioningConfigModel {
  constructor(public smartphone:DimensioningConfigPropsModel,
              public portraitTablet?: DimensioningConfigPropsModel,
              public tablet?:DimensioningConfigPropsModel,
              public laptop?: DimensioningConfigPropsModel,
              public highResolution?: DimensioningConfigPropsModel) {
  }
  getInstance(){
    return 'dimensions'
  }
}
