import {ComponentModel} from "../models/ComponentModel";
import {ActionModel} from "../models/ActionModel";
import {EventType} from "../enums/eventTypes.enum";
import {ComponentObjectModel} from "../models/ComponentObjectModel";

export default class AppConfig {
  constructor(private _userConfig: { components: (ComponentModel | ComponentObjectModel)[], actions: ActionModel[] }) {
  }

  public get userConfig() {
    return this._userConfig
  }

  public getActionsForComponent(name: string): ActionModel[] {
    return this.userConfig.actions.filter((action: { targetName: string; }) => {
      return action.targetName === name
    })
  }

  public getActionsForEvent(event: EventType) {
    return this.userConfig.actions.filter((action: { on: EventType; }) => {
      return action.on === event
    })
  }

  private getComponentObjectModelPropertyValue(comp: any, prop: string): any {
    if (!this.isComponentObjectModel(comp)) return undefined
    switch (prop) {
      case 'name':
        return comp.name
      case 'dimensions':
        return comp.dimensions
      case 'visibility':
        return comp.visibility
      case 'children':
        return comp.children
      case 'childLayout':
        return comp.childLayout
      case 'styling':
        return comp.styling
      case 'overflow':
        return comp.overflow
      case 'attributes':
        return comp.attributes
      case 'position':
        return comp.position
      case 'type':
        return comp.type
      case 'data':
        return comp.data
      default:
        throw new Error('unknown property ' + prop)
    }
  }

  private isComponentObjectModel(l: unknown): boolean {
    if (l && typeof l === 'object' && !(l instanceof ComponentModel)) {
      return Object.keys(l).filter(k => {
        return !(k in ['name', 'dimensions', 'position', 'children', 'childLayout', 'visibility', 'styling', 'overflow', 'attributes', 'type', 'data'])
      }).length > 0
    }
    return false
  }

  private convertToComponentModel(comp: ComponentObjectModel | ComponentModel | undefined | unknown): ComponentModel | undefined {
    if (this.isComponentObjectModel(comp)) {
      return new ComponentModel(
        this.getComponentObjectModelPropertyValue(comp, 'name'),
        this.getComponentObjectModelPropertyValue(comp, 'type'),
        this.getComponentObjectModelPropertyValue(comp, 'childLayout'),
        this.getComponentObjectModelPropertyValue(comp, 'position'),
        this.getComponentObjectModelPropertyValue(comp, 'dimensions'),
        this.getComponentObjectModelPropertyValue(comp, 'attributes'),
        this.getComponentObjectModelPropertyValue(comp, 'visibility'),
        this.getComponentObjectModelPropertyValue(comp, 'overflow'),
        this.getComponentObjectModelPropertyValue(comp, 'children'),
        this.getComponentObjectModelPropertyValue(comp, 'styling'),
        this.getComponentObjectModelPropertyValue(comp, 'data'))
    } else if (comp instanceof ComponentModel || comp === undefined) {
      return comp
    }
    throw new Error('convertToComponentModel method cannot be used  for any other type but ComponentObjectModel | ComponentModel | undefined')
  }

  public getComponentConfig(compName: string, component?: ComponentModel): ComponentModel | undefined {
    if (component) {
      if (component.name !== compName) {
        if (component.children) {
          for (let j = 0; j < component.children.length; j++) {
            // hier ga je bv de menubar component hebben
            const childComp = component.children[j]
            if (typeof childComp !== 'string') {
              const comp = this.getComponentConfig(compName, this.convertToComponentModel(childComp))
              if (comp) {
                return comp
              }
            } else {
              // todo later string [] variant toevoegen
              throw new Error('string components not implemented')
            }
          }
        }
      } else return component
    } else {
      for (let i = 0; i < this.userConfig.components.length; i++) {
        if (this.userConfig.components[i].name !== compName) {
          const children = this.userConfig.components[i].children
          if (children) {
            for (let k = 0; k < children.length; k++) {
              const elTemp = children[k]
              if (typeof elTemp !== 'string') {
                const comp = this.getComponentConfig(compName, this.convertToComponentModel(elTemp))
                if (comp) {
                  return comp
                }
              } else {
                // todo later string [] variant toevoegen
                throw new Error('string components not implemented')
              }
            }
          }
        } else {
          return this.convertToComponentModel(this.userConfig.components[i])
        }
      }
    }
    return undefined
  }

  public getComponentConfigThroughAttributes(compName: string, childComp?: ComponentModel): ComponentModel | undefined {
    if (childComp) {
      if (childComp.name === compName) return childComp
      if (childComp.attributes !== undefined) {
        for (let [k, v] of Object.entries(childComp.attributes)) {
          if (v) {
            for (let [j, l] of Object.entries(v)) {
              if ((l instanceof ComponentModel && l.name === compName)
                || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)) {
                return this.convertToComponentModel(l)
              }
              if ((l instanceof ComponentModel && (l.attributes !== undefined || l.children !== undefined))
                || (this.isComponentObjectModel(l) && (this.getComponentObjectModelPropertyValue(l, 'attributes') ||
                  this.getComponentObjectModelPropertyValue(l, 'children')))) {
                const component = this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(l))
                if (component) {
                  return component
                }
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && l[i].name === compName)
                    || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], 'name') === compName)) {
                    console.log(this.convertToComponentModel(l[i]))
                    debugger
                    return this.convertToComponentModel(l[i])
                  }
                  if ((l[i] instanceof ComponentModel && (l[i].attributes !== undefined || l[i].children !== undefined))
                    || (this.isComponentObjectModel(l[i]) && (this.getComponentObjectModelPropertyValue(l[i], 'attributes') ||
                      this.getComponentObjectModelPropertyValue(l[i], 'children')))) {
                    const component = this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(l[i]))
                    if (component) {
                      console.log('array '+compName)
                      debugger
                      return component
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (childComp.children !== undefined) {
        for (let j = 0; j < childComp.children.length; j++) {
          const actualC = childComp.children[j]
          if (typeof actualC !== 'string') {
            const component = this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(actualC))
            if (component) {
              return component
            }
          } else {
            // todo als comp string is
            throw new Error('string components not implemented')
          }
        }
      }
    } else if (this.userConfig.components !== undefined) {
      for (let i = 0; i < this.userConfig.components.length; i++) {
        const childComp = this.userConfig.components[i]
        if (childComp.attributes !== undefined) {
          for (let [k, v] of Object.entries(childComp.attributes)) {
            if (v) {
              for (let [j, l] of Object.entries(v)) {
                if ((l instanceof ComponentModel && l.name === compName)
                  || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)) {
                  return this.convertToComponentModel(l)
                }
                if (l instanceof Array) {
                  for (let i = 0; i < l.length; i++) {
                    if ((l[i] instanceof ComponentModel && l[i].name === compName)
                      || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], 'name') === compName)) {
                      console.log('array '+compName)
                      debugger
                      return this.convertToComponentModel(l[i])
                    }
                  }
                }
              }
            }
          }
        }
        if (childComp.children !== undefined) {
          for (let j = 0; j < childComp.children.length; j++) {
            const actualC = childComp.children[j]
            if (typeof actualC !== 'string') {
              const component =
                this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(actualC))
              if (component) {
                return component
              }
            } else {
              // todo als comp string is
              throw new Error('string components not implemented')
            }
          }
        }
      }
    }
    return undefined
  }

  public getParentComponentConfigWithProperty(compName: string,
                                              property: string,
                                              component?: ComponentModel,
                                              previousComponent?: ComponentModel)
    : ComponentModel | undefined {
    // todo ga na of de referenties mekaar niet beginnen wijzigen en er dus deep copies nodig zijn
    if (component) {
      if (component.name !== compName) {
        if (component.children) {
          for (let j = 0; j < component.children.length; j++) {
            let previousComponent
            let componentNow: ComponentModel | undefined | string = (component.children[j])
            if (typeof componentNow !== 'string') {
              componentNow = this.convertToComponentModel(componentNow)
              if (componentNow && componentNow.hasOwnProperty(property)
                && componentNow.getPropertyValue
                && componentNow.getPropertyValue(property) !== undefined
              ) {
                previousComponent = componentNow
              }
              const comp = this.getParentComponentConfigWithProperty(compName, property, componentNow, previousComponent)
              if (comp) {
                return comp
              }
            } else {
              // todo als comp string is
              throw new Error('string components not implemented')
            }
          }
        }
      } else return previousComponent
    } else {
      for (let i = 0; i < this.userConfig.components.length; i++) {
        if (this.userConfig.components[i].name !== compName) {
          const childComponents = this.userConfig.components[i].children
          if (childComponents) {
            for (let k = 0; k < childComponents.length; k++) {
              let previousComponent
              let childComp = childComponents[k]
              if (typeof childComp !== 'string') {
                const componentNow = this.convertToComponentModel(childComp)
                if (componentNow && componentNow.hasOwnProperty(property)
                  && componentNow.getPropertyValue
                  && componentNow.getPropertyValue(property) !== undefined
                ) {
                  previousComponent = componentNow
                }
                const comp = this.getParentComponentConfigWithProperty(compName, property, componentNow, previousComponent)
                if (comp) {
                  return comp
                }
              } else {
                // todo als comp string is
                throw new Error('string components not implemented')
              }
            }
          }
        } else return previousComponent
      }
    }
    return undefined
  }

  public getParentComponentConfigWithPropertyThroughAttributes(compName: string,
                                                               property: string,
                                                               childComp?: ComponentModel,
                                                               previous?: ComponentModel): ComponentModel | undefined {
    if (childComp) {
      if (childComp.name === compName) return previous
      if (childComp.attributes !== undefined) {
        for (let [k, v] of Object.entries(childComp.attributes)) {
          if (v) {
            for (let [j, l] of Object.entries(v)) {
              if (
                (l instanceof ComponentModel && l.name === compName)
                || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)
              ) {
                return previous
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && l[i].name === compName)
                    || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], 'name') === compName)) {
                    console.log('array '+compName)
                    debugger
                    return previous
                  }
                }
              }
              let previousComponent
              if ((l instanceof ComponentModel && l.hasOwnProperty(property)
                  && l.getPropertyValue
                  && l.getPropertyValue(property) !== undefined)
                || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, property) !== undefined)) {
                previousComponent = l
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && l[i].hasOwnProperty(property)
                      && l[i].getPropertyValue
                      && l[i].getPropertyValue(property) !== undefined)
                    || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], property) !== undefined)) {
                    previousComponent = l
                    console.log('break missing!')
                    debugger
                    // todo hier lijkt een break te missen
                  }
                }
              }
              if ((l instanceof ComponentModel && (l.attributes !== undefined || l.children !== undefined))
                || (this.isComponentObjectModel(l) && (this.getComponentObjectModelPropertyValue(l, 'attributes') ||
                  this.getComponentObjectModelPropertyValue(l, 'children')))) {
                let component
                if (previousComponent) component =
                  this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                    this.convertToComponentModel(l),
                    this.convertToComponentModel(previousComponent))
                else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                  this.convertToComponentModel(l), previous)
                if (component) {
                  return component
                }
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && (l[i].attributes !== undefined || l[i].children !== undefined))
                    || (this.isComponentObjectModel(l[i]) && (this.getComponentObjectModelPropertyValue(l[i], 'attributes') ||
                      this.getComponentObjectModelPropertyValue(l[i], 'children')))) {
                    let component
                    if (previousComponent){
                      console.log('array '+compName)
                      debugger
                      component =
                        this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                          this.convertToComponentModel(l[i]),
                          this.convertToComponentModel(previousComponent))
                    } else{
                      console.log('array '+compName)
                      debugger
                      component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                        this.convertToComponentModel(l[i]), previous)
                    }
                    if (component) {
                      console.log('array '+compName)
                      debugger
                      return component
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (childComp.children !== undefined) {
        for (let j = 0; j < childComp.children.length; j++) {
          let previousComponent
          const actualComp = childComp.children[j]
          if (typeof actualComp !== 'string') {
            const componentNow = this.convertToComponentModel(actualComp)
            if ((componentNow instanceof ComponentModel && componentNow.hasOwnProperty(property)
                && componentNow.getPropertyValue
                && componentNow.getPropertyValue(property) !== undefined)
              || (this.isComponentObjectModel(componentNow) && this.getComponentObjectModelPropertyValue(componentNow, property) !== undefined)) {
              previousComponent = componentNow
            }
            let component
            if (previousComponent) component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
              componentNow, previousComponent)
            else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
              componentNow, previous)
            if (component) {
              return component
            }
          } else {
            // todo als comp string is
            throw new Error('string components not implemented')
          }

        }
      }
    } else {
      for (let i = 0; i < this.userConfig.components.length; i++) {
        const comp = this.userConfig.components[i]
        if (comp.attributes !== undefined) {
          for (let [k, v] of Object.entries(comp.attributes)) {
            if (v) {
              for (let [j, l] of Object.entries(v)) {
                // todo array wordt niet gecontroleerd
                if ((l instanceof ComponentModel && l.name === compName)
                  || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)) {
                  return previous
                }
                let previousComponent
                if ((l instanceof ComponentModel && l.hasOwnProperty(property)
                    && l.getPropertyValue
                    && l.getPropertyValue(property) !== undefined)
                  || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, property) !== undefined)) {
                  previousComponent = l
                }
                if (l instanceof ComponentModel || this.isComponentObjectModel(l)) {
                  let component
                  if (previousComponent) component =
                    this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                      this.convertToComponentModel(l), this.convertToComponentModel(previousComponent))
                  else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                    this.convertToComponentModel(l), previous)
                  if (component) return component
                }
                console.log('NIET array '+compName)
                debugger
              }
            }
          }
        }
        if (comp.children !== undefined) {
          for (let j = 0; j < comp.children.length; j++) {
            let previousComponent
            const actualC = comp.children[j]
            if (typeof actualC !== 'string') {
              const componentNow = this.convertToComponentModel(actualC)
              if ((componentNow instanceof ComponentModel && componentNow.hasOwnProperty(property)
                  && componentNow.getPropertyValue
                  && componentNow.getPropertyValue(property) !== undefined)
                || (this.isComponentObjectModel(componentNow) && this.getComponentObjectModelPropertyValue(componentNow, property) !== undefined)) {
                previousComponent = actualC
              }
              let component
              if (previousComponent) component =
                this.getParentComponentConfigWithPropertyThroughAttributes(compName,
                  property, componentNow, previousComponent)
              else component =
                this.getParentComponentConfigWithPropertyThroughAttributes(compName,
                  property, componentNow, previous)
              if (component) {
                return component
              }
            } else {
              // todo als comp string is
              throw new Error('string components not implemented')
            }
          }
        }
      }
    }
    return undefined
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
