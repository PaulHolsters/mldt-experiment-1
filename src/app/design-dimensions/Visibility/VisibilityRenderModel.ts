export class VisibilityRenderModel {
  public visible: boolean|null=null
  public holdSpace: boolean|null=null
  constructor(  ) {
  }
  public setProperty(propName: string, value: boolean | undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type VisibilityComponentPropsModel')
  }

}

