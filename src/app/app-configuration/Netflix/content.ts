import {Container} from "../../components/container/Container";
import {Card} from "../../components/card/Card";

export const content = new Container('content')
const card = new Card('movie')
card.structural.smartphone.setTitle('Headerke').setSubTitle('klein headerke')
card.structural.smartphone.repeater = true
content.setChildren([card])

