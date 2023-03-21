export class DimensioningComponentPropsModel {
  constructor(public height?: string | undefined,
              public width?: string | undefined,
              public grow?: number | undefined, // main axis
              public shrink?: number | undefined, // main axis
              public alignSelfStretch?: boolean | undefined, // cross axis
              public alignItemsStretch?: boolean|undefined, // cross axis
              public fitContentHeight?: boolean |undefined,
              public fitContentWidth?: boolean |undefined,
              public calcHeight?: string | undefined,
              public calcWidth?: string | undefined) {
    // todo constraints: in principe moet dit correct zijn maar TypeScript kan fouten hieromtrent niet controleren ...
    //  maw of height of calcheight of width of caclwidth maar ook geen enkel is toegelaten
  }
}
