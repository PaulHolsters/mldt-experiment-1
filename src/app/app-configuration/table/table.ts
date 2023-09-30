import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Size/ResponsiveSizeConfigModel";
import {DimensioningConfigModel} from "../../models/Size/IconStylingConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveSpacingConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/SpacingConfigModel";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Size/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
import {DimensionValueConfigType} from "../../enums/sizeValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {TableStylingType} from "../../enums/tableGridType.enum";
import {NoValueType} from "../../enums/no_value_type";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../../models/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ContentInjectionConfigPropsModel} from "../../models/ContentInjection/ContentInjectionConfigPropsModel";
import {TableColumnModel} from "../../models/TableColumnModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsivePositioningConfigModel} from "../../models/LayoutOverride/self/ResponsiveLayoutOverrideConfigModel";
import {PositioningConfigPropsModel} from "../../models/LayoutOverride/self/PositioningConfigPropsModel";
import {DisplayType} from "../../enums/displayType.enum";
import {IconMeaningType} from "../../enums/iconMeaningType.enum";
import {ButtonSizeType} from "../../enums/buttonSizeType.enum";
import {ButtonAppearanceType} from "../../enums/buttonStylingType.enum";
import {IconSizeType} from "../../enums/iconSizeType.enum";
import {IconType} from "../../enums/iconType.enum";

export const table = {
  name: 'table',
  type: ComponentType.Table,
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
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
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(HeightValueConfigType.NC, new WidthConfigModel(
    new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
  ))),
  attributes: new ResponsiveAttributesConfigModel(
    new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,
      'Geen producten aanwezig.',
      true,
      [{field:'price',header:'Prijs',sort:false,
        filter:false, // filtering is altijd custom
        customSort:false,
        anchor:NoValueType.NA},{field:'name',header:'Naam',sort:false,
        filter:false, // filtering is altijd custom
        customSort:false,
        anchor:NoValueType.NA},{field:'specifications',header:'Product Specificaties',sort:false,
        filter:false, // filtering is altijd custom
        customSort:false,
        anchor:NoValueType.NA},{field:'options',header:'Opties',sort:false,
        filter:false, // filtering is altijd custom
        customSort:false,
        anchor:NoValueType.NA}],
      10,
      [5, 10, 20],
      NoValueType.NA,
      NoValueType.NA,
      false,
      false,
      false,
      NoValueType.NA,
      NoValueType.NA,
      NoValueType.NA
    )),
  //overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.NA, OverflowValueConfigType.Auto)),
  // todo deep copy methode toevoegen wegens reference issues die voorlopig geen gevolgen hebben maar goed



  // todo vroeger zat hier alles ivm attributes dus ook de tableColumn waaruit je de kolommen haalt die nu dus iet worden afgebeeld want
  //      het data systeem bekijkt dit niet langer => een oplossing kan zijn om dit bij content - injection te steken?
  data: new ClientDataConfigModel('populate_table'),
  contentInjection:new ResponsiveContentInjectionConfigModel(new ContentInjectionConfigPropsModel(NoValueType.NA,
    NoValueType.NA,
    NoValueType.NA,
    [
      {
        name: 'c1-header',
        type: ComponentType.Container,
        visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
        position: new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline)),
        children: [
          {
            name: 'sort-h1',
            type: ComponentType.Icon,
            attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
              NoValueType.NA, NoValueType.NA, NoValueType.NA, IconType.Sort
            )),
            visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
                undefined, undefined, undefined, NoValueType.NA, NoValueType.NA, NoValueType.NA,
                NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, undefined,
                ButtonSizeType.Small, undefined, ButtonAppearanceType.InnerOnly, undefined,
                IconSizeType.Normal, IconMeaningType.Danger
              )
            ),
            position: new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))
          },
          {
            name: 'filter-h1',
            type: ComponentType.Icon,
            attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
              NoValueType.NA, NoValueType.NA, NoValueType.NA, IconType.Filter
            )),
            visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
                undefined, undefined, undefined, NoValueType.NA, NoValueType.NA, NoValueType.NA,
                NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, undefined,
                ButtonSizeType.Small, undefined, ButtonAppearanceType.InnerOnly, undefined,
                IconSizeType.Normal, IconMeaningType.Danger
              )
            ),
            position: new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))
          }
        ]
      },
      {
        name: 'sort-h2',
        type: ComponentType.Icon,
        attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
          NoValueType.NA, NoValueType.NA, NoValueType.NA, IconType.Sort
        )),
        visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
        styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
          undefined, undefined, undefined, NoValueType.NA, NoValueType.NA, NoValueType.NA,
          NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, undefined,
          ButtonSizeType.Small, undefined, ButtonAppearanceType.InnerOnly, undefined,
          IconSizeType.Large, IconMeaningType.Danger
        )),
        position: new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))
      },
      {
        name: 'sort-h3',
        type: ComponentType.Icon,
        attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
          NoValueType.NA, NoValueType.NA, NoValueType.NA, IconType.Sort
        )),
        visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
        styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
          undefined, undefined, undefined, NoValueType.NA, NoValueType.NA, NoValueType.NA,
          NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, undefined,
          ButtonSizeType.Small, undefined, ButtonAppearanceType.InnerOnly, undefined,
          IconSizeType.Small, IconMeaningType.Danger
        )),
        position: new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))
      },
      {
        name: 'sort-h4',
        type: ComponentType.Icon,
        attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
          undefined, undefined, undefined, NoValueType.NA, IconType.Sort
        )),
        visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
        styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
          undefined, undefined, undefined, NoValueType.NA, NoValueType.NA, NoValueType.NA,
          NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, undefined,
          ButtonSizeType.Small, undefined, ButtonAppearanceType.InnerOnly, undefined,
          IconSizeType.Large, IconMeaningType.Danger
        )),
        position: new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Inline))
      }
    ],
    NoValueType.NA,
    NoValueType.NA,
    [
      {
        field: 'actions', header: '', sort: false, filter: false, customSort: false,
        anchor: new ComponentModel(
          'edit-product-btn', ComponentType.Button, undefined, undefined, undefined,
          new ResponsiveAttributesConfigModel(
            new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, 'edit')),
          new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
        )
      }
    ]
    ))
}
