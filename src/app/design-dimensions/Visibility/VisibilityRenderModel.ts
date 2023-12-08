import {isNoValueType} from "../../types/union-types";
import {ComponentRenderModel} from "../ComponentRenderModel";

export class VisibilityRenderModel extends ComponentRenderModel{
  public visible: boolean|null=null
  public holdSpace: boolean|null=null
  public setProperty(propName: string, value: boolean | undefined): void {
    if (Reflect.has(this, propName) && !isNoValueType(value))
      Reflect.set(this, propName, value)
    else if(!Reflect.has(this, propName)) throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type VisibilityComponentPropsModel')
  }

}

