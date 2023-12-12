import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";

export class DialogStructuralConfigModel extends ComponentStructuralConfigModel{
  // todo default toevoegen
  constructor(public header:string='Your dialog needs a header') {
    super()
  }
}
