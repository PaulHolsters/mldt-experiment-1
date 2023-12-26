import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {StateService} from "./state.service";
import {Action} from "../effectclasses/Action";
import {ActionType} from "../enums/actionTypes.enum";
import {TriggerType} from "../enums/triggerTypes.enum";
import {ActionIdType, EffectIdType} from "../types/type-aliases";
import {StatePropertySubjectModel} from "../design-dimensions/StatePropertySubject";
import {CalculationModel} from "../design-dimensions/CalculationModel";
import {ComponentModelType, OutputData, RenderModelType} from "../types/union-types";
import {ComponentType} from "../enums/componentTypes.enum";
import {PropertyName} from "../enums/PropertyNameTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class RenderPropertiesService implements OnInit {
  public actionFinished = new Subject<{ trigger: TriggerType.ActionFinished, source: [EffectIdType,number|undefined]|ActionIdType }>()

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

  public createProps(component: ComponentModelType, index?: number) {
    this.stateService.getProperties(component.type)?.forEach((v, k) => {
      if (k === PropertyName.propsByData) {
        // todo de buffer size moet gelijk zijn aan het aantal design dimensions voor het desbetreffende type
        const propSubj = new ReplaySubject<any | undefined>(10)
        this.statePropertySubjects.push({
          componentName: component.name,
          propName: k,
          index: index,
          propValue: propSubj,
          prop$: propSubj.asObservable()
        })
      } else {
        const propSubj = new BehaviorSubject<any | undefined>(v)
        this.statePropertySubjects.push({
          componentName: component.name,
          propName: k,
          index: index,
          propValue: propSubj,
          prop$: propSubj.asObservable()
        })
      }
    })
  }

  private createStore() {
    this.configService.getAllComponents().forEach(c => {
      this.createProps(c)
    })
  }

  // todo laat toe dat je ook kan binden met een bepaalde index + name
  public bindToStateProperty(componentName: string, propName: string, index?: number):
    Observable<
      RenderModelType |
      OutputData |
      CalculationModel |
      ComponentModelType |
      ComponentModelType[]> |
    undefined {
    // todo create a union type to denote this
    return this.statePropertySubjects.find(state => {
      // todo hier zoek je dan ook op index
      return state.componentName === componentName && state.propName === propName && state.index === index
    })?.prop$
  }

}

