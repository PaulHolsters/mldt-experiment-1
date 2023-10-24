import {DataRecord, isNoValueType} from "./union-types";
import {ConfigService} from "../services/config.service";
import {ExtraColumnModel} from "../design-dimensions/ContentInjection/table/ExtraColumnModel";

export type ConceptNameType = string
export type ComponentNameType = string
export type ActionIdType = string
export type TriggerIdType = string
export type EffectIdType = string
export type BlueprintType = Map<string,[string,[BlueprintType,DataRecord[]|DataRecord]|string[]]|string>
export type ObjectIdType = string
export type ConditionType = string
export type LabelType = {label:string,value:string}
export type DataLink = string[]
export type BlueprintStr = string
export const isConceptName = function isConceptName(data:unknown,config:ConfigService): data is ConceptNameType{
  if(typeof data !== 'string') return false
  if(isNoValueType(data)) return false
  return config.effects.map(eff=>{
    return eff.action.conceptName
  }).includes(data)
}
export const isExtraColumnModelArray = function isExtraColumnModelArray(data:unknown): data is ExtraColumnModel[]{
  if(!(data instanceof Array)) return false
  if(data.length===0) return true
  return data.filter(it=>{
    return !(it instanceof ExtraColumnModel)
  }).length === 0
}
export const isDataLink = function isDataLink(data:unknown,config:ConfigService):data is DataLink{
if(data instanceof Array && data.length===0) return true
  return data instanceof Array && data.filter(d => {
    return !(isConceptName(d, config))
  }).length === 0

}

export const isComponentName = function isComponentName(data:unknown,config:ConfigService): data is ComponentNameType{
  if(typeof data !== 'string') return false
  if(isNoValueType(data)) return false
  return config.getConfigFromRoot(data)!==undefined
}
export const isActionIdType = function isActionIdType(data:unknown,config:ConfigService): data is ActionIdType{
  if(typeof data !== 'string') return false
  if(isNoValueType(data)) return false
  return config.effects.map(eff=>{
    return eff.action.id
  }).includes(data)
}
export const isObjectIdType = function isObjectIdType(data:unknown): data is ObjectIdType{
  if(typeof data !== 'string') return false
  return !isNoValueType(data)
}
