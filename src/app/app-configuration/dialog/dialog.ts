import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
export const filterDialog =         // todo dit is het attribuut filterComponent (je zou evengoed content kunnen nemen en deze prop dus schrappen wegens niet generiek)
  new ComponentModel('filter-dialog',ComponentType.Dialog,undefined,undefined,undefined,
    undefined,
    new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false,false)))

/* toevoegen aan contentInjector
* {
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
* */
