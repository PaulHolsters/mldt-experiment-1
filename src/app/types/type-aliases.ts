import {DataRecordModel} from "../design-dimensions/DataRecordModel";

export type ConceptNameType = string
export type AttributeNameType = string
export type ComponentNameType = string
export type ActionIdType = string
export type TriggerIdType = string
export type EffectIdType = string
export type BlueprintType = Map<string,[string,[BlueprintType,DataRecordModel[]|DataRecordModel]|string[]]|string>
export type ObjectIdType = string
export type ConditionType = string

export type NotConfigured =  undefined

