import {BlueprintType} from "../types/type-aliases";

export class BlueprintModel {
  public readonly blueprintObj:Object
  constructor(
    public blueprintStr:BlueprintType
  ) {
    this.convertToObj()
  }

  private convertToObj(){
    this.blueprintStr.toString().trim()
  }
}
