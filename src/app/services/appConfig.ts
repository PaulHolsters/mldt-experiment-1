import {Effect} from "../effectclasses/Effect";
import {SystemEffects} from "../effectclasses/systemEffects";
import {ComponentModelType} from "../types/union-types";

export default class AppConfig {
  constructor(private _userConfig: { components: readonly ComponentModelType[]; effects: readonly Effect[] }) {
    this._userConfig.effects.concat(SystemEffects.getSystemEffects())
  }
  public get userConfig():{ components: readonly ComponentModelType[], effects: readonly Effect[] } {
    return this._userConfig
  }
}
/*
*       {
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
* */
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
      attributes: new ResponsiveTableConfigModel(),
      position: new ResponsiveLayoutOverrideConfigModel(
        this.logoSmartphoneLayout,
        this.logoPortraitTabletLayout,
        this.logoTabletLayout,
        this.logoLaptopLayout,
        this.logoHighResolutionLayout
      ),
      visibility: new ResponsiveSpacingConfigModel(new VisibilityConfigPropsModel(false, false)
        , undefined
        , undefined
        , new ResponsiveSpacingConfigModel(new VisibilityConfigPropsModel(true, false)),
        undefined
      )
    },
    {
      name: 'test-click-action',
      type: ComponentType.Button,
      position: new ResponsiveLayoutOverrideConfigModel({
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
      attributes: new ResponsiveTableConfigModel({icon: 'pi-bars'}, undefined, undefined, undefined, undefined)
    }*/
