import {Injectable} from '@angular/core';
import {ActionType} from "./enums/actionTypes.enum";
import {ActionSubType} from "./enums/actionSubTypes.enum";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ActionModel} from "./models/ActionModel";
import {ActionSubjectModel} from "./models/ActionSubject";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class ActionsService{
  private actionSubjects:ActionSubjectModel[]|undefined
  public bindToActionsEmitter = new Subject()
  public bindToAction(actionType:ActionType,actionSubtype:ActionSubType):Observable<{action:ActionModel,data:any}|undefined>|undefined{
    // todo maak een extra actie bij in de root waarbij de create ActionSubjects method wordt opegroepen na rootcomponentready
    //    en wel in die volgorde dat de config is ingeladen in de configservice
    return this.actionSubjects?.find(actionSubject => {
      return actionSubject.actionType === actionType && actionSubject.actionSubType === actionSubtype
    })?.action$
  }
  public createActionSubjects(){
    // todo deze methode word geccalled wanneer configservice nog niet klaar is omdat rootcomponent event nog niet gelopen heeft
    //    maw je moet nu ALLES met events doen of het werkt niet
    this.actionSubjects = []
    this.configService.appConfig?.userConfig.actions.forEach(action=>{
      const subj = new BehaviorSubject<{action: ActionModel; data: any}|undefined>(undefined)
      const newActionSubject:ActionSubjectModel = {
        actionType:action.actionType,
        actionSubType:action.actionSubType,
        subj:subj,
        action$:subj.asObservable()
      }
      this.actionSubjects?.push(newActionSubject)
    })
    // todo hier een soort event emitten waar bij aanmaak wordt op ingeschreven door de verschillende services
    //      op het moment dat het ook effectief doorkomt => dan bindToAction ...
    this.bindToActionsEmitter.next(undefined)
    debugger

  }
  public triggerAction(action: ActionModel,data?:string):void{
    this.actionSubjects?.find(subj => {
      return subj.actionType === action.actionType && subj.actionSubType === action.actionSubType
    })?.subj.next({action:action,data:data})
  }
  constructor(private configService:ConfigService) {
  }
}
