import {BlueprintValue} from "../../../types/union-types";

export class MultiSelectDataRepresentationRenderModel {
  public optionLabel:string|undefined
  public optionValue:string|undefined
  public placeholder:string|undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
  setDBIValues(data: BlueprintValue) {
    if (!this.optionLabel && data instanceof Array && data[0]==='list') {
       const arr = Array.from(data[1][0].properties.properties.keys()).filter(k=>{
         return k!=='id'
       })
      this.optionLabel = arr.length>0 ? arr[0] : 'name'
    }
    if (!this.optionValue) {
      this.optionValue = 'id'
    }
    if (!this.placeholder) {
      this.placeholder = 'Select a '+this.optionLabel
    }
  }

}
