import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentModelType, isNoValueType} from "../../../types/union-types";

export class CardContentInjectionConfigModel {
  constructor( public content: ComponentModelType|NoValueType.NO_VALUE_YET=NoValueType.NO_VALUE_YET,
               public title:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
               public header: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
               public footer: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED) {
  }
  setContent(content: ComponentModelType|NoValueType.NO_VALUE_YET){
    this.content=content
    return this
  }
  setTitle(title:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED){
    this.title=title
    return this
  }
  setHeader(header: ComponentModelType|NoValueType.NO_VALUE_NEEDED){
    this.header=header
    return this
  }
  setFooter(footer: ComponentModelType|NoValueType.NO_VALUE_NEEDED){
    this.footer=footer
    return this
  }
  getComponents():ComponentModelType[]{
    const arr = []
    if(!isNoValueType(this.header)){
      arr.push(this.header)
    }
    if(!isNoValueType(this.footer)){
      arr.push(this.footer)
    }
    if(!isNoValueType(this.content)){
      arr.push(this.content)
    }
    return arr
  }
}
