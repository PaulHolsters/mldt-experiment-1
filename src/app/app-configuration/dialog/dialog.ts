import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {formLayout} from "../form1/formLayout";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {buttons} from "../form1/buttons";
import {ResponsiveOverflowConfigModel} from "../../models/Overflow/self/ResponsiveOverflowConfigModel";
import {OverflowConfigPropsModel} from "../../models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";

export const dialog =         // todo dit is het attribuut filterComponent (je zou evengoed content kunnen nemen en deze prop dus schrappen wegens niet generiek)
  new ComponentModel('filter-dialog',ComponentType.Dialog,undefined,undefined,undefined,
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
        // todo aanpassen methodes die gebruik maken van instanceof ComponentModel
        {
          name:'filter-form',
          type:ComponentType.Form,
          attributes: new ResponsiveAttributesConfigModel(
            new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA,NoValueType.NA, NoValueType.NA, NoValueType.NA,
              NoValueType.NA, NoValueType.NA, NoValueType.NA,
              new ComponentModel(
                'filter-form-container',
                ComponentType.Container,
                formLayout,
                undefined,
                new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
                  new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,100,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC),
                  new WidthConfigPropsModel(new FixedDimensioningConfigModel(
                    DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
                  ), DynamicDimensionValueConfigType.NC)
                )),
                undefined,
                new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
                undefined,
                [
                  buttons
                ]))
          ),
          visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
          // todo verhinderen dat gebruikers een kleine hoogte kunnen meegeven terwijl auto niet opstaat omdat de multiselect dan niet werkt
          overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto,OverflowValueConfigType.NC)),
          dimensions: new ResponsiveDimensioningConfigModel(
            new DimensioningConfigPropsModel(
              new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,20,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC),
              new WidthConfigPropsModel(new FixedDimensioningConfigModel(
                DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
              ), DynamicDimensionValueConfigType.NC)
            ))
        }
      )
    ),
    new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false,false)))
