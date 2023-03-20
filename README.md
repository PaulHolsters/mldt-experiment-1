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
Deze zitten nog niet in een aparte map, ook omdat deze zaken nog erg aan verandering onderhevig zijn. Wel zijn er momenteel twee belangrijke services geïmplementeerd: de store en de responsive behaviour service.
### Templates
Op termijn zullen hier de voorgeprogrammeerde Mouldit templates komen. 

