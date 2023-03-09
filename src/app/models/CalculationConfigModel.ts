export interface CalculationConfigModel {
  name:string,
  value?:any,
  condition?:{comparison:string,values:any[]}
}
