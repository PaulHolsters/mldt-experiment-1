import {BlueprintValue} from "../../../types/union-types";

export class MultiSelectDataRepresentationRenderModel {
  public optionLabel:string|null=null
  public optionValue:string|null=null
  public placeholder:string|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    // todo fix this shit
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
