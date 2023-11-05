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
  isComponentName,
  isDataLink,
  isServerDataRequestType, ServerDataRequestType
} from "../types/type-aliases";
import {ActionValueModel} from "../design-dimensions/ActionValueModel";
import {ClientDataService} from "./data/client/client-data.service";
import {Effect} from "../effectclasses/Effect";
import {Blueprint} from "./data/client/Blueprint";
import {ClientData} from "./data/client/ClientData";
import {DataRecord, isClientData, List} from "../types/union-types";

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
      if (res) {
        const action = this.setConfigValueAndRebuild(res.effect.action)
        if (action) {
          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('', ActionType.SetConfirmation))?.subscribe(res => {
      if (res && res.target && res.target instanceof EventTarget) {
        const action = this.setConfirmation(res.effect.action, res.data, res.target)
        if (action) {
          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('', ActionType.SetRenderProperty))?.subscribe(res => {
      if (res) {
        const action = this.setProperty(res.effect.action, res.data)
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
    // type BlueprintValue = RenderPropertyType|['enum',string[]]|['object',[Blueprint,DataRecord]]|['list',[Blueprint,List]]
    if (isClientData(res.data)) {
      // todo voor de multilist als je twee properties wil tonen moet je eerst een manipulatie doen en dan deze array doorgeven
      //      hoe pak je dit best aan?
      const dl = this.configService.getConfigFromRoot(res.data.name)
      // uit de clientData moet je de desbetreffende property halen
      // hier moet je dan een datalink van maken want anders weet je nooit precies welke value je wil

      // todo hoe regelen we dat?
      // uit cd => name component => uit actions haal je het overeenkomstige form object
      // daaruit haal je via de naam van de comp het bijhorend field (string of array)

      // via deze prop (string of array) geraak je aan de blueprintValue
      // via deze bp value kan je de nodige propvalue naar de frontend sturen door deze via de DD op te vragen
      if (dl) {
        const value = res.data.blueprint.getBlueprintValueForDataLink(res.effect.action.conceptName)
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
        })
      }
    }
    return true
  }

  private outputData(
    res: {
      effect: Effect,
      data: Blueprint | [ComponentNameType, DataRecord | List] | ClientData | string | ServerDataRequestType | DataRecord | List,
      target: EventTarget | undefined }
  ) {
    if(isClientData(res.data)){
      const cd = res.data
      this.renderPropertiesService.getStatePropertySubjects().filter(ps => {
        return  ps.componentName === cd.name
      }).forEach(propSubj => {
        switch (propSubj.propName) {
          case PropertyName.outputData:
            propSubj.propValue.next(cd.outputData)
            break
          case PropertyName.conceptBlueprint:
            propSubj.propValue.next(cd.blueprint)
            break
          case PropertyName.dataLink:
            const concept = cd ? this.configService.getActions(cd.id)?.conceptName : undefined
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

  private setConfigValueAndRebuild(action: Action) {
    const currentAppConfig = this.configService.appConfig
    if (currentAppConfig && typeof action.target === 'string') {
      let config = this.configService.getConfigFromRoot(action.target)
      if (!config) throw new Error('action was not configured correctly')
      if (config.replace && (action.value instanceof ActionValueModel)) {
        // ResponsiveSizeConfigModel | ResponsiveOverflowConfigModel | ResponsiveContainerChildLayoutConfigModel | ResponsiveVisibilityConfigModel
        if (action.value.value !== 'list' && action.value.value !== 'object' && typeof action.value.value !== 'function' && typeof action.value.value !== 'boolean')
          config.replace(action.value.name, action.value.value)
        this.configService.saveConfig(currentAppConfig)
        this.RBS.rebuildUI()
        return true
      }
    }
    return false
  }

  private setProperty(action: Action, data?: any) {
    let val
    if (typeof ((action.value as ActionValueModel).value) === 'function') {
      val = ((action.value as ActionValueModel).value as Function)(this.stateService)
    }
    if (!val) val = (action.value as ActionValueModel).value
    // todo maak methode waarmee je een reeks aan property-values naar een component kan sturen
    this.renderPropertiesService.getStatePropertySubjects().find(prop => {
      if (prop.componentName === action.target && action.value instanceof ActionValueModel)
        return prop.propName === PropertyName.data
      return false
    })?.propValue.next(data)
    this.renderPropertiesService.getStatePropertySubjects().find(prop => {
      if (prop.componentName === action.target && action.value instanceof ActionValueModel)
        return prop.propName === action.value.name
      return false
    })?.propValue.next(val)
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

