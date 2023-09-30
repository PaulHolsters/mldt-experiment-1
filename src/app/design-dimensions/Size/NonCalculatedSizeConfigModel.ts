import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";

export class NonCalculatedSizeConfigModel {
  constructor(public value: number,
              public unit: SizeUnitConfigType=SizeUnitConfigType.PX,
  ) {}

}
