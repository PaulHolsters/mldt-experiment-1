import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class ButtonConfigModel {
  public label:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor(){
  }
  setLabel(label:string|ZeroValueType.NotConfigured){
    this.label=label
  }

}
