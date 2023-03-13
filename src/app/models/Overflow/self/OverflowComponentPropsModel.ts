export class OverflowComponentPropsModel {
  constructor(public overflowScroll: boolean | undefined = true,
              public overflowHidden?: boolean | undefined,
              public overflowXHidden?: boolean | undefined,
              public overflowYHidden?: boolean | undefined,
              public overflowXScroll?: boolean | undefined,
              public overflowYScroll?: boolean | undefined,
  ) {
  }
}
