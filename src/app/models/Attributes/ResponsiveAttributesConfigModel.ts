import {AttributesConfigPropsModel} from "./AttributesConfigPropsModel";
import {ComponentModel} from "../ComponentModel";
export class ResponsiveAttributesConfigModel {
  constructor(public smartphone:AttributesConfigPropsModel = new AttributesConfigPropsModel(),
              public portraitTablet?: AttributesConfigPropsModel,
              public tablet?:AttributesConfigPropsModel,
              public laptop?: AttributesConfigPropsModel,
              public highResolution?: AttributesConfigPropsModel) {
  }
  public getComponents():ComponentModel[]{
    return []
  }
}
