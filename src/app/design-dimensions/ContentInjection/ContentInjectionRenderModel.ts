import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {ComponentObjectModel} from "../ComponentObjectModel";
import {NoValueType} from "../../enums/no_value_type";
import {TableColumnModel} from "../component-specific-config/table/TableColumnModel";
export class ContentInjectionRenderModel {
  constructor(
    public start: ComponentModel|ComponentObjectModel|NoValueType,
    public end: ComponentModel|ComponentObjectModel|NoValueType,
    public content: ComponentModel|ComponentObjectModel|NoValueType,
    public columnHeaderComponents: ComponentModel[]|ComponentObjectModel[]|NoValueType,
    public footer: ComponentModel|ComponentObjectModel|NoValueType,
    public caption: ComponentModel|ComponentObjectModel|NoValueType,
    public extraColumns:TableColumnModel[]|NoValueType,
  ) {
  }
  public setProperty(propName: string, value: string|number|MenuItem[]|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
