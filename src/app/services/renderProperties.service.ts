import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {StatePropertySubjectModel} from "../models/StatePropertySubject";
import {CalculationModel} from "../models/CalculationModel";
import {ComponentModel} from "../models/ComponentModel";
import {PositioningComponentPropsModel} from "../models/Positioning/self/PositioningComponentPropsModel";
import {AttributesComponentPropsModel} from "../models/Attributes/AttributesComponentPropsModel";
import {VisibilityRenderModel} from "../models/Visibility/VisibilityRenderModel";
import {OverflowComponentPropsModel} from "../models/Overflow/self/OverflowComponentPropsModel";
import {StylingComponentPropsModel} from "../models/Styling/StylingComponentPropsModel";
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {StateService} from "./state.service";
import {Action} from "../effectclasses/Action";
import {ActionType} from "../enums/actionTypes.enum";
import {TriggerType} from "../enums/triggerTypes.enum";
import {ActionIdType} from "../types/type-aliases";

@Injectable({
  providedIn: 'root'
})
export class RenderPropertiesService implements OnInit {
  public actionFinished = new Subject<{ trigger: TriggerType.ActionFinished, source: ActionIdType }>()
  constructor(private actionsService: ActionsService, private configService: ConfigService, private stateService: StateService) {
    this.actionsService.bindToActionsEmitter.subscribe(res => {
      this.bindActions()
    })
  }
  ngOnInit(): void {
  }
  public bindActions() {
    this.actionsService.bindToAction(new Action('', ActionType.CreateStore))?.subscribe(res => {
      if (res) {
        this.createStore()
        this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
      }
    })
  }
  private statePropertySubjects: StatePropertySubjectModel[] = []
  public getStatePropertySubjects(): StatePropertySubjectModel[] {
    return this.statePropertySubjects.slice()
  }
  public hasStateProperty(compName: string, propName: string): boolean {
    return this.statePropertySubjects.find(propSubj => {
      return propSubj.propName === propName && propSubj.componentName === compName
    }) !== undefined
  }
  public getStatePropertySubject(compName: string, propName: string): StatePropertySubjectModel | undefined {
    return this.statePropertySubjects.find(ps => {
      return ps.componentName === compName && ps.propName === propName
    })
  }
  private createProps(component: ComponentModel) {
    this.stateService.getProperties(component.type)?.forEach((v, k) => {
      const propSubj = new BehaviorSubject<any | undefined>(v)
      this.statePropertySubjects.push({
        componentName: component.name,
        propName: k,
        propValue: propSubj,
        prop$: propSubj.asObservable()
      })
    })
  }
  private createStore() {
    this.configService.getAllComponents().forEach(c => {
      this.createProps(c)
    })
  }
  public bindToStateProperty(componentName: string, propName: string):
    Observable<
      PositioningComponentPropsModel |
      AttributesComponentPropsModel |
      VisibilityRenderModel |
      OverflowComponentPropsModel |
      StylingComponentPropsModel |
      string |
      number |
      boolean |
      number[] |
      CalculationModel |
      ComponentModel |
      ComponentModel[]> |
    undefined {
    // todo create a union type to denote this
    return this.statePropertySubjects.find(state => {
      return state.componentName === componentName && state.propName === propName
    })?.prop$
  }

}

