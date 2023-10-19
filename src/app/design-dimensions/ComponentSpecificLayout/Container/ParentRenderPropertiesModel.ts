export class ParentRenderPropertiesModel {
  constructor(
    public row: boolean|null=null,
    public column: boolean|null=null,
    public wrap: boolean|null=null,
    public justifyContentStart: boolean|null=null,
    public justifyContentCenter: boolean|null=null,
    public justifyContentEnd: boolean|null=null,
    public justifyContentBetween: boolean|null=null,
    public justifyContentEvenly: boolean|null=null,
    public justifyContentAround: boolean|null=null,
    public alignItemsStart: boolean|null=null,
    public alignItemsCenter: boolean|null=null,
    public alignItemsEnd: boolean|null=null,
    public alignItemsBaseline: boolean|null=null,
    public alignItemsStretch: boolean|null=null,
  ) {
  }
}
