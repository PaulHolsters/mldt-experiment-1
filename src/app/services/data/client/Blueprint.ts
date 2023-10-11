import {ConceptNameType, DataLink} from "../../../types/type-aliases";
import {Properties} from "./Properties";
import {DataRecordModel} from "../../../design-dimensions/DataRecordModel";
import {BlueprintValue} from "../../../types/union-types";
export class Blueprint {
  public readonly properties:Properties
  public readonly conceptName:ConceptNameType
  public constructor( public bluePrintObj:string ) {
    // todo zorg ervoor dat blueprint type beter wordt afgedwongen
    this.properties = new Properties(this.getPropsFromObj(bluePrintObj).trim())
    this.conceptName = this.getConceptFromBlueprintObj(bluePrintObj)
  }
  public setValuesBlueprintProperties(property:string,values:DataRecordModel[]|DataRecordModel){
    this.properties.setValuesProperties(property,values)
  }
  private getConceptFromBlueprintObj(blueprintObj:string):ConceptNameType{
    if(blueprintObj.indexOf('blueprint:')===-1) throw new Error('Blueprint string does not contain a concept name')
    return blueprintObj.substring(blueprintObj.indexOf('blueprint:')+10,blueprintObj.indexOf(';'))
  }
  private getPropsFromObj(blueprintObj:string):string{
    if(blueprintObj.indexOf('props:')===-1) throw new Error('blueprint string does not contain a props property')
    return blueprintObj.substring(blueprintObj.indexOf('props:')+6,blueprintObj.lastIndexOf(']')+1).trim()
  }
  public isBlueprintValue(data:any): data is BlueprintValue{
    if(typeof data === 'string' && ['string','number','Date','boolean'].includes(data)) return true
    if(data instanceof Array && data.length===2){
      if(data[0]==='enum' && data[1] instanceof Array) return true
      return (data[0] === 'object' || data[0] === 'list') && data[1][0] instanceof Blueprint
    }
    return false
  }
  public getBlueprintValueForDataLink(datalink:DataLink):BlueprintValue{
    const keys = this.properties.properties.keys()
    if(datalink.length>=1) datalink.pop()
    let key:string
    let val
    if(datalink.length>=1){
      key = datalink.pop() as string
      if(key in this.properties.properties){
        val = this.properties.properties.get(key)
      }
    }
    while(val instanceof Array && val.length === 2 && val[1][0] instanceof Blueprint && datalink.length>=1){
      key = datalink.pop() as string
      if(key in val[1][0].properties.properties){
        val = val[1][0].properties.properties.get(key)
      }
    }
    if(this.isBlueprintValue(val)) return val
    throw new Error('bad config')
  }
}
