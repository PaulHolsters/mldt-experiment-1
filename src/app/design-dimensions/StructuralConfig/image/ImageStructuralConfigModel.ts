import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";

export class ImageStructuralConfigModel extends ComponentStructuralConfigModel{
  constructor(public src: string,
              public alt: string) {
    super()
  }
}
