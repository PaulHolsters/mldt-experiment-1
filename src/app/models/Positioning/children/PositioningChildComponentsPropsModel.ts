export class PositioningChildComponentsPropsModel {
  constructor(row: boolean | undefined = undefined,
              column: boolean | undefined = undefined,
              wrap: boolean | undefined = undefined,
              justifyContentStart: boolean | undefined = undefined,
              justifyContentCenter: boolean | undefined = undefined,
              justifyContentEnd: boolean | undefined = undefined,
              justifyContentBetween: boolean | undefined = undefined,
              justifyContentEvenly: boolean | undefined = undefined,
              justifyContentAround: boolean | undefined = undefined,
              alignItemsStart: boolean | undefined = undefined,
              alignItemsCenter: boolean | undefined = undefined,
              alignItemsEnd: boolean | undefined = undefined,
              alignContentStart: boolean | undefined = undefined,
              alignContentCenter: boolean | undefined = undefined,
              alignContentEnd: boolean | undefined = undefined,
              alignContentBetween: boolean | undefined = undefined,
              alignContentEvenly: boolean | undefined = undefined,
              alignContentAround: boolean | undefined = undefined) {
  }
  public setProperty(propName: string, value: boolean | undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningChildComponentsPropsModel')
  }
}
