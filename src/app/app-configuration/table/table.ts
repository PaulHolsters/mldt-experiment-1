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
import {buttons} from "../form1/buttons";
import {IconType} from "../../enums/iconType.enum";
import {ButtonSizeType} from "../../enums/buttonSizeType.enum";
import {ButtonAppearanceType} from "../../enums/buttonAppearanceType.enum";
import {PositioningConfigPropsModel} from "../../models/Positioning/self/PositioningConfigPropsModel";
import {DisplayType} from "../../enums/displayType.enum";
import {ResponsivePositioningConfigModel} from "../../models/Positioning/self/ResponsivePositioningConfigModel";

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
        // todo dit is het attribuut filterComponent (je zou evengoed content kunnen nemen en deze prop dus schrappen wegens niet generiek)
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
              // todo aanpassen methodes die gebruik maken van instanceof ComponentModel
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
          ),
          new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false,false))),
        NoValueType.NA,
        'Geen producten aanwezig.',
        true,
        5,
        [5,10,15],
        NoValueType.NA,
        // todo de methodes verwachten hier één component niet zoals bij children een array met componenten
        // de eerste methode wil indien het gaat om children!
        [
          {name:'sort-h1',type:ComponentType.Button,attributes:new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
            NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,IconType.Sort,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,false,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA
            )),visibility:new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
          styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
            NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
            NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,undefined,
            ButtonSizeType.Small,undefined,ButtonAppearanceType.InnerOnly,undefined
          )),
            position:new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))},
          {name:'sort-h2',
            type:ComponentType.Button,
            attributes:new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,IconType.Sort,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,false,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA
            )),
            visibility:new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
            styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,undefined,
              ButtonSizeType.Small,undefined,ButtonAppearanceType.InnerOnly,undefined
            )),
            position:new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))},
          {name:'sort-h3',
            type:ComponentType.Button,
            attributes:new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,IconType.Sort,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,false,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA
            )),
            visibility:new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
            styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,undefined,
              ButtonSizeType.Small,undefined,ButtonAppearanceType.InnerOnly,undefined
            )),
            position:new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))},
          {name:'sort-h4',
            type:ComponentType.Button,
            attributes:new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,IconType.Sort,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,false,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA
            )),
            visibility:new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
            styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
              NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,undefined,
              ButtonSizeType.Small,undefined,ButtonAppearanceType.InnerOnly,undefined
            )),
            position:new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))}
        ])),
  //overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.NA, OverflowValueConfigType.Auto)),
  // todo deep copy methode toevoegen wegens reference issues die voorlopig geen gevolgen hebben maar goed
  data:conceptModel
}
