export interface ActionModel {
  source:string,
  target:string,
  trigger:string,
  action:string,
  props:{name:string,value?:any,condition?:{comparison:string,values:(Object|string)[]}}[]
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
