import { ConceptNameType} from "../../types/type-aliases";
import {DataRecordModel} from "../../models/DataRecordModel";
import {Properties} from "./Properties";
export class Blueprint {
  public readonly properties:Properties
  public readonly conceptName:ConceptNameType
  public constructor( public bluePrintObj:string ) {
    // todo zorg ervoor dat blueprint type beter wordt afgedwongen
    this.properties = new Properties(this.getPropsFromObj(bluePrintObj).trim())
    this.conceptName = this.getConceptFromBlueprintObj(bluePrintObj)
  }
  public setValuesBlueprintProperties(values:DataRecordModel[]|DataRecordModel){

  }
  private getConceptFromBlueprintObj(blueprintObj:string):ConceptNameType{
    if(blueprintObj.indexOf('blueprint:')===-1) throw new Error('Blueprint string does not contain a concept name')
    return blueprintObj.substring(blueprintObj.indexOf('blueprint:')+10,blueprintObj.indexOf(';'))
  }
  private getPropsFromObj(blueprintObj:string):string{
    if(blueprintObj.indexOf('props:')===-1) throw new Error('blueprint string does not contain a props property')
    return blueprintObj.substring(blueprintObj.indexOf('props:')+6,blueprintObj.lastIndexOf(']')+1).trim()
  }
}
