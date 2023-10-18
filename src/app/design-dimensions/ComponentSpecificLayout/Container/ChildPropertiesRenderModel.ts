import {ParentConfigType} from "../../../enums/ParentConfigTypes.enum";

export class ChildPropertiesRenderModel {
  //dynamic height or width (main axis)
  public grow:number|ParentConfigType.static|null=null
  public shrink:number|ParentConfigType.static|null=null
  // static dimensions
  public height:string|ParentConfigType.static|null=null
  public calcHeight:string|ParentConfigType.static|null=null
  public width:string|ParentConfigType.static|null=null
  public calcWidth:string|ParentConfigType.static|null=null
  // visibility
  public visible: boolean | null = null
  public holdSpace: boolean | null = null
  constructor(
/*    public horizontalScrolling:boolean=false,
    public verticalScrolling:boolean=false,
    public scroll:boolean=false*/
  ) {
  }
}
