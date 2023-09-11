import {ComponentDimensionValueConfigType} from "../../enums/componentDimensionValueConfigTypes.enum";

export class DimensioningRenderModel{
  constructor(public height?: string | undefined | ComponentDimensionValueConfigType.Parent,
              public width?: string | undefined | ComponentDimensionValueConfigType.Parent,
              public grow?: number | undefined | ComponentDimensionValueConfigType.Parent, // main axis
              public shrink?: number | undefined | ComponentDimensionValueConfigType.Parent, // main axis
              public alignSelfStretch?: boolean | undefined, // cross axis
              public fitContentHeight?: boolean |undefined,
              public fitContentWidth?: boolean |undefined,
              public calcHeight?: string | undefined | ComponentDimensionValueConfigType.Parent,
              public calcWidth?: string | undefined| ComponentDimensionValueConfigType.Parent) {
  }
}
