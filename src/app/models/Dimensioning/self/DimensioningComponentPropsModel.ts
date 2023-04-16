import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";

export class DimensioningComponentPropsModel {
  constructor(public height?: string | undefined | DimensionValueConfigType.Parent,
              public width?: string | undefined | DimensionValueConfigType.Parent,
              public grow?: number | undefined | DimensionValueConfigType.Parent, // main axis
              public shrink?: number | undefined | DimensionValueConfigType.Parent, // main axis
              public alignSelfStretch?: boolean | undefined, // cross axis
              public fitContentHeight?: boolean |undefined,
              public fitContentWidth?: boolean |undefined,
              public calcHeight?: string | undefined | DimensionValueConfigType.Parent,
              public calcWidth?: string | undefined| DimensionValueConfigType.Parent) {
    // todo constraints: in principe moet dit correct zijn maar TypeScript kan fouten hieromtrent niet controleren ...
    //  maw of height of calcheight of width of caclwidth maar ook geen enkel is toegelaten
  }
}
