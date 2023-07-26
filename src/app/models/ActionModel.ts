import {ActionSubType} from "../enums/actionSubTypes.enum";
import {TargetType} from "../enums/targetTypes.enum";
import {ActionType} from "../enums/actionTypes.enum";
import {EventType} from "../enums/eventTypes.enum";
import {NoValueType} from "../enums/no_value_type";
import {ActionValueModel} from "./ActionValueModel";
import {ResponsiveConfigModel} from "../types/type-aliases";

export class ActionModel {
  constructor(
    public on:EventType,
    public targetType:TargetType,
    public targetName:string|NoValueType.NA,
    public sourceName:string|NoValueType.NA,
    public actionType:ActionType,
    public actionSubType?:ActionSubType,
    public id?:string,
    public targetId?:string,
    public sourceId?:string,
    public value?:ResponsiveConfigModel|ActionValueModel,
  ) {
  }
  // props?:{name:string,value?:any,condition?:{comparison:string,values:(Object|string)[]}}[]
}
/*
*         props: [
          {
            name: 'xxl',
            value: {calc: 'myCalc3', values: ['590px']},
            // todo fix dit komt niet overeen met het ActionModel
            condition: {
              comparison: 'propIsGreaterThan',
              values: [{calc: 'myCalc1', values: [{target: 'logo', prop: 'l'}]}, '50px']
            }
          }]
* */
