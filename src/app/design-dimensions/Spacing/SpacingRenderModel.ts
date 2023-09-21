export class SpacingRenderModel {
  constructor(
  ) {
  }
  public setProperty(propName: string, value: any): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }
}
