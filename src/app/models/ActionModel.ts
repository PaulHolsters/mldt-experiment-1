import {ActionSubType} from "../enums/actionSubTypes.enum";
import {TargetType} from "../enums/targetTypes.enum";
import {ActionType} from "../enums/actionTypes.enum";
import {EventType} from "../enums/eventTypes.enum";

export class ActionModel {
  constructor(
    public on:EventType,
    public targetType:TargetType,
    public targetName:string,
    public actionType:ActionType,
    public actionSubType?:ActionSubType
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
