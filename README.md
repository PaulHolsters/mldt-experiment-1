# Mouldit
## Code structure
Elk onderdeel van Mouldit zit in een aparte directory - of zal nog in een aparte directory komen te zitten. Hieronder volgen deze mappen met een korte beschirjving wat er in zit en wat het doet.
### Models
Hierin vind je de modellen terug die de eerste feature van Mouldit, het Responsive Behaviour System, volledig beschrijven. Het systeem kent (voorlopig) de volgende onderdelen:
- Attributes: dit zijn HTML attributen die specifiek voor bepaalde componenten bestaan, maar niet per se voor andere. Voorbeeld: het src attributen van een img tag.
- Diemnsioning: deze modellen bepalen de dimensies van een component, meerbepaald de hoogte en/of de breedte.
- Overflow: deze modellen bepalen alles i.v.m. overflow, bijvoorbeeld wanneer de scrollfucntie moet getoond worden
- Positioning: deze modellen bepalen waar de componenten op de pagina gerendered moeten worden.
- Styling: deze modellen bepalen het uiterlijk van de component, zaken zoals de kleur van de achtergrond, ...
- Visibility: deze modellen bepalen alles omtreznt de zichtbaarheid van een component, met als meest rudimentaire bepaling of een component al dan niet zichtbaar is
### Enums
Hier bevinden zich alle binnen Mouldit gebruikte enums. De bedoeling van deze enums is hoofdzakelijk om als gebruiker snel een bepaalde configuratie te kunnen doen, zonder dat je strings moet gaan gebruiken. (Kan je in een YAML file ook enums gebruiken, want het zou stom zijn moest je daar ineens terug strings moet gaan zitten typen niet?)
### Components
Alle UI componenten die je kan gebruiken zitten in deze folder. Voorlopig zijn dit er nog maar een paar, namelijk net zoveel als ik nodig heb om nieuw ontwikkelde zaken te kunnen maken en testen. Aldus zal deze verzameling componenten langzamerhand groter worden te samen met het aantal opties wat betreft configuratie van deze componenten.
### Services
Deze zitten nog niet in een aparte map, ook omdat deze zaken nog erg aan verandering onderhevig zijn. Wel zijn er momenteel twee belangrijke services geïmplementeerd: de store en de responsive behaviour service. In de data service zit het javascript configuratie object. Met dit object configureer je de Mouldit forntend bij elkaar. In het app.component.html bestand zit dan ook maar 1 component, namelijk een container component die als start dient voor je applicatie.
### Templates
Op termijn zullen hier de voorgeprogrammeerde Mouldit templates komen. Voor elk type (administratieve) applicatie zou je dan kunnen kiezen voor een bepaalde template die daar speciefiek werd voor ontworpen. Deze templates zijn, net zoals elke andere component, geen verplichting. Je kan met Mouldit perfect je eigen template gebruiken. En je kan Mouldit templates en componenten met je eigen (Angular) componenten gebruiken. De bedoeling echter is dat dit normaliter niet nodig gaat zijn. Deze laatste optie is vooral bedoeld indien Mouldit geïntegreerd moet worden in een bestaande code base. De app.component.html wordt voorlopig gebruikt als startpunt waarin ik de verschillende componenten plak die ik wil gebruiken. In principe moet je enkel vertrekken van een container component - die standaard klaar zit. In deze component worden dan alle overige componenten genest. Dit nesten moet je niet zelf doen, hiervoor gebruik je het configuratie object te vinden in het data.service.ts bestand. Op termijn zal de configuratie moeten kunnen gebeuren via een YAML document. Nog later ook via een UI.
## Werking
Het maken van een frontend voor een Mouldit app gebeurt volledig via een configuratie object (data.service.ts). Elk van de aspecten beschreven in het onderdeel Models kan je daarin configureren volgens een vast stramien, dat telkens per model beschreven staat onder het puntje Configuratie. Wanneer vervolgens met ng serve de software wordt gebuild en gestart zal de code in de services de app renderen met al haar functionaliteit. Voorlopig is enkel het responsive behaviour grotendeels in orde. Je kan ook al interacties configureren tussen de componenten en tussen componenten en de gebruiker van de app, maar dat moet opnieuw gereviseerd worden wegens de vele grote refactorings van de laatste weken. De precies werking van de services staat onder het puntje Werking van elke service.
## Configuratie
Elk onderdeel (zie Models) wordt geconfigureerd d.m.v. een property in het configuratieObject. De naam van de variabele speelt geen rol zolang deze (voorlopig) van het volgende type is:

    contentContainer: {
      components: ComponentModel[],
      actions: ActionModel[]
    } 
    
Hier is contentContainer de naam van de variabele en daarachter heb je het TypeScript type. De modellen waarvan sprake vind je in de models folder terug. Omdat "actions" nog onder constructie is, behandelen we hierna enkel components.
### Components - Responsive Behaviour
In het ComponentModel vind je de verschillende properties die je nodig hebt voor je configuratie. Deze properties moet je configureren zodanig dat Mouldit weet hoe het de component moet renderen en dit op elk mogelijk formaat van scherm. Dit systeem wordt het *Responsive Behaviour System* genoemd. 

We behandelen hierna elk aspect (property).
#### Dimensions

