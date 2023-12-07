import {TableColumnModel} from "../../StructuralConfig/table/TableColumnModel";
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {isExtraColumnModelArray} from "../../../types/type-aliases";
import {ComponentModelType, isNoValueType} from "../../../types/union-types";

export class TableContentInjectionRenderModel {
  public columnHeaderComponents: ComponentModelType[]|null=null
  public footer: ComponentModelType|null=null
  public caption: ComponentModelType|null=null
  public extraColumns:(TableColumnModel & {component:ComponentModelType})[]|null=null
  constructor() {
  }
  public setProperty(propName: string, value: unknown): void {
    if (Reflect.has(this, propName)){
      if(propName===PropertyName.extraColumns && isExtraColumnModelArray(value)){
        this.extraColumns = value.map(it=>{
          const objTemp = {...it.config}
          if(isNoValueType(objTemp.header)){
            objTemp.header = ''
          }
          return Object.assign(objTemp,{component:it.component})
        })
      } else{
        Reflect.set(this, propName, value)
      }
    }
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
