import {DisplayType} from "../../../enums/displayType.enum";

export class PositioningComponentPropsModel {
  constructor(public selfAlignStart: boolean | undefined = undefined,
              public selfAlignCenter: boolean | undefined = undefined,
              public selfAlignEnd: boolean | undefined = undefined,
              public selfAlignBaseline: boolean | undefined = undefined,
              public display:DisplayType|undefined = undefined) {
  }
  public setProperty(propName: string, value: boolean | undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }
}

// todo add z-index en relative position ...
