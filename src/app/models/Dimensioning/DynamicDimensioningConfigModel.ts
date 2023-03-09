import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
export class DynamicDimensioningConfigModel {
  constructor(public grow?: {
                type: DimensionValueConfigType,
                value: number
              },
              public shrink?: {
                type: DimensionValueConfigType,
                value: number
              }
              // cross axis niv=self(align) = afwijking op parent config (die default steeds een waarde zal hebben)
  ) {
    if(!grow && !shrink) throw new Error('At least one of the following needs to be configured: grow, shrink')
  }
}
