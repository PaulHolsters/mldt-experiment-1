import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {formEditProduct} from "../form-edit-product/form";

export const dialogEditProduct =         // todo dit is het attribuut filterComponent (je zou evengoed content kunnen nemen en deze prop dus schrappen wegens niet generiek)
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
    new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false,false)))
