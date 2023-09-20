import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";

export class NonCalculatedSizeConfigModel {
  constructor(public value: number,
              public unit: DimensionUnitConfigType=DimensionUnitConfigType.PX,
  ) {}

}
