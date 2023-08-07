import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
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
NoValueType.NA,NoValueType.NA,NoValueType.NA,false,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,false,false,false,
        NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,new ConfirmationModel(IconType.Danger,
          'Zedde zeker??')
      )
    ),
    new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false,false)))
