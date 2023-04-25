import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
export class AttributesConfigPropsModel {
  constructor(public src?: string,
              public alt?: string,
              public name?: string,
              public width?: number,
              public menuItems?: MenuItem[],
              public start?:ComponentModel,
              public end?:ComponentModel,
              public label?:string,
              public floatLabel?:boolean,
              public  dirty:boolean = false,
              public  invalid: boolean = false,
              public small?: boolean,
              public large?: boolean,
              public icon?:IconType,
              public iconPosition?:IconPositionType,
              public advisoryText?:string,
) {
  }
}
