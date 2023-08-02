import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {NoValueType} from "../../enums/no_value_type";
export class AttributesComponentPropsModel {
  constructor(public src: string | NoValueType.NA,
              public alt: string | NoValueType.NA,
              public name: string | NoValueType.NA,
              public icon: string | NoValueType.NA,
              public label: string | NoValueType.NA,
              public header: string | NoValueType.NA,
              public width: number | NoValueType.NA,
              public menuItems: MenuItem[] | NoValueType.NA,
              public start: ComponentModel | NoValueType.NA,
              public end: ComponentModel | NoValueType.NA,
              public content: ComponentModel | NoValueType.NA,
              public textWhenEmpty: string | NoValueType.NA,
              public paginator: boolean,
              public rows: number | NoValueType.NA,
              public rowsPerPage:number[]|NoValueType.NA,
              public dataLink: string[] | NoValueType.NA,
              public columnHeaderComponents:ComponentModel[]|NoValueType.NA
  ) {
  }
  public setProperty(propName: string, value: string|number|MenuItem[]|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
