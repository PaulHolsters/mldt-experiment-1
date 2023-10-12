import {ParentConfigType} from "../../../enums/ParentConfigTypes.enum";

export class ChildPropertiesRenderModel {
  //dynamic height or width (main axis)
  public grow:number|ParentConfigType.static|undefined
  public shrink:number|ParentConfigType.static|undefined
  // static dimensions
  public height:string|ParentConfigType.static|undefined
  public calcHeight:string|ParentConfigType.static|undefined
  public width:string|ParentConfigType.static|undefined
  public calcWidth:string|ParentConfigType.static|undefined
  // visibility
  public visible: boolean|undefined
  public holdSpace: boolean|undefined
  constructor(
/*    public horizontalScrolling:boolean=false,
    public verticalScrolling:boolean=false,
    public scroll:boolean=false*/
  ) {
  }
}
