export class PositioningChildComponentsPropsModel {
  constructor(public row: boolean | undefined = undefined,
              public column: boolean | undefined = undefined,
              public wrap: boolean | undefined = undefined,
              public justifyContentStart: boolean | undefined = undefined,
              public justifyContentCenter: boolean | undefined = undefined,
              public justifyContentEnd: boolean | undefined = undefined,
              public justifyContentBetween: boolean | undefined = undefined,
              public justifyContentEvenly: boolean | undefined = undefined,
              public justifyContentAround: boolean | undefined = undefined,
              public alignItemsStart: boolean | undefined = undefined,
              public alignItemsCenter: boolean | undefined = undefined,
              public alignItemsEnd: boolean | undefined = undefined,
              public alignContentStart: boolean | undefined = undefined,
              public alignContentCenter: boolean | undefined = undefined,
              public alignContentEnd: boolean | undefined = undefined,
              public alignContentBetween: boolean | undefined = undefined,
              public alignContentEvenly: boolean | undefined = undefined,
              public alignContentAround: boolean | undefined = undefined) {
  }
  public setProperty(propName: string, value: boolean | undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningChildComponentsPropsModel')
  }
}
