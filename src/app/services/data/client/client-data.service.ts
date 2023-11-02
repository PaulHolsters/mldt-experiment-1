import {Injectable} from '@angular/core';
import {Action} from "../../../effectclasses/Action";
import {ActionType} from "../../../enums/actionTypes.enum";
import {Blueprint} from "./Blueprint";
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {ActionsService} from "../../actions.service";
import {Subject} from "rxjs";
import {ClientData} from "./ClientData";
import {
  ActionIdType,
  ComponentNameType,
  ConceptNameType, isActionIdType,
  isComponentName,
  isFrontendDataType, ServerDataRequestType
} from "../../../types/type-aliases";
import {ConfigService} from "../../config.service";
import {QueryService} from "../server/queries/query.service";
import {ServerData} from "../server/ServerData";
import {StateService} from "../../state.service";
import {RenderPropertiesService} from "../../renderProperties.service";
import {
  DataRecord,
  extractConcept, isDataRecord, isList, isNoValueType,
  isOutPutData, List,
  OutputData
} from "../../../types/union-types";

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  // je hebt dus een aantal events die heel typisch zijn voor een bepaalde service
  public clientDataUpdated = new Subject<ClientData>()
  public actionFinished = new Subject<{ trigger: TriggerType.ActionFinished, source: ActionIdType }>()
  public startDataServerAction = new Subject<ServerDataRequestType>()

  private _clientData: ClientData[] = []

  constructor(private actionsService: ActionsService,
              private configService: ConfigService,
              private queryService: QueryService,
              private stateService: StateService,
              private renderPropertiesService: RenderPropertiesService) {
    this.actionsService.bindToActionsEmitter.subscribe(res => {
      this.bindActions()
    })
  }

  public get clientData() {
    return [...this._clientData]
  }

  public bindActions() {
    this.actionsService.bindToAction(new Action('', ActionType.UseInstanceFromServer))?.subscribe(res => {
      if (res && isFrontendDataType(res.data, this.configService) && !isNoValueType(res.effect.action.target)) {
        let concept: ConceptNameType | undefined
        let objectId: string | undefined
        if (isDataRecord(res.data[1])) {
          if (isNoValueType(res.effect.action.conceptName)) {
            concept = extractConcept(res.data[1].__typename,this.configService)
          } else {
            concept = extractConcept(res.effect.action.conceptName,this.configService)
          }
          objectId = res.data[1].id
        } else if (res.data[1].length > 0) {
          const record = res.data[1].find(it => {
            return it !== null
          })
          if (!record) throw new Error('no valid record found')
          if (isNoValueType(res.effect.action.conceptName)) {
            concept = extractConcept(record.__typename,this.configService)
          } else {
            concept = extractConcept(res.effect.action.conceptName,this.configService)
          }
          objectId = record.id
        } else throw new Error('invalid frontend data type => list cannot be of length 0')
        // einde invullen objectId en concept
        if (!concept) throw new Error('concept name could not be reconstructed')
        if (!objectId) throw new Error('cannot get instance without a valid objectId')
        this.startDataServerAction.next({
          concept: concept,
          target: res.effect.action.target,
          action: ActionType.GetInstance,
          actionId: res.effect.action.id,
          data: objectId
        })
        this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
      } else throw new Error('target was missing from action configuration')
    })

    this.actionsService.bindToAction(new Action('', ActionType.UseInstanceFromFrontend))?.subscribe(res => {
      if (res && isFrontendDataType(res.data, this.configService) && !isNoValueType(res.effect.action.target)) {
        const cd = this.getClientDataInstanceForComponent(res.data[0])
        if (!cd) throw new Error('When you use frontend data entirely some parent component from which it came ' +
          'must still exist => configure useInstanceFromServer action instead')
        this.createClientData(res.effect.action.id, res.effect.action.target, cd.blueprint, res.data[1], [])
      }
    })

    this.actionsService.bindToAction(new Action('', ActionType.UseInstancesFromServer))?.subscribe(res => {
      // todo

    })

    this.actionsService.bindToAction(new Action('', ActionType.UseInstancesFromFrontend))?.subscribe(res => {
      // todo

    })
  }

  // client data CRUD
  public getClientDataInstanceForComponent(target: ComponentNameType): ClientData | undefined {
    return this.clientData.find(
      cd => {
        return cd.name === target
      }
    )
  }

  public getClientDataInstancesForId(target: ActionIdType): ClientData[] | undefined {
    return this.clientData.filter(cd => {
      return cd.id == target
    })
  }

  public updateClientData(searchValue: ActionIdType | ComponentNameType | {target:ComponentNameType,field:string}[], data: Blueprint | OutputData) {
    if(searchValue instanceof Array){
      searchValue.forEach(t=>{
        const instance = this.getClientDataInstanceForComponent(t.target)
        if (instance) {
          instance.update(data,t.field)
          this.clientDataUpdated.next(instance)
        } else throw new Error('Client data instance does not exist')
      })
    } else if(isComponentName(searchValue, this.configService)){
      const instance = this.getClientDataInstanceForComponent(searchValue)
      if (instance) {
        instance.update(data)
        this.clientDataUpdated.next(instance)
      } else throw new Error('Client data instance does not exist')
    } else if (isActionIdType(searchValue, this.configService)) {
      const instances = this.getClientDataInstancesForId(searchValue)
      instances?.forEach(i=>{
        i.update(data)
        this.clientDataUpdated.next(i)
      })
    } else throw new Error('id for fetching clientdata is not valid')
  }

  public createClientData(
    actionId: ActionIdType,
    componentName: ComponentNameType | { target: ComponentNameType, field: string }[],
    blueprint: Blueprint,
    data?: List | DataRecord | undefined,
    errorMessages?: string[] | undefined
  ) {
    if (blueprint) {
      for (let [k, v] of blueprint.properties.properties) {
        if (v instanceof Array && v.length === 2 && typeof v[0] === 'string' && v[1] instanceof Array && v[1].length === 2 && v[1][0] instanceof Blueprint) {
          switch (v[0]) {
            case 'list':
              // wat hier gebeurt is dat op basis van de blueprint de bijhorende data wordt opgehaald
              this.queryService.getAllRecords(v[1][0].conceptName, v[1][0]).subscribe(res => {
                const data = ServerData.getData(res.data)
                if (data?.dataMultiple) {
                  blueprint.properties.setValuesProperties(k, data.dataMultiple)
                  this.updateClientData(actionId, blueprint)
                }
              })
              break
            case 'object':
              throw new Error('object property blueprint not implemented yet')
            default:
              throw new Error('type of blueprint property unknown ' + v[0])
          }
        }
      }
      if (componentName instanceof Array) {
        componentName.forEach(name => {
          if(isDataRecord(data)){
            const fieldValue = data[name.field]
            this._clientData.push(new ClientData(actionId, name.target, blueprint, fieldValue, errorMessages))
          } else{
            debugger
            this._clientData.push(new ClientData(actionId, name.target, blueprint, undefined, errorMessages))
          }
          const cd = this.getClientDataInstanceForComponent(name.target)
          if (cd) this.clientDataUpdated.next(cd)
        })
      } else if (isComponentName(componentName, this.configService)) {
        this._clientData.push(new ClientData(actionId, componentName, blueprint, data, errorMessages))
        const cd = this.getClientDataInstanceForComponent(componentName)
        if (cd) this.clientDataUpdated.next(cd)
      } else throw new Error('When there are several targets data should be of type datarecord')
    }
  }

  private deleteClientData(name: ActionIdType | ComponentNameType, concept: ConceptNameType) {
    // todo
    // wanneer een component gedestroyed wordt
  }

  public getOutputDataForUIComponent(name: ComponentNameType): OutputData | undefined {
    const cd = this.clientData.find(cd => {
      return cd.name === name
    })
    return cd?.outputData
  }

  //***********************************     data manipulation methods         ***************************************************************/

}

/*  private createExtendedConceptModel(componentName: string, data: DataObjectModel, compConfig: ClientDataConfigModel | string[] | ClientDataConfigModel[]): ClientDataRenderModel | undefined {
      if (compConfig instanceof ClientDataConfigModel) {
        let newObj: ClientDataRenderModel = {
          conceptName: compConfig.conceptName,
          attributes: [],
          errorMessages: NoValueType.NI,
          blueprint: data.blueprint,
          record: data.dataSingle ? Object.assign(data.dataSingle,{id:data.dataSingle?.id ?? NoValueType.NA}) : undefined,
          listOfRecords: data.dataMultiple
        }
        const configCopy = {...compConfig}
        if (configCopy.attributes && configCopy.attributes instanceof Array) {
          configCopy.attributes?.forEach(attr => {
            const entry = Object.entries(data.dataSingle ?? {}).find(([k, v]) => {
              return k === attr.name
            })
            const entry2 = Object.entries(data.blueprint ?? {}).find(([k, v]) => {
              return k === attr.name
            })
            const attrExp = {...attr}
            if (entry && attr.name) {
              attrExp.dataServer = entry[1];
            }
            if (entry2 && attr.name) {
              attrExp.dataBlueprint = new Map();
              attrExp.dataBlueprint.set(attr.name, entry2[1]);
            }
            (newObj.attributes as AttributeComponentModel[]).push(Object.assign(attrExp as AttributeComponentModel, {}))
          })
          return newObj
        }
      } else {
        throw new Error('unfinished else condition')
      }
      return undefined
    }*/
/*  private isCorrectType(attr: AttributeComponentModel, componentType: ComponentType): boolean {
    switch (componentType) {
      case ComponentType.MultiSelect:
        return attr.multiselect !== undefined
      case ComponentType.NumberInput:
        return attr.number !== undefined
      case ComponentType.TextInput:
        return attr.text !== undefined
      case ComponentType.RadioButton:
        return attr.radio !== undefined
      default:
        return true
    }
  }*/

