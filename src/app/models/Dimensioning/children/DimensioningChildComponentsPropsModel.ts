export class DimensioningChildComponentsPropsModel {
  constructor(public alignItemsStretch?: boolean | undefined) {
    // todo constraints: in principe moet dit correct zijn maar TypeScript kan fouten hieromtrent niet controleren ...
    //  maw of height of calcheight of width of caclwidth maar ook geen enkel is toegelaten
  }
}
