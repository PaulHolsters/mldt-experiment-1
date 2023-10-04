import {ConceptNameType} from "./type-aliases";


export abstract class ConceptName {
  public static check(value:ConceptNameType|undefined):boolean{
  return Boolean(value)
  }
}
