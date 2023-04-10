# Mouldit
## Code structure
Elk onderdeel van Mouldit zit in een aparte directory - of zal nog in een aparte directory komen te zitten. Hieronder volgen deze mappen met een korte beschrijving wat er in zit en wat het doet.
### Models
Hierin vind je de modellen terug die de eerste feature van Mouldit, het Responsive Behaviour System, volledig beschrijven. Het systeem kent (voorlopig) de volgende onderdelen:
- Attributes: dit zijn HTML attributen die specifiek voor bepaalde componenten bestaan, maar niet per se voor andere. Voorbeeld: het src attribuut van een img tag.
- ChildLayout: Dit zijn de modellen waar een Container component gebruik van maakt. Hiermee kan je als gebruiker aangeven hoe de child components zich moeten gedragen wat betreft positie en dimensies.
- Dimensioning: deze modellen bepalen de dimensies van een component, meerbepaald de hoogte en/of de breedte.
- Overflow: deze modellen bepalen alles i.v.m. overflow, bijvoorbeeld wanneer de scrollfucntie moet getoond worden (deze feature werkt nog niet).
- Positioning: deze modellen bepalen waar de componenten op de pagina gerendered moeten worden.
- Styling: deze modellen bepalen het uiterlijk van de component, zaken zoals de kleur van de achtergrond, ...
- Visibility: deze modellen bepalen alles omtrent de zichtbaarheid van een component, met als meest rudimentaire bepaling of een component al dan niet zichtbaar is
### Enums
Hier bevinden zich alle binnen Mouldit gebruikte enums. De bedoeling van deze enums is hoofdzakelijk om als gebruiker snel een bepaalde configuratie te kunnen doen, zonder dat je strings moet gaan gebruiken. (Kan je in een YAML file ook enums gebruiken, want het zou stom zijn moest je daar ineens terug strings moet gaan zitten typen niet?)
### Components
Alle UI componenten die je kan gebruiken zitten in deze folder. Voorlopig zijn dit er nog maar een paar, namelijk net zoveel als ik nodig heb om nieuw ontwikkelde zaken te kunnen maken en testen. Aldus zal deze verzameling componenten langzamerhand groter worden te samen met het aantal opties wat betreft configuratie van deze componenten.
### Services
Deze zitten nog niet in een aparte map, ook omdat deze zaken nog erg aan verandering onderhevig zijn. Wel zijn er momenteel twee belangrijke services geïmplementeerd: de store en de responsive behaviour service. In de config service zit het javascript configuratie object. Met dit object configureer je de Mouldit frontend bij elkaar. In het app.component.html bestand zit dan ook maar 1 component, namelijk een container component die als start dient voor je applicatie. Voor de duidelijkheid hieronder een voorbeeld van het configuratieobject:

    contentContainer: {
      components: ComponentModel[],
      actions: ActionModel[]
    } = {
      components: [
        {
          name: 'content-container',
          type: ComponentType.Container,
          position: new ResponsivePositioningConfigModel(
            new PositioningConfigPropsModel()),
          visibility: new ResponsiveVisibilityConfigModel(),
          dimensions: new ResponsiveDimensioningConfigModel(
            new DimensioningConfigPropsModel(
              new FixedDimensioningConfigModel(
                DimensionValueConfigType.Calculated, '(100vh - 16px)')
            )),
          childLayout: new ResponsiveChildLayoutConfigModel(
            new ChildLayoutConfigPropsModel(
              new HorizontalLayoutConfigPropsModel(
                AxisConfigType.Main,
                true,
                true,
                MainAxisHorizontalPositioningConfigType.Left,
                new DynamicDimensioningConfigModel(1, 1, undefined),
                //new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 240, DimensionUnitConfigType.PX),
                MainAxisHorizontalPositioningConfigType.NA
              ),
              new VerticalLayoutConfigPropsModel(
                AxisConfigType.Cross,
                undefined,
                true,
                undefined,
                new DynamicDimensioningConfigModel(
                  undefined,
                  undefined,
                  true
                ), MainAxisVerticalPositioningConfigType.NA
              )
            ), undefined, undefined, new ChildLayoutConfigPropsModel(
              new HorizontalLayoutConfigPropsModel(
                AxisConfigType.Cross,
                undefined,
                true,
                undefined,
                new DynamicDimensioningConfigModel(
                  undefined,
                  undefined,
                  true
                ), MainAxisHorizontalPositioningConfigType.NA
              ), new VerticalLayoutConfigPropsModel(
                AxisConfigType.Main,
                true,
                true,
                MainAxisVerticalPositioningConfigType.Top,
                new DynamicDimensioningConfigModel(1, 1, undefined),
                //new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 240, DimensionUnitConfigType.PX),
                MainAxisVerticalPositioningConfigType.NA
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
            }, {
              name: 'block-2',
              type: ComponentType.Block,
              styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
              visibility: new ResponsiveVisibilityConfigModel()
            },
            {
              name: 'logo',
              type: ComponentType.Logo,
              attributes: new ResponsiveAttributesConfigModel(
                new AttributesConfigPropsModel('kisspng-the-library-project-organization-public-library-ed-5ae3a97f396580.1255839715248695032351.png')),
              dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(undefined,
                new DynamicDimensioningConfigModel(undefined, 1, undefined))),
              visibility: new ResponsiveVisibilityConfigModel(),
            },
            {
              name: 'block-4',
              type: ComponentType.Block,
              styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel()),
              visibility: new ResponsiveVisibilityConfigModel()
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
  
#### Config service
Hier bevindt zich zoals reeds gezegd het configuratieobject. Hier wordt ook de engine van Mouldit opgestart in de constructor. Eerst wordt er een nieuwe store aangemaakt. Vervolgens wordt het responsive behaviour van elk der componenten in het configuratieobject geinitialiseerd.

    constructor(private storeService: StoreService, private responsiveBehaviourService: ResponsiveBehaviourService) {
      this.storeService.createStore(this.contentContainer)
      this.responsiveBehaviourService.setResponsiveBehaviour(this.contentContainer)
    }

Bij deze initialisatie worden de verschillende properties der componenten in de store geplaatst alsook een initiële waarde (meestal *undefined*). 
#### Responsive Behaviour service
Bij het laden van de pagina worden de waarden voor de properties van de componenten door onderhavige service geinitialiseerd door middel van het broadcasten van deze waarden. Elk der componenten heeft een subscription op zo'n property en dit voor elke property die van belang is voor deze component. Dit maakt dat deze opstartwaarde de component(en) bereikt zodat deze correct gerendered worden. Deze subscription zit er typisch als volgt uit:

    ngOnInit(): void{
    this.grow$ = this.storeService.bindToStateProperty(this.name,'grow')
    this.shrink$ = this.storeService.bindToStateProperty(this.name,'shrink')
    this.visible$ = this.storeService.bindToStateProperty(this.name,'visible')
    this.holdSpace$ = this.storeService.bindToStateProperty(this.name,'holdSpace')
    this.height$ = this.storeService.bindToStateProperty(this.name,'height')
    this.width$ = this.storeService.bindToStateProperty(this.name,'width')
    this.calcHeight$ = this.storeService.bindToStateProperty(this.name,'calcHeight')
    this.calcWidth$ = this.storeService.bindToStateProperty(this.name,'calcWidth')
    this.src$ = this.storeService.bindToStateProperty(this.name,'src')
    this.alt$ = this.storeService.bindToStateProperty(this.name,'alt')
    this.isColumn$ = this.storeService.bindToStateProperty(this.name,'isColumn')
    this.isRow$ = this.storeService.bindToStateProperty(this.name,'isRow')
    }

Ook wanneer de dimensies van het scherm tijdens de executie van het programma door de gebruiker zou gewijzigd worden worden de waarden van elk der properties opnieuw berekend. De subscription zorgt er dan voor dat de componenten opnieuw gerendered gaan worden.
#### Store service
Zoals reeds gezegd is deze service verantwoordelijk voor het aanmaken van de store. De store is een array van observables die elk een property voorstellen waarop componenten via de *bindToStateProperty* methode kunnen subscriben. (Het is de responsive behaviour service die verantwoordelijk is voor effectief waarde te streamen.)  
Daarnaast is de store service verantwoordelijk voor het omzetten van de configuratie properties naar component properties. Dit is het algemene principe hoe de Mouldit frontend engine werkt. (Zie hiervoor het puntje *Principe* onder het punt *Werking*.)
### Templates
Op termijn zullen hier de voorgeprogrammeerde Mouldit templates komen. Voor elk type (administratieve) applicatie zou je dan kunnen kiezen voor een bepaalde template die daar speciefiek werd voor ontworpen. Deze templates zijn, net zoals elke andere component, geen verplichting. Je kan met Mouldit perfect je eigen template gebruiken. En je kan Mouldit templates en componenten met je eigen (Angular) componenten gebruiken. De bedoeling echter is dat dit normaliter niet nodig gaat zijn. Deze laatste optie is vooral bedoeld indien Mouldit geïntegreerd moet worden in een bestaande code base. De app.component.html wordt voorlopig gebruikt als startpunt waarin ik de verschillende componenten plak die ik wil gebruiken. In principe moet je enkel vertrekken van een container component - die standaard klaar zit. In deze component worden dan alle overige componenten genest. Dit nesten moet je niet zelf doen, hiervoor gebruik je het configuratie object te vinden in het data.service.ts bestand. Op termijn zal de configuratie moeten kunnen gebeuren via een YAML document. Nog later ook via een UI.
## Werking
Het maken van een frontend voor een Mouldit app gebeurt volledig via een configuratie object (data.service.ts). Elk van de aspecten beschreven in het onderdeel Models kan je daarin configureren volgens een vast stramien, dat telkens per model beschreven staat onder het puntje Configuratie. Wanneer vervolgens met *ng serve* de software wordt gebuild en gestart zal de code in de services de app renderen met al haar functionaliteit. Voorlopig is enkel het responsive behaviour grotendeels in orde. Je kan ook al interacties configureren tussen de componenten en tussen componenten en de gebruiker van de app, maar dat moet opnieuw gereviseerd worden wegens de vele grote refactorings van de laatste weken.
### Principe
Alles vertrekt natuurlijk van de config service. Op basis van het configuratieobject wordt de store aangemaakt met de nodige observables. Elke observable in de store stelt een property voor zoals deze geconsumeerd zal worden in de view of component. De aanmaak van deze observables is gebaseerd op de manier hoe de verschillende modellen horende bij een bepaald onderdeel van de frontend (zie *Models*) werken. Je hebt een config model en daar mee gelieerd een component model. **In de store service heb je per onderdeel een methode die de omzetting doet van properties in een config model naar de properties van het respectievelijke component model.** Het zijn de properties van het componentmodel die in de store komen en waar de views op subscriben. Een voorbeeld:  
  
De *getChildLayoutComponentProps* methode zal een childLayout configuratie gaan omzetten naar de juiste component properties waarop de respectievelijke componenten kunnen subscriben. In de configuratie ga je dan een *ChildLayoutConfigPropsModel* gebruiken. Dat model zal dan door deze methode omgezet worden in een *ChildLayoutComponentPropsModel* dat vervolgens gebruikt wordt om de nodige observables in de store te zetten en de juiste waarden te streamen om geconsumeerd te worden door de views (componenten).  
De views of componenten zelf subscriben op deze stream aan waarden door middel van de *bindToStateProperty* methode. Doordat deze methode een naam verwacht, namelijk de naam van de component (elke component moet dus een unieke naam hebben), kan de engine ervoor zorgen dat elke component de juiste waarde krijgt (en niet bijvoorbeeld deze bedoeld voor een andere component).  
Het gebruik van deze waarden in de respectievelijke component verschilt van component tot component. Dat wil zeggen de render logica zelf is dus puur component gebonden. Dit neemt echter niet weg dat elke component grotendeels eenzelfde stramien volgt hierin:

- Boolean properties die ervoor zorgen dat een bepaalde css-klasse op een html tag gezet zal worden of niet. Dit kan een primeng klasse zijn of een klasse gedefinieerd in het css bestand van de component. 
- String of number properties die een bepaalde style property de juiste waarde geven.
- Sommmige css-klasses of style properties worden berekend door methodes in de component zelf omdat ze afhankelijk zijn van zaken die niet op voorhand vastgelegd kunnen worden.  
  
Een voorbeeld:

      <div
        [class]="['flex-shrink-'+((shrink$|async) === undefined? 0 : (shrink$|async)),'flex-grow-'+((grow$|async)=== undefined ? 0 : (grow$|async))]"
        [class.visibilityHidden]="!(visible$ | async) && (holdSpace$ | async) "
        [class.displayNone]="!(visible$ | async) && !(holdSpace$ | async)"
        [style.height]="height$ | async"
        [style.width]="width$ | async"
        [class.calcHeight]="setCalculatedHeight(calcHeight$|async)"
        [class.calcWidth]="setCalculatedWidth(calcWidth$|async)"
      #logo>
        <img src="assets/{{(src$|async)}}"
             alt="{{(alt$ | async)}}"
             [class.imgHeight]="isColumn$ | async"
             [class.imgWidth]="isRow$ | async">
      </div>

## Configuratie
Elk onderdeel (zie Models) wordt geconfigureerd d.m.v. een property in het configuratieObject. De naam van de variabele speelt geen rol zolang deze (voorlopig) van het volgende type is:

    contentContainer: {
      components: ComponentModel[],
      actions: ActionModel[]
    } 
    
Hier is contentContainer de naam van de variabele en daarachter heb je het TypeScript type. De modellen waarvan sprake vind je in de models folder terug. Omdat "actions" nog onder constructie is, behandelen we hierna enkel components.
### Components - Responsive Behaviour
In het ComponentModel vind je de verschillende properties die je nodig hebt voor je configuratie. Deze properties moet je configureren zodanig dat Mouldit weet hoe het de component moet renderen en dit op elk mogelijk formaat van scherm. Dit systeem wordt het *Responsive Behaviour System* genoemd. Je gebruikt het model at hand en creëert een nieuw object met als parameter eveneens het juiste model en dit voor elk type scherm. Dat zijn er momenteel vijf:
- smartphone (max-width: 480px)
- portrait-tablet (min-width: 481px, max-width: 799px)
- tablet (min-width: 800px, max-width: 1024px)
- desktop (min-width: 1025px, max-width: 1280px)
- high resolution (min-width: 1281px)

Een voorbeeld:

              dimensions: new ResponsiveDimensioningConfigModel(
              new DimensioningConfigPropsModel(
                new FixedDimensioningConfigModel(
                  DimensionValueConfigType.Hardcoded,
                  8,
                  DimensionUnitConfigType.REM),
                new FixedDimensioningConfigModel(
                  DimensionValueConfigType.Hardcoded,
                  8,
                  DimensionUnitConfigType.REM))),

Het *ResponsiveDimensioningConfigModel* verwacht maximaal 5 parameters, één voor elke schermgrootte, te beginnen bij het kleinste, de smartphone. Geen enkele parameter is verplicht. Voor elk zulk model is er voor de smartphone telkens een default waarde. Van zodra er voor een bepaalde schermgrootte een waarde is meegegeven geldt deze voor elk groter scherm, tenzij daar wel een parameter voor bestaat. De parameter in kwestie is telkens een *...ConfigPropsModel* instantie. Voor het dimenisoneren van een component is dat bijvoorbeeld het *DimensioningConfigPropsModel*. Typescript laat ook toe om elke property van zulk een model expliciet te benoemen bij aanmaak. Dat maakt het configuratieobject bevattelijker, bijvoorbeeld voor maintenance achteraf. Zo zie je in het voorbeeld van het configuratieobject zoals hierboven afgebeeld dat je properties als *name*, *type*, *position*, *visibility* hebt bij aanmaak van een specieke component. Dit is dan in plaats van het *new* keyword. **M.a.w. als je kan steeds kiezen of je de syntax van een TypeScript interface gebruikt dan wel een JavaScript class.**   
We behandelen nu voor elk der properties de configuratiemogelijkheden in detail.
#### Attributes
Dit is eenvoudig. Bij aanmaak van een instantie geef je gewoon de waarden in van elk HTML attribuut bv. een waarde voor het src attribuut, het alt attribuut enz. 
#### ChildLayout
Hoewel verbetering hier zeker nog mogelijk is qua "clean code", is dit toch al behoorlijk. De essentie is dat je als parent component (voorlopig is er maar 1 component die van deze responsive property gebruikt maakt, namelijk de Container component) gaat configureren wat er met je directe children moet gebeuren op vlak van dimensionering en positionering. Dit doe je door enerzijds configuratie mee te geven op vlak van horizontale layout - in deze context wordt met "layout" bedoeld het totaal pakket van positionering en dimensionering - alsook op vlak van verticale layout (*HorizontalLayoutConfigPropsModel* en *VerticalLayoutConfigPropsModel* repectievelijk).

#### Dimensioning

#### Overflow
Onder constructie
#### Position

#### Styling

#### Visibility


