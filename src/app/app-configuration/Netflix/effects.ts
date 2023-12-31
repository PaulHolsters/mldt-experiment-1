import {Effect} from "../../effectclasses/Effect";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {Action} from "../../effectclasses/Action";
import {ActionType} from "../../enums/actionTypes.enum";
import {NoValueType} from "../../enums/NoValueTypes.enum";
import {StateService} from "../../services/state.service";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {ActionValueModel} from "../../design-dimensions/ActionValueModel";
import {Trigger} from "../../effectclasses/Trigger";
import {ServerAction} from "../../effectclasses/ServerAction";
import {EventsService} from "../../services/events.service";

// todo als de scherm breedte manueel gewijzigd wordt dan gaan bepaalde opstart eigenschappen niet meegenomen worden
//  zoals deze compute property
const setFooterHeight = (stateService: StateService, data: any): string => {
  return getComputedStyle(data.el.nativeElement).height // 50px
}
const allowDetails = (eventService: EventsService,data:any):boolean =>{
  return !(eventService.hasEffect(['removing movie from my list',data[1]])
    || eventService.hasEffect(['adding movie to my list',data[1]]))
}
export const effects: Effect[] = [
  new Effect(
    new Trigger(TriggerType.ComponentReady,'menu'),
    // todo maak verschillende soorten acties zodat je nergens als parameter een novaluetype moet meegeven
    new Action(
      'UI-setFooterHeight',
      ActionType.SetRenderProperty,
      'footer',
      NoValueType.NO_VALUE_ALLOWED,
      new ActionValueModel(PropertyName.height,setFooterHeight))),
  new Effect(
    new Trigger(TriggerType.MenuItemSelected,['menu','films']),
    new ServerAction('getAllMovies','content')
  ),
  new Effect(
    new Trigger(TriggerType.ComponentClicked,'remove'),
    new ServerAction('removeMovieFromList','content'),
    'removing movie from my list'
  ),
  new Effect(
    new Trigger(TriggerType.ComponentClicked,'add'),
    // todo de vraag die zich stelt is : wanneer is een actie eigenlijk "finished"?
    new ServerAction('addMovieToList','content'),
    'adding movie to my list'
  ),
  new Effect(
    new Trigger(TriggerType.ComponentClicked,'movie','movie-card-clicked',allowDetails),
    new Action('showMovieDetails',ActionType.SetRenderProperty,'movie-details-dialog',NoValueType.NO_VALUE_ALLOWED,
      new ActionValueModel(PropertyName.visible, true)),
    NoValueType.NO_VALUE_NEEDED
  ),
  // todo krijg dit aan de praat
  new Effect(
    new Trigger(TriggerType.ComponentHovered,'movie'),
    new Action('showPointer',ActionType.SetRenderProperty,'movie',NoValueType.NO_VALUE_ALLOWED,
      new ActionValueModel(PropertyName.cursor, 'pointer'))
  ),
]

