import {ConceptNameType, DataLink} from "../../../types/type-aliases";
import {Properties} from "./Properties";
import {BlueprintValue, DataRecord, isBlueprintValue} from "../../../types/union-types";
export class Blueprint {
  public readonly properties:Properties
  public readonly conceptName:ConceptNameType
  public constructor( public bluePrintObj:string ) {
    // todo zorg ervoor dat blueprint type beter wordt afgedwongen
    this.properties = new Properties(this.getPropsFromObj(bluePrintObj).trim())
    this.conceptName = this.getConceptFromBlueprintObj(bluePrintObj)
  }
  public setValuesBlueprintProperties(property:string,values:DataRecord[]|DataRecord){
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
    if(isBlueprintValue(val)) return val
    throw new Error('bad config')
  }
}
