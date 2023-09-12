import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {ConfirmationModel} from "../../models/ConfirmationModel";
import {IconType} from "../../enums/iconType.enum";

export const confirmation =
  new ComponentModel('confirmation popup',ComponentType.ConfirmPopup,undefined,undefined,undefined,
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
false,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,false,false,false,NoValueType.NA,
        NoValueType.NA,new ConfirmationModel(IconType.Danger,
          'Zedde zeker??')
      )
    ),
    new ResponsiveVisibilityConfigModel(new VisibilityConfigModel(false,false)))
