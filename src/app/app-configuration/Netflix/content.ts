import {Container} from "../../components/container/Container";
import {Card} from "../../components/card/Card";
import {Button} from "../../components/button/Button";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import UtilFunctions from "../../utils/utilFunctions";
import {Datalink} from "../../design-dimensions/datalink";
import {CursorValues} from "../../enums/cursorValues.enum";

export const content = new Container('content')
const card = new Card('movie')
card.structural.smartphone
  .setPropertyByData(PropertyName.title,new Datalink('title'))
  .setPropertyByData(PropertyName.subtitle,new Datalink('release_year'))
  .setCursor(CursorValues.Pointer)
const btnContainer = new Container('btn-container')
const inList = new Datalink('isInList')
// bij het aanmaken van een button staat de default config voor visible op true
const add = new Button('add')
add.structural.smartphone.label = 'voeg toe'
// dit zal de default waarde voor visible vervolgens gaan vervangen door een waarde
// bepaald door data en deze data wordt door de not functie gejaagd
add.visibility.smartphone.setPropertyByData(PropertyName.visible,inList,[UtilFunctions.not])
const remove = new Button('remove')
remove.structural.smartphone.label = 'verwijder'
remove.visibility.smartphone.setPropertyByData(PropertyName.visible,inList)
btnContainer.setChildren([add,remove])
card.contentInjection.smartphone.footer = btnContainer
card.structural.smartphone.repeater = true
content.setChildren([card])
