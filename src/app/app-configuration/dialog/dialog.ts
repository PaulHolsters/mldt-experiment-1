import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveSpacingConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/SpacingConfigModel";
export const filterDialog =         // todo dit is het attribuut filterComponent (je zou evengoed content kunnen nemen en deze prop dus schrappen wegens niet generiek)
  new ComponentModel('filter-dialog',ComponentType.Dialog,undefined,undefined,undefined,
    undefined,
    new ResponsiveVisibilityConfigModel(new VisibilityConfigModel(false,false)))

/* todo toevoegen aan contentInjector
* {
          name:'filter-form',
          type:ComponentType.Form,
          attributes: new ResponsiveTableConfigModel(
            new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA,NoValueType.NA, NoValueType.NA, NoValueType.NA,
              NoValueType.NA, NoValueType.NA, NoValueType.NA,
              new ComponentModel(
                'filter-form-container',
                ComponentType.Multiselect,
                formLayout,
                undefined,
                new ResponsiveSizeConfigModel(new DimensioningConfigPropsModel(
                  new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,100,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC),
                  new WidthConfigPropsModel(new FixedDimensioningConfigModel(
                    DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
                  ), DynamicDimensionValueConfigType.NC)
                )),
                undefined,
                new ResponsiveSpacingConfigModel(new VisibilityConfigPropsModel()),
                undefined,
                [
                  buttons
                ]))
          ),
          visibility: new ResponsiveSpacingConfigModel(new VisibilityConfigPropsModel()),
          // todo verhinderen dat gebruikers een kleine hoogte kunnen meegeven terwijl auto niet opstaat omdat de multiselect dan niet werkt
          overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto,OverflowValueConfigType.NC)),
          dimensions: new ResponsiveSizeConfigModel(
            new DimensioningConfigPropsModel(
              new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,20,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC),
              new WidthConfigPropsModel(new FixedDimensioningConfigModel(
                DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
              ), DynamicDimensionValueConfigType.NC)
            ))
        }
* */
