import {AttributesConfigPropsModel} from "./AttributesConfigPropsModel";
export class ResponsiveAttributesConfigModel {
  constructor(public smartphone:AttributesConfigPropsModel = new AttributesConfigPropsModel(),
              public portraitTablet?: AttributesConfigPropsModel,
              public tablet?:AttributesConfigPropsModel,
              public laptop?: AttributesConfigPropsModel,
              public highResolution?: AttributesConfigPropsModel) {
  }

  getInstance(){
    return 'attributes'
  }
}
