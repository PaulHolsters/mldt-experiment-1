import {TableGridType} from "../../../enums/tableGridType.enum";

export class TableStylingRenderModel {
  gridType:TableGridType|null=null
  // todo vul aan
  constructor() {
  }
  public setProperty(propName: string, value: any|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
