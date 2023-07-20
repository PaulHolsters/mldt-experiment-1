import {StylingConfigPropsModel} from "./StylingConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
export class ResponsiveStylingConfigModel {
  constructor(public smartphone:StylingConfigPropsModel,
              public portraitTablet?: StylingConfigPropsModel,
              public tablet?:StylingConfigPropsModel,
              public laptop?: StylingConfigPropsModel,
              public highResolution?: StylingConfigPropsModel) {
  }
  public getInstance(){
    return 'styling'
  }
}
