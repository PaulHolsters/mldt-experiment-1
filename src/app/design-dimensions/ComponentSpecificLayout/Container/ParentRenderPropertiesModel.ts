export class ParentRenderPropertiesModel {
  constructor(
    public row: boolean|undefined=undefined,
    public column: boolean|undefined=undefined,
    public wrap: boolean|undefined=undefined,
    public justifyContentStart: boolean|undefined=undefined,
    public justifyContentCenter: boolean|undefined=undefined,
    public justifyContentEnd: boolean|undefined=undefined,
    public justifyContentBetween: boolean|undefined=undefined,
    public justifyContentEvenly: boolean|undefined=undefined,
    public justifyContentAround: boolean|undefined=undefined,
    public alignItemsStart: boolean|undefined=undefined,
    public alignItemsCenter: boolean|undefined=undefined,
    public alignItemsEnd: boolean|undefined=undefined,
    public alignItemsBaseline: boolean|undefined=undefined,
    public alignItemsStretch: boolean|undefined=undefined,
  ) {
  }
}
