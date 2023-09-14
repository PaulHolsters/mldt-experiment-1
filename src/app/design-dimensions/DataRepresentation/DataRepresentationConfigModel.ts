import {NumberInputDataRepresentationConfigModel} from "./NumberInput/NumberInputDataRepresentationConfigModel";
import {TableDataRepresentationConfigModel} from "./Table/TableDataRepresentationConfigModel";
import {TextInputDataRepresentationConfigModel} from "./TextInput/TextInputDataRepresentationConfigModel";
export class DataRepresentationConfigModel {
constructor(public componentConfigModel:
              NumberInputDataRepresentationConfigModel|
              TableDataRepresentationConfigModel|
              TextInputDataRepresentationConfigModel) {
}
}
