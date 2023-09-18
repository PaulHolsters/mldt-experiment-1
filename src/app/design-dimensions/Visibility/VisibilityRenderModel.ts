export class VisibilityRenderModel {
  public visible: boolean|undefined=undefined
  public holdSpace: boolean|undefined=undefined
  constructor(  ) {
  }
  public setProperty(propName: string, value: boolean | undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type VisibilityComponentPropsModel')
  }

}

