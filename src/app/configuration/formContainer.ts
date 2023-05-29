import {ComponentModel} from "../models/ComponentModel";
import {ComponentType} from "../enums/componentTypes.enum";
import {formLayout} from "./formLayout";
import {ResponsiveDimensioningConfigModel} from "../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../models/Dimensioning/self/HeightConfigPropsModel";
import {FixedDimensioningConfigModel} from "../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigPropsModel} from "../models/Dimensioning/self/WidthConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../models/Visibility/ResponsiveVisibilityConfigModel";
import {formControl1} from "./formControl1";
import {formControl2} from "./formControl2";
import {ResponsiveAttributesConfigModel} from "../models/Attributes/ResponsiveAttributesConfigModel";
import {VisibilityConfigPropsModel} from "../models/Visibility/VisibilityConfigPropsModel";
import {formData} from "./formDataModel";

export const formContainer = new ComponentModel(
  'form-container',
  ComponentType.Container,
  formLayout,
  undefined,
  new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
    new HeightConfigPropsModel(
      new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
    ),
    new WidthConfigPropsModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  undefined,
  new ResponsiveVisibilityConfigModel(),
  undefined,
  [
    formControl1,
    formControl2,
    {
      name:'submitbtn',
      type:ComponentType.Button,
      attributes: new ResponsiveAttributesConfigModel({
        label:'Bewaar'
      }),
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
    }
  ],
  undefined,
  formData
)
