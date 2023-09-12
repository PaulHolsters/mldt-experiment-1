import {DisplayType} from "../../enums/displayType.enum";

export class ChildPropertiesRenderModel {
  public grow:number|undefined=undefined
  public shrink:number|undefined=undefined
  public height:string|undefined=undefined
  public calcHeight:string|undefined=undefined
  public width:string|undefined=undefined
  public calcWidth:string|undefined=undefined
  public selfAlignStart: boolean | undefined = undefined
  public selfAlignCenter: boolean | undefined = undefined
  public selfAlignEnd: boolean | undefined = undefined
  public selfAlignBaseline: boolean | undefined = undefined
  public display:DisplayType|undefined = undefined
  public visible: boolean|undefined = undefined
  public holdSpace: boolean|undefined = undefined
  constructor(
/*    public horizontalScrolling:boolean=false,
    public verticalScrolling:boolean=false,
    public scroll:boolean=false*/
  ) {
  }
  public setProperties(arr:any[]): void {
    arr.forEach(prop=>{
      if (Reflect.has(this, prop[0]))
        Reflect.set(this, prop[0], prop[1])
      else throw new Error('cannot set property ' + prop[0] + ' because it does not exist on the object of type ChildPropertiesRenderModel')
    })
  }
}
