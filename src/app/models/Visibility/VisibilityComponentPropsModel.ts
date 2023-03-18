export class VisibilityComponentPropsModel {
  constructor(  public visible?: boolean|undefined,
                public holdSpace?: boolean|undefined) {
  }
  public setProperty(propName: string, value: boolean | undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type VisibilityComponentPropsModel')
  }

}
