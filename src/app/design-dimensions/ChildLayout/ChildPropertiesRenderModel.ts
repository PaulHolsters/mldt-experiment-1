import {ComponentDimensionValueConfigType} from "../../enums/componentDimensionValueConfigTypes.enum";

export class ChildPropertiesRenderModel {
  //dynamic height or width (main axis)
  public grow:number|ComponentDimensionValueConfigType|undefined=undefined
  public shrink:number|ComponentDimensionValueConfigType|undefined=undefined
  // static dimensions
  public height:string|undefined=undefined
  public calcHeight:string|undefined=undefined
  public width:string|undefined=undefined
  public calcWidth:string|undefined=undefined
  // visibility
  public visible: boolean|undefined = undefined
  public holdSpace: boolean|undefined = undefined
  constructor(
/*    public horizontalScrolling:boolean=false,
    public verticalScrolling:boolean=false,
    public scroll:boolean=false*/
  ) {
  }
}
