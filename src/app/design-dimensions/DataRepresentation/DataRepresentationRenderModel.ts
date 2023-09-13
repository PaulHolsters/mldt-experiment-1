import {NumberInputDataRepresentationRenderModel} from "./NumberInput/NumberInputDataRepresentationRenderModel";

export class DataRepresentationRenderModel {
  public componentRenderModel: NumberInputDataRepresentationRenderModel | undefined = undefined
  constructor() {
  }

  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }
}
