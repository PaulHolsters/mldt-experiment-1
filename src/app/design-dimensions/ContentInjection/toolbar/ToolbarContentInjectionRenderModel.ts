import {ComponentModelType} from "../../../types/union-types";

export class ToolbarContentInjectionRenderModel {
  public start: ComponentModelType|null=null
  public center: ComponentModelType|null=null
  public end: ComponentModelType|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
