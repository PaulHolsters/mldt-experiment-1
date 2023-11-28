import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveSpacingConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/SpacingConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../../models/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ContentInjectionConfigPropsModel} from "../../models/ContentInjection/ContentInjectionConfigPropsModel";
import {dialogContainer} from "../form-edit-product/dialog-container";

export const dialogEditProduct =
  new ComponentModel('edit-product-dialog',
    ComponentType.Dialog,undefined,undefined,undefined,
    new ResponsiveAttributesConfigModel(
      new AttributesConfigPropsModel(
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        'Aanpassen product'
      )
    ),
    new ResponsiveVisibilityConfigModel(new VisibilityConfigModel(false,false)),
    undefined,
    undefined,
    undefined,
    undefined,
    new ResponsiveContentInjectionConfigModel(new ContentInjectionConfigPropsModel(NoValueType.NA,NoValueType.NA,dialogContainer))
  )
