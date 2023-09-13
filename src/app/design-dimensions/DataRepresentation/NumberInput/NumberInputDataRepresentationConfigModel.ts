import {ComponentModel} from "../../ComponentModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class NumberInputDataRepresentationConfigModel {
  constructor( public start: ComponentModel|ZeroValueType.NotConfigured,
               public end: ComponentModel|ZeroValueType.NotConfigured) {
  }
}
