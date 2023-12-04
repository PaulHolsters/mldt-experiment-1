import {ComponentModelType} from "../../../types/union-types";
export class CardContentInjectionRenderModel {
  public header: ComponentModelType|null=null
  public title:string|null=null
  public content: ComponentModelType|null=null
  public footer: ComponentModelType|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
