import {DataRecord, isDataRecord, isList, isNoValueType, List} from "./union-types";
import {ConfigService} from "../services/config.service";
import {ExtraColumnModel} from "../design-dimensions/ContentInjection/table/ExtraColumnModel";
import {ActionType} from "../enums/actionTypes.enum";
import {Action} from "../effectclasses/Action";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";
import {config} from "rxjs";

export type ConceptNameType = string
export type ComponentNameType = string
export type ActionIdType = string
export type TriggerIdType = string
export type EffectIdType = string
export type ObjectIdType = string
export type ConditionType = string
export type LabelType = { label: string, value: string }
export type DataLink = string[]
export type FrontendDataType = [ComponentNameType, DataRecord | List]
export type TypeName = string
export type HtmlType = string
export type PropsByDataType = Array<DataDependedPropType>
export type DataDependedPropType = [PropertyName, Datalink, Function[]]
export const isPropsByDataType = function isPropsByDataType(data:unknown): data is PropsByDataType{
  if(data instanceof Array){
    return data.filter(d=>{
      return d.length!==3||typeof d[0] !== 'string'||!(d[1] instanceof Datalink)||(d[2] && !(d[2] instanceof Array))
    }).length === 0
  }
  return false
}
export const isTypeName = function isTypeName(data: unknown): data is TypeName {
  return typeof data === 'string' && data.endsWith('Data') && data.length > 5
}
export const isFrontendDataType = function isFrontendDataType(data: unknown, config: ConfigService): data is FrontendDataType {
  return (data instanceof Array) && data.length === 2 && isComponentName(data[0], config) && (isDataRecord(data[1]) || isList(data[1]))
}
export type FormTargetType = {
  form: ComponentNameType,
  controls: {target: ComponentNameType, field: string}[
  ],
  submit: ComponentNameType
}
export const isFormTargetType = function isFormTargetType(data:unknown):data is FormTargetType{
  return data !== null && typeof data === 'object' && !(data instanceof Array)
    && data.hasOwnProperty('form')
    && data.hasOwnProperty('controls')
    && data.hasOwnProperty('submit')
}

export type ServerDataRequestType = {
  concept: ConceptNameType, target: ComponentNameType | FormTargetType, action: ActionType, actionId: ActionIdType, data: string
}
export const isServerDataRequestType = function isServerDataRequestType(data: unknown): data is ServerDataRequestType {
  return data !== null && typeof data === 'object' && !(data instanceof Array)
    && data.hasOwnProperty('concept')
    && data.hasOwnProperty('action')
    && data.hasOwnProperty('actionId')
    && data.hasOwnProperty('target')
    && data.hasOwnProperty('data')
}
export const isConceptName = function isConceptName(data: unknown, config: ConfigService): data is ConceptNameType {
  if (typeof data !== 'string' && !(data instanceof Array)) return false
  if (isNoValueType(data)) return false;
  return config.effects.filter(eff=>{
    return eff.action instanceof Action;
  }).map(eff => {
    return (eff.action as Action).conceptName
  }).includes(data)
}
export const isDataLink = function isDataLink(data: unknown, config: ConfigService): data is DataLink {
  return data instanceof Array && isConceptName(data, config)
}
export const isExtraColumnModelArray = function isExtraColumnModelArray(data: unknown): data is ExtraColumnModel[] {
  if (!(data instanceof Array)) return false
  if (data.length === 0) return true
  return data.filter(it => {
    return !(it instanceof ExtraColumnModel)
  }).length === 0
}
export const isComponentName = function isComponentName(data: unknown, config: ConfigService): data is ComponentNameType {
  if (typeof data !== 'string') return false
  if (isNoValueType(data)) return false
  return config.getConfigFromRoot(data) !== undefined
}
export const isActionIdType = function isActionIdType(data: unknown, config: ConfigService): data is ActionIdType {
  if (typeof data !== 'string') return false
  if (isNoValueType(data)) return false
  return config.effects.map(eff => {
    return eff.action.id
  }).includes(data)
}
export const isObjectIdType = function isObjectIdType(data: unknown): data is ObjectIdType {
  if (typeof data !== 'string') return false
  return !isNoValueType(data)
}
