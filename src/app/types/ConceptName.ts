import {ConceptNameType} from "./type-aliases";

export abstract class ConceptName {
  public static check(value:ConceptNameType):boolean{
    throw new Error('value is niet ok')
  }
}
