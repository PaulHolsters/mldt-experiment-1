import {ComponentModelType} from "../../../types/union-types";

export class DialogContentInjectionConfigModel {
  constructor( public content: ComponentModelType) {
  }
  getComponents(){
    return [this.content]
  }
}
