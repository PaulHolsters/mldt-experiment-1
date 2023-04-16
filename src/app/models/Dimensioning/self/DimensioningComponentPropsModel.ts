import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";
import {ComponentDimensionValueConfigType} from "../../../enums/componentDimensionValueConfigTypes.enum";

export class DimensioningComponentPropsModel {
  constructor(public height?: string | undefined | ComponentDimensionValueConfigType.Parent,
              public width?: string | undefined | ComponentDimensionValueConfigType.Parent,
              public grow?: number | undefined | ComponentDimensionValueConfigType.Parent, // main axis
              public shrink?: number | undefined | ComponentDimensionValueConfigType.Parent, // main axis
              public alignSelfStretch?: boolean | undefined, // cross axis
              public fitContentHeight?: boolean |undefined,
              public fitContentWidth?: boolean |undefined,
              public calcHeight?: string | undefined | ComponentDimensionValueConfigType.Parent,
              public calcWidth?: string | undefined| ComponentDimensionValueConfigType.Parent) {
    // todo constraints: in principe moet dit correct zijn maar TypeScript kan fouten hieromtrent niet controleren ...
    //  maw of height of calcheight of width of caclwidth maar ook geen enkel is toegelaten
  }
}
