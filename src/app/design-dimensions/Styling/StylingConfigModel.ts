import {ButtonStylingConfigModel} from "./button/ButtonStylingConfigModel";
import {IconStylingConfigModel} from "./icon/IconStylingConfigModel";
import {TableStylingConfigModel} from "./table/TableStylingConfigModel";

export class StylingConfigModel {
  constructor(
    public componentConfigModel:ButtonStylingConfigModel|IconStylingConfigModel|TableStylingConfigModel
  ) {
  }


}
