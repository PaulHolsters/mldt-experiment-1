import {NumberInputDataInputRenderModel} from "./NumberInput/NumberInputDataInputRenderModel";
import {TextInputDataInputRenderModel} from "./TextInput/TextInputDataInputRenderModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {RadioButtonGroupDataInputRenderModel} from "./RadioButtonGroup/RadioButtonGroupDataInputRenderModel";

export class DataInputRenderModel {
  public disabled: boolean | ZeroValueType.NotAllowed|undefined=undefined
constructor(
  public componentRenderModel:
    NumberInputDataInputRenderModel|TextInputDataInputRenderModel|RadioButtonGroupDataInputRenderModel | undefined = undefined) {
}
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }
}
