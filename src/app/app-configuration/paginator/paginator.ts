import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";

export const paginator =
  new ComponentModel('paginator',ComponentType.Paginator,undefined,undefined,undefined,
    new ResponsiveAttributesConfigModel(
      new AttributesConfigPropsModel(
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        false,
        10,
        [5,15,100],
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        true,
        false,
        true,
        undefined,
        100
      )
    ),
    new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(true,false)))
