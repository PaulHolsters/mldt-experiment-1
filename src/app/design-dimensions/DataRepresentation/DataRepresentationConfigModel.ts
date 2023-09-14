import {NumberInputDataRepresentationConfigModel} from "./NumberInput/NumberInputDataRepresentationConfigModel";
import {TableDataRepresentationConfigModel} from "./Table/TableDataRepresentationConfigModel";
import {TextInputDataRepresentationConfigModel} from "./TextInput/TextInputDataRepresentationConfigModel";
import {
  RadioButtonGroupDataRepresentationConfigModel
} from "./RadioButtonGroup/RadioButtonGroupDataRepresentationConfigModel";
import {MultiSelectDataRepresentationConfigModel} from "./MultiSelect/MultiSelectDataRepresentationConfigModel";

export class DataRepresentationConfigModel {
  constructor(public componentConfigModel:
                NumberInputDataRepresentationConfigModel |
                TableDataRepresentationConfigModel |
                TextInputDataRepresentationConfigModel |
                RadioButtonGroupDataRepresentationConfigModel |
                MultiSelectDataRepresentationConfigModel) {
  }
}
