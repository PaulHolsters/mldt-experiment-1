import {NumberInputDataRepresentationRenderModel} from "./NumberInput/NumberInputDataRepresentationRenderModel";
import {TableDataRepresentationRenderModel} from "./Table/TableDataRepresentationRenderModel";
import {TextInputDataRepresentationRenderModel} from "./TextInput/TextInputDataRepresentationRenderModel";
import {
  RadioButtonGroupDataRepresentationRenderModel
} from "./RadioButtonGroup/RadioButtonGroupDataRepresentationRenderModel";
import {MultiSelectDataRepresentationRenderModel} from "./MultiSelect/MultiSelectDataRepresentationRenderModel";

export class DataRepresentationRenderModel {
  public componentRenderModel:
    NumberInputDataRepresentationRenderModel |
    TableDataRepresentationRenderModel |
    TextInputDataRepresentationRenderModel |
    RadioButtonGroupDataRepresentationRenderModel |
    MultiSelectDataRepresentationRenderModel | undefined = undefined

  constructor() {
  }

  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }
}
