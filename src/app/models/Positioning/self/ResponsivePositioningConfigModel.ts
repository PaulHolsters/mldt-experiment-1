import {PositioningConfigPropsModel} from "./PositioningConfigPropsModel";
export class ResponsivePositioningConfigModel {
  constructor(public smartphone:PositioningConfigPropsModel=new PositioningConfigPropsModel(),
              public portraitTablet?: PositioningConfigPropsModel,
              public tablet?:PositioningConfigPropsModel,
              public laptop?: PositioningConfigPropsModel,
              public highResolution?: PositioningConfigPropsModel) {
  }
  getInstance(){
    return 'position'
  }
}
