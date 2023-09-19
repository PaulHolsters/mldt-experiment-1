import {ParentConfigType} from "../../../enums/ParentConfigTypes.enum";

export class ChildPropertiesRenderModel {
  //dynamic height or width (main axis)
  public grow:number|ParentConfigType.static|undefined=undefined
  public shrink:number|ParentConfigType.static|undefined=undefined
  // static dimensions
  public height:string|ParentConfigType.static|undefined=undefined
  public calcHeight:string|ParentConfigType.static|undefined=undefined
  public width:string|ParentConfigType.static|undefined=undefined
  public calcWidth:string|ParentConfigType.static|undefined=undefined
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
