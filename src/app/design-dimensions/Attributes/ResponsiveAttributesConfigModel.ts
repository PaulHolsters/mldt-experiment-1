import {AttributesConfigModel} from "./AttributesConfigModel";
import {AttributesRenderModel} from "./AttributesRenderModel";
import {NoValueType} from "../../enums/no_value_type";
import {ComponentModel} from "../ComponentModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
export class ResponsiveAttributesConfigModel extends ResponsiveConfigModel<> {
  public smartphone:AttributesConfigModel = new AttributesConfigModel()
  public portraitTablet?: AttributesConfigModel|undefined=undefined
  public tablet?:AttributesConfigModel|undefined=undefined
  public laptop?: AttributesConfigModel|undefined=undefined
  public highResolution?: AttributesConfigModel|undefined=undefined
  constructor() {
    super()
  }

  getInstance(){
    return 'attributes'
  }
  public getAttributesRenderProperties(screenSize: number): AttributesRenderModel {
    const translateToAttributesComponentProps = (attributesConfig: AttributesConfigModel): AttributesRenderModel => {
      const compPropsObj = new AttributesRenderModel(
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        false,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        false,
        false,
        false,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA
      )
      Object.entries(attributesConfig).forEach(([k, v]) => {
        compPropsObj.setProperty(k, v)
      })
      let copy = Object.create(compPropsObj)
      Object.entries(compPropsObj).forEach(([k, v]) => {
        if (v !== undefined && (v instanceof Array || typeof v !== 'object')) copy[k] = v
        else if (v && typeof v === 'object') {
          copy[k] = new ComponentModel(v.name, v.type, v.childLayout, v.position, v.dimensions, v.attributes, v.visibility, v.overflow, v.children, v.styling, v.data)
        }
      })
      return copy
    }
    this.getRenderProperties(screenSize,translateToAttributesComponentProps)
  }
}
