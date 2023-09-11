import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {formLayout2} from "./formLayout2";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../../models/Dimensioning/DimensioningConfigModel";
import {HeightConfigModel} from "../../models/Dimensioning/HeightConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Dimensioning/WidthConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {multiSelect} from "./multiSelect";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
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
