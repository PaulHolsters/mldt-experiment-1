import {Injectable} from '@angular/core';
import {ActionModel} from "./models/ActionModel";
import myFunctions from "./composed-functions/myCustomFunctions";
import {CalculationConfigModel} from "./models/CalculationConfigModel";
import comparisons from "./unit-functions/comparison-functions/comparisons";
import {MixedArrayModel} from "./models/MixedArrayModel";
import {CalculationModel} from "./models/CalculationModel";
import {ComponentModel} from "./models/ComponentModel";
import {ResponsiveVisibilityConfigModel} from "./models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "./models/Visibility/VisibilityConfigPropsModel";
import {StoreService} from "./store.service";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {ComponentType} from "./enums/componentTypes.enum";
import {DimensioningConfigPropsModel} from "./models/Dimensioning/self/DimensioningConfigPropsModel";
import {ResponsiveDimensioningConfigModel} from "./models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {FixedDimensioningConfigModel} from "./models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "./enums/dimensionValueConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "./models/Styling/ResponsiveStylingConfigModel";
import {ResponsiveChildLayoutConfigModel} from "./models/ChildLayout/ResponsiveChildLayoutConfigModel"
import {ChildLayoutConfigPropsModel} from "./models/ChildLayout/ChildLayoutConfigPropsModel"
import {HorizontalLayoutConfigPropsModel} from "./models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "./enums/axisConfigTypes.enum";
import {HeightConfigPropsModel} from './models/Dimensioning/self/HeightConfigPropsModel';
import {WidthConfigPropsModel} from "./models/Dimensioning/self/WidthConfigPropsModel";
import {DimensionUnitConfigType} from './enums/dimensionUnitConfigTypes.enum';
import {VerticalLayoutConfigPropsModel} from './models/ChildLayout/VerticalLayoutConfigPropsModel';
import {StylingConfigPropsModel} from './models/Styling/StylingConfigPropsModel';
import {ColorType} from './enums/colorType.enum';
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "./enums/crossAxisHorizontalLanesPositioningConfigTypes.enum";
import {CrossAxisVerticalLanesPositioningConfigType} from './enums/crossAxisVerticalLanesPositioningConfigTypes.enum';
import {DynamicDimensionValueConfigType} from "./enums/DynamicDimensionValueConfigTypes.enum";
import {WidthValueConfigType} from "./enums/WidthValueConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "./enums/mainAxisVerticalPositioningConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "./enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {OverflowConfigPropsModel} from "./models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "./enums/overflowValueConfigTypes.enum";
import {ResponsiveOverflowConfigModel} from './models/Overflow/self/ResponsiveOverflowConfigModel';
import {HeightValueConfigType} from "./enums/HeightValueConfigTypes.enum";
import {ResponsiveAttributesConfigModel} from './models/Attributes/ResponsiveAttributesConfigModel';
import {CrossAxisVerticalPositioningConfigType} from "./enums/crossAxisVerticalPositioningConfigTypes.enum";
import {PaddingType} from "./enums/paddingType.enum";
import {MarginType} from "./enums/marginType.enum";
import {FontWeightType} from "./enums/fontWeightType.enum";
import {TextColorType} from "./enums/textColorType.enum";
import {TextDecorationType} from "./enums/textDecorationType.enum";
import {FontSizeType} from "./enums/fontSizeType.enum";
import {FontStyleType} from "./enums/fontStyleType.enum";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // todo *** als er meerdere updates zijn binnen een component
  //  moet er een wacht mechanisme bestaan zodat de component pas
  //  na alle prop changes wordt gerenderd ***
  // todo *** datamodel binden aan een component  ***
  // todo *** uitwerken andere componenten ***
  // todo *** container component ***
  // todo *** graphQL backend + frontend zodat je frontend configuratie kan
  //  doorsturen vanuit de backend (YAML file) (hard-coded of geen datamodel) ***
  /*      {
        name: 'logo',
        type: 'logo',
        responsiveness: {
          smartphone: {dimension: 'sm', position: {region:'ur',shift:['-5px','-50px']}},
          portraitTablet: {dimension: 'm', position: {region:'ul',shift:['5px','50px']}},
          tablet: {dimension: 'l', position: {region:'mc',shift:['-5px','-50px']}},
          laptop: {dimension: 'xl', position: {region:'ml',shift:['5px','-50px']}},
          highResolution: {dimension: 'xxl', position: {region:'br',shift:['-5px','10px']}},
        },
        configuration: {
          src: 'kisspng-the-library-project-organization-public-library-ed-5ae3a97f396580.1255839715248695032351.png',
          alt: 'Mouldit logo'
        },
        // dit stelt de state mogelijkheden van het logo voor
        // in geval van het logo zal de waarde van value gekoppeld worden
        // aan de waarde voor property bv. 70px aan m (medium)
        // deze waarden worden gebruikt voor de property dimension
        // dimension is de property die de grootte van een component voorstelt
        // in geval van het logo is er maar 1 dimensie namelijk de hoogte
        // dit is arbitrair dit had namelijk evengoed de breedte kunnen zijn,
        // voor een logo gaat Mouldit er voorlopig van uit dat dit er onmiddellijk goed uitziet
        // en dus enkel de grootte moet bepaald worden binnen elk scherm
        // dimension en position gebruik je binnen een responsiveness property
        // tenzij er geen verschillen zijn m.b.t. tot de grootte van het scherm
        // todo we gaan dit nu uitbreiden naar position
            /*
    * Main-Content-container => POSITIONING
----------------------
In eerste instantie kiest de gebruiker bij het configureren van de app-template component
of de children gepositioneerd moeten worden in een row of een column

keuze = ROW:
------------
De volgende keuze is dan of de verschillende children op de volgende lijn moeten gepositioneerd worden
op het moment dat de schermbreedte overschreden wordt. Het alternatief is kiezen voor scrolling in de horizontale richting.
Overflow verbergen wordt voorlopig niet geïmplementeerd omdat mij niet meteen duidelijk is hoe dat zinvol kan zijn
in een data-intensieve applicatie (oftewel "forms-driven application"), ten minste toch niet voor de main-content-component
van een applicatie. De main-content component is uiteindelijk een doodgewone "Mouldit container component" waarvoor
een bepaalde breedte en hoogte werd gezet en eventueel bepaald responsive behaviour todo.

  keuze = WRAP
  ------------
  Vervolgens moet je aangeven hoe elke "lijn" de verschillende children moet positioneren binnen deze lijn
  (het is overduidelijk dat het begrip "lijn" cruciaal is in het begrijpen van het "Mouldit" positioneringssysteem =>
  dit moet dan ook zo naar voren komen in de documentatie). De keuzes zijn (prop=verPos)
  - TOP
  - BOTTOM
  - CENTER
  - EVENLY
  - AROUND
  - BETWEEN

    De keuze op zich maakt niet uit voor het volg van dit pad. De volgende keuze is hoe de children gepositioneerd
    moeten worden in de verticale richting voor een willekeurige lijn. De keuzes zijn:
    - ALIGN BASELINES OF CHILDREN (baseline)
    - CENTER CHILDREN VERTICALLY (center)
    - PLACE CHILDREN ON THE BOTTOM (bottom)
    - PLACE CHILDREN AT THE TOP (top)

    De keuze op zich maakt niet uit voor het volg van dit pad. De volgende keuze is hoe de children gepositioneerd
    moeten worden in de horizontale richting. De keuzes zijn:
    - LEFT
    - RIGHT
    - CENTER
    - EVENLY
    - AROUND
    - BETWEEN

    Ook hier maakt de keuze niet uit voor het vervolg van het pad. Het is natuurlijk mogelijk dat de hoogte van de container
    door de hoogte van de inhoud wordt overschreden. Omdat dit de main-container is, zal deze automatisch een scroller tonen
    zodat je steeds de inhoud kan tonen aan de user. Belangrijk is dat de gebruiker dit probleem vermijdt door te grote
    content op te vangen in één of meer van de children.

  keuze = SCROLL WHEN NOT ENOUGH SPACE HORIZONTALLY (ipv WRAP)
  -------------------------------------------------
    * */
  /*
  * mogelijke waarden voor position van het logo
  * --------------------------------------------
  * Er is een moeilijkheid wanneer het gaat om positie. Er is namelijk een verschil of er
  * binnen de parent nog een element is of niet, maw welk deel laat je bepalen door de parent
  * en welk deel mag de component zelf bepalen?
  * *!/
  state: [
    {property: 'display', value: true},
    {property: 'sm', value: "40px"},
    {property: 'm', value: "70px"},
    {property: 'l', value: "110px"},
    {property: 'xl', value: "160px"},
    {property: 'xxl', value: "220px"}
  ]
},*/
  /*      {
        name: 'logo',
        type: ComponentType.Logo,
        attributes: new ResponsiveAttributesConfigModel(),
        position: new ResponsivePositioningConfigModel(
          this.logoSmartphoneLayout,
          this.logoPortraitTabletLayout,
          this.logoTabletLayout,
          this.logoLaptopLayout,
          this.logoHighResolutionLayout
        ),
        visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false, false)
          , undefined
          , undefined
          , new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(true, false)),
          undefined
        )
      },
      {
        name: 'test-click-action',
        type: ComponentType.Button,
        position: new ResponsivePositioningConfigModel({
          childLayout: {}
        }, {
          childLayout: {}
        }, {
          childLayout: {}
        }, {
          childLayout: {}
        }, {
          childLayout: {}
        }),
        attributes: new ResponsiveAttributesConfigModel({icon: 'pi-bars'}, undefined, undefined, undefined, undefined)
      }*/
  contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  } = {
    components: [
      {
        // todo start adding constraints
        // todo add a minimal/maxiaml dimension
        name: 'content-container',
        type: ComponentType.Container,
        visibility: new ResponsiveVisibilityConfigModel(),
        overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto, OverflowValueConfigType.NA)),
        dimensions: new ResponsiveDimensioningConfigModel(
          new DimensioningConfigPropsModel(
            new HeightConfigPropsModel(
              new FixedDimensioningConfigModel(
                DimensionValueConfigType.Calculated, '(100vh - 16px)'),
              DynamicDimensionValueConfigType.NC),
            WidthValueConfigType.NC
          )
        ),
        childLayout: new ResponsiveChildLayoutConfigModel(
          // todo add the other parts too like visibility, styling etc., change scroll into overflow
          new ChildLayoutConfigPropsModel(
            new HorizontalLayoutConfigPropsModel(
              AxisConfigType.Cross,
              undefined,
              true,
              // dit zal de componenten binnen een lane positioneren
              CrossAxisHorizontalPositioningConfigType.Left,
              // breedte van de kinderen
              new WidthConfigPropsModel(
                new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage),
                DynamicDimensionValueConfigType.NC
              ),
              // dit zal lanes positioneren ten opzichte van elkaar
              // todo dit geeft wel een soort van bug als de lanes centered zijn en het dingt overflowt dan kan je niet meer alles zien door te scrollen
              //    dit zou je kunnen oplossen door in uiterste nood een event laten gebeuren en vervolgens de waarde hier wijzigen
              CrossAxisHorizontalLanesPositioningConfigType.Left
            ),
            new VerticalLayoutConfigPropsModel(
              AxisConfigType.Main,
              false,
              // todo nagaan is hier eigenlijk iets voor geimpelmenteerd?
              true,
              MainAxisVerticalPositioningConfigType.Top,
              HeightValueConfigType.NC,
              CrossAxisVerticalLanesPositioningConfigType.NA
            )
          )
        ),
        styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(ColorType.white)),
        children: [
          {
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
                end: new ComponentModel('input with label',ComponentType.Container,
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
                    ), new ChildLayoutConfigPropsModel(
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
                  ),undefined,new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
                    new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,350,DimensionUnitConfigType.PX),DynamicDimensionValueConfigType.NC),
                    new WidthConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,650,DimensionUnitConfigType.PX),DynamicDimensionValueConfigType.NC)
                  )),undefined,new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
                ,new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto, OverflowValueConfigType.NC))
                ,[
                    {
                      type: ComponentType.Label,
                      name: 'label',
                      visibility: new ResponsiveVisibilityConfigModel({
                        visible: false,
                        holdSpace: false
                      }, undefined, undefined, {
                        visible: true,
                        holdSpace: false
                      }),
                      overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(
                        OverflowValueConfigType.Auto, OverflowValueConfigType.NC
                      )),
                      styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
                        ColorType.warning,
                        PaddingType.All_2,
                        // todo add constraint that a label only accepts margin
                        //  dit is wellicht het gemakkelijkste door Label als een klasse te gaan aanmaken zodat je het new Keyword kan gebruiken
                        /*
                        * new Label(
                        *   {
                        *     name:'my new label',
                        *     visibility: new ResponsiveVisibilityConfigModel({
                                                visible: false,
                                                holdSpace: false
                                              }, undefined, undefined, {
                                                visible: true,
                                                holdSpace: false
                                              }),
                              overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(
                                OverflowValueConfigType.Auto, OverflowValueConfigType.NC
                              )),
                              styling:  new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
                                  ColorType.warning,
                                  // todo in hier gaat dan een constraint af die zegt dat padding bij een label niet is toegelaten
                                  PaddingType.All_6,
                                  MarginType.All_3,
                        *   }
                        * )
                        *
                        *
                        *
                        *
                        *
                        *
                        *
                        *
                        *
                        *
                        * */
                        MarginType.All_3,
                        FontWeightType.Medium,
                        TextColorType.Text_4,
                        TextDecorationType.Stripe_through,
                        FontSizeType.XL_5,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        FontStyleType.Italic))
                    },
                    {
                      name: 'input',
                      type: ComponentType.Input,
                      visibility: new ResponsiveVisibilityConfigModel({
                        visible: false,
                        holdSpace: false
                      }, undefined, undefined, {
                        visible: true,
                        holdSpace: false
                      }),
                      styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
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
/*                  {
                  name: 'input with label',
                  type: ComponentType.Container,
                  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
                  // Breedte van input container
                  dimensions:new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
                    new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,350,DimensionUnitConfigType.PX),DynamicDimensionValueConfigType.NC),
                    new WidthConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,650,DimensionUnitConfigType.PX),DynamicDimensionValueConfigType.NC)
                  )),
                  overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto, OverflowValueConfigType.NC)),
                  childLayout: new ResponsiveChildLayoutConfigModel(
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
                    ), new ChildLayoutConfigPropsModel(
                      new HorizontalLayoutConfigPropsModel(
                        AxisConfigType.Cross,
                        undefined,

                        true,
                        // dit zal de componenten binnen een lane positioneren
                        CrossAxisHorizontalPositioningConfigType.Left,
                        new WidthConfigPropsModel(
                          // todo fix bug: breedte wordt niet gedetecteerd NOG STEEDS NIET (op de children van deze container he)!!
                          new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 200, DimensionUnitConfigType.PX),
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
                  children:[
                    {
                      name: 'label',
                      type: ComponentType.Label,
                      visibility: new ResponsiveVisibilityConfigModel({
                        visible: false,
                        holdSpace: false
                      }, undefined, undefined, {
                        visible: true,
                        holdSpace: false
                      }),
                      dimensions:new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(HeightValueConfigType.Parent, new WidthConfigPropsModel(
                        new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,50,DimensionUnitConfigType.PX),DynamicDimensionValueConfigType.Parent
                      ))),
                      overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(
                        OverflowValueConfigType.Auto, OverflowValueConfigType.NC
                      )),
                      styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
                        ColorType.warning,
                        PaddingType.All_6,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined))
                    },
                    {
                      name: 'input',
                      type: ComponentType.Input,
                      dimensions:new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(HeightValueConfigType.Parent, WidthValueConfigType.Parent)),
                      visibility: new ResponsiveVisibilityConfigModel({
                        visible: false,
                        holdSpace: false
                      }, undefined, undefined, {
                        visible: true,
                        holdSpace: false
                      }),
                      styling:new ResponsiveStylingConfigModel(new StylingConfigPropsModel(
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined))
                    },
                  ]
                },*/
              }
            ),
            visibility: new ResponsiveVisibilityConfigModel(),
            overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.NA,OverflowValueConfigType.Auto)),
            // todo hier moet een soort auto height of fit content height komen
/*            dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
              new HeightConfigPropsModel(FixedDimensionValueConfigType.NC, new DynamicDimensioningConfigModel(1,0,StretchValueConfigType.NA)),
              WidthValueConfigType.NC
            ))*/
          },
        ]
      },
    ],
    actions: [
      // hou er rekening mee dat de volgorde van de actions in deze array implicaties kunnen hebben op
      // de condities zoals gedefinieerd in de overeekomstige actie
      {
        source: 'test-click-action',
        target: 'logo',
        trigger: 'click',
        action: 'set',
        props: [
          {
            name: 'xxl',
            value: {calc: 'myCalc3', values: ['590px']},
            condition: {
              comparison: 'propIsGreaterThan',
              values: [{calc: 'myCalc1', values: [{target: 'logo', prop: 'l'}]}, '50px']
            }
          }]
      },
      {
        source: 'test-click-action',
        target: 'logo',
        trigger: 'click',
        action: 'toggle',
        props: [{
          name: 'display', condition:
            {
              comparison: 'propIsSmallerThan',
              values:
                [
                  {target: 'logo', prop: 'xxl'},
                  {
                    calc: 'myCalc2',
                    values: [
                      {calc: 'myCalc3', values: ['30px']},
                      {target: 'logo', prop: 'l'},
                      {target: 'logo', prop: 'xxl'},
                      '50px'
                    ]
                  }
                ]
            }
        }
        ]
      },
    ]
  }

  constructor(private storeService: StoreService, private responsiveBehaviourService: ResponsiveBehaviourService) {
    this.storeService.createStore(this.contentContainer)
    this.responsiveBehaviourService.setResponsiveBehaviour(this.contentContainer)
  }

  private resolve(value: CalculationModel): MixedArrayModel {
    let paramsArr: MixedArrayModel = []
    for (let v of value.values) {
      if (typeof v === 'object' && v.hasOwnProperty('calc')) {
        paramsArr = paramsArr.concat(this.resolve(v))
      } else if (typeof v === 'object') {
        Object.values(v).forEach(val => {
          paramsArr.push(val)
        })
      } else {
        paramsArr.push(v)
      }
    }
    paramsArr.push(this.storeService.getStatePropertySubjects())
    for (let [attr, val] of Object.entries(myFunctions)) {
      if (attr === value.calc) {
        const calcRes = Reflect.apply(val.fun, null, paramsArr)
        if (typeof calcRes === 'object') {
          const result = []
          for (let val of Object.values(calcRes)) {
            result.push(val)
          }
          return result
        }
        return [calcRes]
      }
    }
    throw ('no calculation found to be executed for ' + value.calc)
  }

  private emitNewPropValueFor(componentName: string, propName: string, value: string | boolean | number | CalculationModel) {
    let valueToSet
    if (typeof value === 'object') {
      valueToSet = this.resolve(value)[0]
    } else {
      valueToSet = value
    }
    this.storeService.getStatePropertySubjects().find(subj => {
      return subj.componentName === componentName && subj.propName === propName
    })?.propValue.next(valueToSet)
  }

  executeAction(action: ActionModel) {
    if (action.action === 'set') {
      action.props.forEach(prop => {
        if (this.conditionsMet(prop)) {
          this.emitNewPropValueFor(action.target, prop.name, prop.value)
        }
      })
    } else {
      action.props.forEach(prop => {
        for (let [attr, val] of Object.entries(myFunctions)) {
          if (attr === action.action) {
            if (this.conditionsMet(prop)) {
              const paramsArr = [
                action.target,
                prop.name,
                this.storeService.getStatePropertySubjects()
              ]
              this.emitNewPropValueFor(action.target, prop.name, Reflect.apply(val.fun, null, paramsArr))
            }
            break
          }
        }
      })
    }
  }

  private conditionsMet(prop: CalculationConfigModel): boolean {
    for (let [attr, val] of Object.entries(comparisons)) {
      if (attr === prop.condition?.comparison) {
        let valuesArr: any[] = []
        prop.condition.values.forEach(v => {
          if (typeof v === 'object' && v.hasOwnProperty('calc')) {
            valuesArr = valuesArr.concat(this.resolve(v))
          } else if (typeof v === 'object') {
            // dan zijn er geen dieperliggende calculation verboregen in dit object!
            Object.values(v).forEach(val => {
              valuesArr.push(val)
            })
          } else {
            valuesArr.push(v)
          }
        })
        valuesArr.push(this.storeService.getStatePropertySubjects())
        return Reflect.apply(val.fun, null, valuesArr)
      }
    }
    return true
  }

  getAppTemplateData(): { components: ComponentModel[], actions: ActionModel[] } {
    return {...this.contentContainer}
  }
}
