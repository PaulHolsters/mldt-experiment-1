import {Injectable} from '@angular/core';
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StateService} from "./state.service";
import {RenderPropertiesService} from "./renderProperties.service";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {ServerDataService} from "./data/server/server-data.service";
import {Action} from "../effectclasses/Action";
import {ActionType} from "../enums/actionTypes.enum";
import {TriggerType} from "../enums/triggerTypes.enum";
import {
  ActionIdType,
  ComponentNameType,
  isDataLink,
  isFormTargetType,
  ServerDataRequestType
} from "../types/type-aliases";
import {ActionValueModel} from "../design-dimensions/ActionValueModel";
import {ClientDataService} from "./data/client/client-data.service";
import {Effect} from "../effectclasses/Effect";
import {Blueprint} from "./data/client/Blueprint";
import {ClientData} from "./data/client/ClientData";
import {ComponentModelType, DataRecord, isClientData, List} from "../types/union-types";
import {NoValueType} from "../enums/NoValueTypes.enum";
import {
  ResponsiveContainerChildLayoutConfigModel
} from '../design-dimensions/ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel';
import {ResponsiveOverflowConfigModel} from '../design-dimensions/Overflow/ResponsiveOverflowConfigModel';
import {ResponsiveSizeConfigModel} from '../design-dimensions/Size/ResponsiveSizeConfigModel';
import {ResponsiveVisibilityConfigModel} from '../design-dimensions/Visibility/ResponsiveVisibilityConfigModel';

@Injectable({
  providedIn: 'root'
})
export class UiActionsService {
  public actionFinished = new Subject<{ trigger: TriggerType.ActionFinished, source: ActionIdType }>()

  constructor(
    private renderPropertiesService: RenderPropertiesService,
    private stateService: StateService,
    private configService: ConfigService,
    private actionsService: ActionsService,
    private RBS: ResponsiveBehaviourService,
    private dataService: ServerDataService,
    private clientDataService: ClientDataService) {
    this.actionsService.bindToActionsEmitter.subscribe(res => {
      this.bindActions()
    })
  }

  public bindActions() {
    this.actionsService.bindToAction(new Action('', ActionType.SetLocalConfigurationValueAndRebuild))?.subscribe(res => {
      if (res && res.effect.action instanceof Action) {
        const action = this.setConfigValueAndRebuild(res.effect.action)
        if (action) {
          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('', ActionType.SetConfirmation))?.subscribe(res => {
      if (res && res.target && res.target instanceof EventTarget && res.effect.action instanceof Action) {
        const action = this.setConfirmation(res.effect.action, res.data, res.target)
        if (action) {
          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('', ActionType.SetRenderProperty))?.subscribe(res => {
      if (res && res.effect.action instanceof Action && !(res.source instanceof Array)) {
        const action = this.setProperty(res.effect.action, res.data, res.source)
        if (action) {
          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('', ActionType.UpdateDataRelatedProperties))?.subscribe(res => {
      if (res) {
        const action = this.updateDataRelatedProps(res)
        if (action) {
          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('', ActionType.UpdateDataProperties))?.subscribe(res => {
      if (res) {
        const action = this.outputData(res)
        if (action) {
          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
        }
      }
    })
  }

  private updateDataRelatedProps(res: {
    effect: Effect,
    data: Blueprint | [ComponentNameType, DataRecord | (DataRecord | null)[]] | ClientData | string | ServerDataRequestType | DataRecord | List,
    target: EventTarget | undefined
  }) {
    if (isClientData(res.data)) {
      const dl = this.configService.getConfigFromRoot(res.data.name)
      if (dl) {
        const target = this.configService.effects.map(e => {
          return e.action.target
        }).find(t => {
          return typeof t !== 'string' && t.controls.map(c => {
            return c.target
          }).includes(dl.name)
        })
        if (isFormTargetType(target)) {
          const field = target.controls.find(f => {
            return f.target === dl.name
          })?.field
          if (field) {
            // todo rewrite als je een bepaald stuk eruit wilt halen
/*            const value = res.data.blueprint.getBlueprintValueForDataLink(field)
            const input: {
              [key: string]: any
            } | undefined
              = dl.dataInput?.getDataInputRenderProperties(this.RBS.screenSize,
              value)
            const repres: {
              [key: string]: any
            } | undefined
              = dl.dataRepresentation?.getDataRepresentationRenderProperties(this.RBS.screenSize,
              value)
            this.renderPropertiesService.getStatePropertySubjects().filter(sp => {
              return sp.componentName === dl.name
            }).forEach(prop => {
              if (input && prop.propName in input) {
                prop.propValue.next(input[prop.propName])
              }
              if (repres && prop.propName in repres) {
                prop.propValue.next(repres[prop.propName])
              }
            })*/
          }
        } else{
          // a normal component as target
          // dit zal dan wellicht enkel gaan over data representation
        }
      }
    }
    return true
  }

  private outputData(
    res: {
      effect: Effect,
      data: Blueprint | [ComponentNameType, DataRecord | List] | ClientData | string | ServerDataRequestType | DataRecord | List,
      target: EventTarget | undefined
    }
  ) {
    if (isClientData(res.data)) {
      const cd = res.data
      this.renderPropertiesService.getStatePropertySubjects().filter(ps => {
        return ps.componentName === cd.name
      }).forEach(propSubj => {
        switch (propSubj.propName) {
          case PropertyName.outputData:
            propSubj.propValue.next(cd.outputData)
            break
          case PropertyName.conceptBlueprint:
            //propSubj.propValue.next(cd.blueprint)
            break
          case PropertyName.dataLink:
            const action = this.configService.getActions(cd.id)
              const concept = cd && action instanceof Action ? action.conceptName : undefined
              if (isDataLink(concept, this.configService)) {
                propSubj.propValue.next(concept)
              }
            break
        }
      })
    } else {
      this.clientDataService.clientData.forEach(cd => {
        // todo
      })
    }
    return true
  }
  private replace(key:string|undefined,config:ComponentModelType,value:ResponsiveSizeConfigModel
    |ResponsiveOverflowConfigModel|ResponsiveContainerChildLayoutConfigModel|ResponsiveVisibilityConfigModel|undefined){
    if(key){
      Reflect.set(config,key,value)
    }
  }

  private setConfigValueAndRebuild(action: Action) {
    // todo verwijder alle clientdata
    const currentAppConfig = this.configService.appConfig
    if (currentAppConfig && typeof action.target === 'string') {
      let config = this.configService.getConfigFromRoot(action.target)
      if (!config) throw new Error('action was not configured correctly')
      if ((action.value instanceof ActionValueModel)) {
        // ResponsiveSizeConfigModel | ResponsiveOverflowConfigModel | ResponsiveContainerChildLayoutConfigModel | ResponsiveVisibilityConfigModel
        if (action.value.value !== 'list' && action.value.value !== 'object' && typeof action.value.value !== 'function' && typeof action.value.value !== 'boolean')
          this.replace(action.value.name,config, action.value.value)
        this.configService.saveConfig(currentAppConfig)
        this.RBS.rebuildUI()
        return true
      }
    }
    return false
  }

  private setProperty(action: Action, data?: any, source?: ComponentNameType) {
    if (typeof action.target === 'string'
      && action.value instanceof ActionValueModel
      && action.value.name === PropertyName.visible
      && action.value.value === false) {
      const children = this.configService.getAllDecendants(action.target)
      children.forEach(ch => {
        this.clientDataService.destroy(ch.name)
      })
    }
    let val: string | boolean | Function | ResponsiveSizeConfigModel | ResponsiveOverflowConfigModel | ResponsiveContainerChildLayoutConfigModel | ResponsiveVisibilityConfigModel | undefined
    if (typeof ((action.value as ActionValueModel).value) === 'function') {
      val = ((action.value as ActionValueModel).value as Function)(this.stateService,data)
    }
    if (!val) val = (action.value as ActionValueModel).value
    // todo maak methode waarmee je een reeks aan property-values naar een component kan sturen

    this.renderPropertiesService.getStatePropertySubjects().find(prop => {
      if (prop.componentName === action.target && action.value instanceof ActionValueModel)
        return prop.propName === PropertyName.data
      return false
    })?.propValue.next(data)

    if (action.target === NoValueType.CALCULATED_BY_ENGINE && source) {
      this.renderPropertiesService.getStatePropertySubjects().filter(prop => {
        const desc = this.configService.getAllDecendants(source).map(d => {
          return d.name
        })
        if (desc.includes(prop.componentName) && action.value instanceof ActionValueModel) {
          return prop.propName === action.value.name
        }
        return false
      }).forEach(p => {
        p.propValue.next(val)
      })
    } else {
      this.renderPropertiesService.getStatePropertySubjects().find(prop => {
        if (prop.componentName === action.target && action.value instanceof ActionValueModel) {
          return prop.propName === action.value.name
        }
        return false
      })?.propValue.next(val)
      return true
    }
    return true
  }

  private setConfirmation(action: Action, data?: any, target?: EventTarget) {
    /*    if(action.target!==NoValueType.NO_VALUE_ALLOWED){
          let comp = this.configService.getConfigFromRoot(action.target)
          if(comp && comp.attributes && this.RBS.screenSize){
            const attrVal = this.configService.getAttributeValue(this.RBS.screenSize,PropertyName.confirmationModel,comp.attributes)
            const cm = new ConfirmationModel(attrVal.icon,attrVal.message, target,data)
            this.renderPropertiesService.getStatePropertySubjects().find(prop=>{
              if(prop.componentName === action.target)
                return prop.propName === PropertyName.confirmationModel
              return false
            })?.propValue.next(cm)
          } else throw new Error('Component with name '+action.target+ ' could not be found')
        }*/
    return true
  }
}

