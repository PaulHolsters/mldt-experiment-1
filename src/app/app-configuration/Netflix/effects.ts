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

const setFooterHeight = (stateService: StateService, data: any): string => {
  return getComputedStyle(data.el.nativeElement).height // 50px
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
    new ServerAction('removeMovieFromList','content')
  ),
]
// todo als de scherm breedte manueel gewijzigd wordt dan gaan bepaalde opstart eigenschappen niet meegenomen worden
//  zoals deze compute property
