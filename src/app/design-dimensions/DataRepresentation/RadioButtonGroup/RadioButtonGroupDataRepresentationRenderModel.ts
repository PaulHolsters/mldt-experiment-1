import {FunctionType} from "../../../enums/functionTypes.enum";
import {DeterminedByEngine, LabelType, NotConfigured} from "../../../types/type-aliases";
import utilFunctions from "../../../utils/utilFunctions";
import {DataLink, OutputData} from "../../../types/union-types";
import {Blueprint} from "../../../services/data/client/Blueprint";

export class RadioButtonGroupDataRepresentationRenderModel {
  public pipe: FunctionType[] | NotConfigured = undefined
  public values: LabelType[] | DeterminedByEngine = undefined

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

  setDBIValues(data: [DataLink,Blueprint]) {
    const values = data[1].properties.getValue(data[0])
    // todo branded type
    if (!this.values && values instanceof Array) {
      this.values = values.map(enumVal => {
        if(typeof enumVal === 'string'){
          return {label: utilFunctions.createSpaces(utilFunctions.capitalizeFirst(enumVal)), value: enumVal}
        }
        throw new Error('illegal array value')
      })
      if (this.pipe) {
        this.values = this.values.map(val => {
          return this.calculatePipeValue(val, this.pipe as Array<FunctionType>)
        })
      }
    }
  }

}
