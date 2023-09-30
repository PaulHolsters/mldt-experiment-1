import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {formLayout2} from "./formLayout2";
import {ResponsiveDimensioningConfigModel} from "../../models/Size/ResponsiveSizeConfigModel";
import {DimensioningConfigModel} from "../../models/Size/IconStylingConfigModel";
import {HeightConfigModel} from "../../models/Size/HeightConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
import {DimensionValueConfigType} from "../../enums/sizeValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Size/WidthConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveSpacingConfigModel";
import {multiSelect} from "./multiSelect";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/SpacingConfigModel";
import {formData2} from "./formDataModel2";
import {productSpec} from "./product-spec";

export const formContainer2 = new ComponentModel(
  'form-container2',
  ComponentType.Container,
  formLayout2,
  undefined,
  new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    new HeightConfigModel(
      new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 50, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
    ),
    new WidthConfigModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  undefined,
  new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  undefined,
  [
    productSpec,
    {
      name:'submitForm2',
      type:ComponentType.Button,
      attributes: new ResponsiveAttributesConfigModel({
        label:'Bewaar'
      }),
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
    }
  ],
  undefined,
  formData2
)
