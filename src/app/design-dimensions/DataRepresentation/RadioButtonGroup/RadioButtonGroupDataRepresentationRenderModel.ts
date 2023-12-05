import {FunctionType} from "../../../enums/functionTypes.enum";
import {LabelType} from "../../../types/type-aliases";
import utilFunctions from "../../../utils/utilFunctions";

export class RadioButtonGroupDataRepresentationRenderModel {
  public pipe: FunctionType[] | null=null
  public values: LabelType[] |  null=null

  constructor() {
  }

  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

  calculatePipeValue(radioValue: LabelType, array: FunctionType[]): LabelType {
    // omdat dit een methode is die enkel geldt voor radiobuttons zou dit beter in een aparte klasse komen
    let valCopy = {...radioValue}
    array.forEach(func => {
      switch (func) {
        case FunctionType.ToLowerCase:
          valCopy.label = utilFunctions.toLowerCase(valCopy.label)
          break
        case FunctionType.ToUpperCase:
          valCopy.label = utilFunctions.toUpperCase(valCopy.label)
          break
        case FunctionType.CreateSpaces:
          valCopy.label = utilFunctions.createSpaces(valCopy.label)
          break
        case FunctionType.CapitalizeFirstLetter:
          valCopy.label = utilFunctions.capitalizeFirst(valCopy.label)
          break
      }
    })
    return valCopy
  }

  setDBIValues(data: any) {
    // todo rewrite dbi values method
/*    if(data instanceof Array && data[0]==='enum'){
      this.values = data[1].map(enumVal => {
          return {label: utilFunctions.createSpaces(utilFunctions.capitalizeFirst(enumVal)), value: enumVal}
      })
      if (this.pipe) {
        this.values = this.values.map(val => {
          return this.calculatePipeValue(val, this.pipe as Array<FunctionType>)
        })
      }
    }*/
  }

}
