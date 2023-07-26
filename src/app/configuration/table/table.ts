import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {conceptModel} from "../root/appDataModel";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {TableStylingType} from "../../enums/tableStylingType.enum";
import {NoValueType} from "../../enums/no_value_type";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsiveOverflowConfigModel} from "../../models/Overflow/self/ResponsiveOverflowConfigModel";
import {OverflowConfigPropsModel} from "../../models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {formLayout} from "../form1/formLayout";
import {formControl1} from "../form1/formControl1";
import {formControl2} from "../form1/formControl2";
import {formControl3} from "../form1/formControl3";
import {formControl4} from "../form1/formControl4";
import {buttons} from "../form1/buttons";

export const table = {
  name: 'table',
  type: ComponentType.Table,
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
    NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    TableStylingType.Gridlines,
    ResponsiveTableLayoutType.Stacked,
    400)),
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(HeightValueConfigType.NC, new WidthConfigPropsModel(
    new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,100,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC
  ))),
  attributes:new ResponsiveAttributesConfigModel(
      new AttributesConfigPropsModel(NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
        NoValueType.NA,NoValueType.NA,NoValueType.NA,
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
              NoValueType.NA,
              {
                name:'filter-form',
                type:ComponentType.Form,
                attributes: new ResponsiveAttributesConfigModel(
                  new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA,NoValueType.NA, NoValueType.NA, NoValueType.NA,NoValueType.NA,
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
          ),new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false,false))),NoValueType.NA,'Geen producten aanwezig.',true,5,[5,10,15],NoValueType.NA)),
  //overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.NA, OverflowValueConfigType.Auto)),
  // todo deep copy methode toevoegen wegens reference issues die voorlopig geen gevolgen hebben maar goed
  data:conceptModel
}
