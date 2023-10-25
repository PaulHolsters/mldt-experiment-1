import {ComponentModelType} from "../../../types/union-types";

export class DialogContentInjectionConfigModel {
  constructor( public content: ComponentModelType) {
  }
  getComponents():ComponentModelType[]{
    return [this.content]
  }
}
