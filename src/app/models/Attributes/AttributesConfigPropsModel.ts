import {MenuItem} from "primeng/api";
export class AttributesConfigPropsModel {
  constructor(public src?: string,
              public alt?: string,
              public icon?: string,
              public name?: string,
              public label?: string,
              public width?: number,
              public menuItems?: MenuItem[]) {
  }
}
