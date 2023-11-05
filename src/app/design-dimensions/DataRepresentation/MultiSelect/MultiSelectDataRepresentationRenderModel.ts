import {BlueprintValue, isNoValueType} from "../../../types/union-types";

export class MultiSelectDataRepresentationRenderModel {
  public optionLabel:string|null=null
  public optionValue:string|null=null
  public placeholder:string|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName) && !isNoValueType(value)){
      Reflect.set(this, propName, value)
    }
  }
  //type BlueprintValue = RenderPropertyType|['enum',string[]]|['object',[Blueprint,DataRecord]]|['list',[Blueprint,List]]
  setDBIValues(data: BlueprintValue) {
    if (!this.optionLabel && data instanceof Array && data[0]==='list') {
       const arr = Array.from(data[1][0].properties.properties.keys()).filter(k=>{
         return k!=='id'
       })
      this.optionLabel = arr.length>0 ? arr[0] : null
    }
    if (!this.optionValue) {
      this.optionValue = 'id'
    }
    if (!this.placeholder && this.optionLabel) {
      this.placeholder = 'Select a '+this.optionLabel
    }
  }
}
