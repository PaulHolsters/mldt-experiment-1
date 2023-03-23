import {DimensionUnitConfigType} from "../../../enums/dimensionUnitConfigTypes.enum";
import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";
export class FixedDimensioningConfigModel {
  constructor(public type: DimensionValueConfigType,
              public value?: number | string,
              public unit?: DimensionUnitConfigType,
  ) {
    // dit zijn runtime errors pas als de code runt zal een fout gedetecteerd kunnen worden
    if (typeof this.value === 'string' && this.type === DimensionValueConfigType.Hardcoded) {
      throw new Error('When type is "Hardcoded" value must be a number')
    }
    if (typeof this.value === 'number' && this.type === DimensionValueConfigType.Calculated) {
      throw new Error('When type is "Calculated" value must be a string. ' +
        'See docs for how to configure this type.')
    }
    if (this.unit && this.type === DimensionValueConfigType.Calculated) {
      throw new Error('When type is "Calculated" unit is not allowed to be configured')
      // todo voeg ook een format toe aan de calculated versie !!!}
    }
  }
}
