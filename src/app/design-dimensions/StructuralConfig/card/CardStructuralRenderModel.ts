import {ComponentStructuralRenderModel} from "../ComponentStructuralRenderModel";

export class CardStructuralRenderModel extends ComponentStructuralRenderModel{
  public title:string|null=null
  public subtitle:string|null=null
  constructor() {
    super()
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
