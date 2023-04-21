import {Injectable} from '@angular/core';
import {ActionModel} from "./models/ActionModel";
import myFunctions from "./composed-functions/myCustomFunctions";
import {CalculationConfigModel} from "./models/CalculationConfigModel";
import comparisons from "./unit-functions/comparison-functions/comparisons";
import {MixedArrayModel} from "./models/MixedArrayModel";
import {CalculationModel} from "./models/CalculationModel";
import {ComponentModel} from "./models/ComponentModel";
import {ResponsiveVisibilityConfigModel} from "./models/Visibility/ResponsiveVisibilityConfigModel";
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
import {DynamicDimensioningConfigModel} from "./models/Dimensioning/self/DynamicDimensioningConfigModel";
import {StretchValueConfigType} from "./enums/StrecthValueConfigTypes.enum";
import {FixedDimensionValueConfigType} from "./enums/FixedDimensionValueConfigTypes.enum";

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
              CrossAxisHorizontalPositioningConfigType.Center,
              new WidthConfigPropsModel(
                new FixedDimensioningConfigModel(DimensionValueConfigType.Calculated, '900px - 40vh'),
                DynamicDimensionValueConfigType.NA
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
              MainAxisVerticalPositioningConfigType.Center,
              new HeightConfigPropsModel(
                new FixedDimensioningConfigModel(DimensionValueConfigType.Calculated, '100px - 4vh'),
                new DynamicDimensioningConfigModel(0,0,StretchValueConfigType.NA)
              ),
              CrossAxisVerticalLanesPositioningConfigType.NA
            )
          )
        ),
        styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(ColorType.white)),
        children: [
          {
            name: 'block-1',
            type: ComponentType.Block,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel()
          },
          {
            name: 'block-2',
            type: ComponentType.Block,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel(),
            dimensions: new ResponsiveDimensioningConfigModel(
              new DimensioningConfigPropsModel(
                new HeightConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Calculated, '10vw + 90px'),
                  DynamicDimensionValueConfigType.Parent),
                new WidthConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Calculated, '90px'),
                  DynamicDimensionValueConfigType.Parent)
              )),
          },
          {
            name:'inner-component',
            type:ComponentType.Container,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel(),
            dimensions: new ResponsiveDimensioningConfigModel(
              new DimensioningConfigPropsModel(
                new HeightConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 550, DimensionUnitConfigType.PX),
                  DynamicDimensionValueConfigType.Parent),
                new WidthConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 550, DimensionUnitConfigType.PX),
                  DynamicDimensionValueConfigType.Parent)
              )),
            childLayout:new ResponsiveChildLayoutConfigModel(
              new ChildLayoutConfigPropsModel(
                new HorizontalLayoutConfigPropsModel(
                  AxisConfigType.Cross,
                  undefined,
                  true,
                  CrossAxisHorizontalPositioningConfigType.Left,
                  new WidthConfigPropsModel(
                    new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 350, DimensionUnitConfigType.PX),
                    DynamicDimensionValueConfigType.NA
                  ),
                  CrossAxisHorizontalLanesPositioningConfigType.Between
                ),
                new VerticalLayoutConfigPropsModel(
                  AxisConfigType.Main,
                  true,
                  true,
                  MainAxisVerticalPositioningConfigType.Evenly,
                  new HeightConfigPropsModel(
                    new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 150, DimensionUnitConfigType.PX),
                    new DynamicDimensioningConfigModel(1,0,StretchValueConfigType.NA)
                  ),
                  CrossAxisVerticalLanesPositioningConfigType.NA
                )
              )
            ),
            children:[
              {
                name:'child1',
                type:ComponentType.Block,
                visibility: new ResponsiveVisibilityConfigModel(),
                dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
                  new HeightConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 310, DimensionUnitConfigType.PX),
                  DynamicDimensionValueConfigType.Parent
                ),new WidthConfigPropsModel(FixedDimensionValueConfigType.Parent, DynamicDimensionValueConfigType.Parent))),
                styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(ColorType.danger))
              },
              {
                name:'child2',
                type:ComponentType.Block,
                styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(ColorType.danger)),
                visibility: new ResponsiveVisibilityConfigModel()
              }
            ]
          },
          {
            name: 'block-4',
            type: ComponentType.Block,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel()
          },
          {
            name: 'block-5',
            type: ComponentType.Block,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel(),
            dimensions: new ResponsiveDimensioningConfigModel(
              new DimensioningConfigPropsModel(
                new HeightConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 180, DimensionUnitConfigType.PX),
                  DynamicDimensionValueConfigType.Parent),
                new WidthConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 220, DimensionUnitConfigType.PX),
                  DynamicDimensionValueConfigType.Parent)
              )),
          },
          {
            name: 'block-6',
            type: ComponentType.Block,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel()
          },
          {
            name: 'block-7',
            type: ComponentType.Block,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel()
          },
          {
            name: 'block-8',
            type: ComponentType.Block,
            styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
            visibility: new ResponsiveVisibilityConfigModel(),
            dimensions: new ResponsiveDimensioningConfigModel(
              new DimensioningConfigPropsModel(
                new HeightConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 180, DimensionUnitConfigType.PX),
                  DynamicDimensionValueConfigType.Parent),
                new WidthConfigPropsModel(
                  new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.PX),
                  DynamicDimensionValueConfigType.Parent)
              )),
          }
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
