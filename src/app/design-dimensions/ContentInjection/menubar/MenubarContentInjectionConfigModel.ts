import {ComponentModel} from "../../ComponentModel";
import {NotConfigured} from "../../../types/type-aliases";

export class MenubarContentInjectionConfigModel {
  constructor( public start: ComponentModel|NotConfigured,
               public end: ComponentModel|NotConfigured) {
  }
}
