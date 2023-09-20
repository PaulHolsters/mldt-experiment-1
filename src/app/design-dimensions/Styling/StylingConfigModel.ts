import {ButtonStylingConfigModel} from "./button/ButtonStylingConfigModel";
import {IconStylingConfigModel} from "./icon/IconStylingConfigModel";

export class StylingConfigModel {
  constructor(
    public componentConfigModel:ButtonStylingConfigModel|IconStylingConfigModel
  ) {
  }

}
