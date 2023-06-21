import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigPropsModel} from "../../models/ChildLayout/ChildLayoutConfigPropsModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/crossAxisHorizontalLanesPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../../models/ChildLayout/VerticalLayoutConfigPropsModel";
import {CrossAxisVerticalPositioningConfigType} from "../../enums/crossAxisVerticalPositioningConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/crossAxisVerticalLanesPositioningConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalPositioningConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {ResponsiveOverflowConfigModel} from "../../models/Overflow/self/ResponsiveOverflowConfigModel";
import {OverflowConfigPropsModel} from "../../models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {WidthValueConfigType} from "../../enums/WidthValueConfigTypes.enum";

export const header = {
  name: 'header-content',
  type: ComponentType.Menubar,
  attributes: new ResponsiveAttributesConfigModel(
    {
      menuItems: [
        {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [
                {
                  label: 'Bookmark',
                  icon: 'pi pi-fw pi-bookmark'
                },
                {
                  label: 'Video',
                  icon: 'pi pi-fw pi-video'
                }
              ]
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            },
            {
              separator: true
            },
            {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
            }
          ]
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
            },
            {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
            },
            {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
            },
            {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
            }
          ]
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-user-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus'
            },
            {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [
                {
                  label: 'Filter',
                  icon: 'pi pi-fw pi-filter',
                  items: [
                    {
                      label: 'Print',
                      icon: 'pi pi-fw pi-print'
                    }
                  ]
                },
                {
                  icon: 'pi pi-fw pi-bars',
                  label: 'List'
                }
              ]
            }
          ]
        },
        {
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
          items: [
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {
                  label: 'Save',
                  icon: 'pi pi-fw pi-calendar-plus'
                },
                {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            },
            {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [
                {
                  label: 'Remove',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            }
          ]
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off'
        }
      ],
      start: {
        name: 'logo',
        type: ComponentType.Image,
        attributes: new ResponsiveAttributesConfigModel({
          alt: 'mylogo',
          src: 'kisspng-the-library-project-organization-public-library-ed-5ae3a97f396580.1255839715248695032351.png',
          width: 250
        }),
        visibility: new ResponsiveVisibilityConfigModel({
          visible: false,
          holdSpace: false
        }, undefined, undefined, {
          visible: true,
          holdSpace: false
        })
      },
      end: new ComponentModel(
        'input with label',
        ComponentType.Container,
        new ResponsiveChildLayoutConfigModel(
          // todo zorg voor een children param hier zodat dit allemaal proper bijeen staat
          // todo add the other parts too like visibility, styling etc., change scroll into overflow
          new ChildLayoutConfigPropsModel(
            new HorizontalLayoutConfigPropsModel(
              AxisConfigType.Main,
              undefined,
              true,
              // dit zal de componenten binnen een lane positioneren
              CrossAxisHorizontalPositioningConfigType.NA,
              // todo fix bug: breedte wordt niet gedetecteerd NOG STEEDS NIET (op de children van deze container he)!!
              new WidthConfigPropsModel(
                new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 450, DimensionUnitConfigType.PX),
                DynamicDimensionValueConfigType.NC
              ),
              // dit zal lanes positioneren ten opzichte van elkaar
              // todo dit geeft wel een soort van bug als de lanes centered zijn en het dingt overflowt dan kan je niet meer alles zien door te scrollen
              //    dit zou je kunnen oplossen door in uiterste nood een event laten gebeuren en vervolgens de waarde hier wijzigen
              CrossAxisHorizontalLanesPositioningConfigType.NA
            ),
            new VerticalLayoutConfigPropsModel(
              AxisConfigType.Cross,
              false,
              true,
              CrossAxisVerticalPositioningConfigType.Top,
              HeightValueConfigType.NC,
              CrossAxisVerticalLanesPositioningConfigType.Top
            )
          ),
          new ChildLayoutConfigPropsModel(
            new HorizontalLayoutConfigPropsModel(
              AxisConfigType.Cross,
              undefined,
              true,
              // dit zal de componenten binnen een lane positioneren
              CrossAxisHorizontalPositioningConfigType.Left,
              new WidthConfigPropsModel(
                // todo fix bug: breedte wordt niet gedetecteerd NOG STEEDS NIET (op de children van deze container he)!!
                new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 800, DimensionUnitConfigType.PX),
                DynamicDimensionValueConfigType.NC
              ),
              // dit zal lanes positioneren ten opzichte van elkaar
              // todo dit geeft wel een soort van bug als de lanes centered zijn en het dingt overflowt dan kan je niet meer alles zien door te scrollen
              //    dit zou je kunnen oplossen door in uiterste nood een event laten gebeuren en vervolgens de waarde hier wijzigen
              CrossAxisHorizontalLanesPositioningConfigType.Left
            ),
            new VerticalLayoutConfigPropsModel(
              AxisConfigType.Main,
              true,
              true,
              MainAxisVerticalPositioningConfigType.Evenly,
              HeightValueConfigType.NC,
              CrossAxisVerticalLanesPositioningConfigType.NA
            )
          )
        ),
        undefined,
        new ResponsiveDimensioningConfigModel(
          new DimensioningConfigPropsModel(
            new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 150, DimensionUnitConfigType.PX), DynamicDimensionValueConfigType.NC),
            new WidthConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 650, DimensionUnitConfigType.PX), DynamicDimensionValueConfigType.NC)
          )),
        undefined,
        new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
        ,
        new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto, OverflowValueConfigType.NC))
        , [
          {
            name: 'input',
            type: ComponentType.InputText,
            visibility: new ResponsiveVisibilityConfigModel({
              visible: false,
              holdSpace: false
            }, undefined, undefined, {
              visible: true,
              holdSpace: false
            }),
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              undefined))
          },
        ]),
    }
  ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.NA, OverflowValueConfigType.Auto)),
  // todo hier moet een soort auto height of fit content height komen
  dimensions: new ResponsiveDimensioningConfigModel(
    new DimensioningConfigPropsModel(
               HeightValueConfigType.NC,
                WidthValueConfigType.Parent
    ))
}
