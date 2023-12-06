import {Container} from "../../components/container/Container";
import {Card} from "../../components/card/Card";
import {Button} from "../../components/button/Button";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import UtilFunctions from "../../utils/utilFunctions";

export const content = new Container('content')
const card = new Card('movie')
card.structural.smartphone
  .setPropertyByData(PropertyName.title,new DataLink('title'))
  .setPropertyByData(PropertyName.subtitle,new DataLink('subtitle'))
const btnContainer = new Container('btn-container')
const inList = new Datalink('isInList')
const add = new Button('add')
add.structural.smartphone.label = 'voeg toe'
add.visibility.smartphone.setPropertyByData(PropertyName.visible,inList,[UtilFunctions.not])
const remove = new Button('remove')
remove.structural.smartphone.label = 'verwijder'
remove.visibility.smartphone.setPropertyByData(PropertyName.visible,inList)
btnContainer.setChildren([add,remove])
card.contentInjection.smartphone.footer = btnContainer
card.structural.smartphone.repeater = true
content.setChildren([card])

