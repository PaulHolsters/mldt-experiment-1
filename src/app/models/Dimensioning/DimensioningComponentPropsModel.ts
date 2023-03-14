export class DimensioningComponentPropsModel {
  constructor(public height?: string | undefined,
              public width?: string | undefined,
              public grow?: string | undefined, // main axis
              public shrink?: string | undefined, // main axis
              public stretch?: boolean | undefined, // cross axis
              public calcHeight?: string | undefined,
              public calcWidth?: string | undefined) {
    // todo constraints: in principe moet dit correct zijn maar TypeScript kan fouten hieromtrent niet controleren ...
    //  maw of height of calcheight of width of caclwidth maar ook geen enkel is toegelaten
  }
}
