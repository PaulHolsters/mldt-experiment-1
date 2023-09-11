import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
export class NonCalculatedDimensioningConfigModel {
  constructor(public value: number,
              public unit: DimensionUnitConfigType,
  ) {}
  public getDimension(){
    return this.value+this.unit
  }
}
