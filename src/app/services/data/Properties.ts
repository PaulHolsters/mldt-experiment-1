import {DataRecordModel} from "../../models/DataRecordModel";
import {NoValueType} from "../../enums/no_value_type";
import {Blueprint} from "./Blueprint";
export class Properties {
  public readonly properties:Map<string,[string,[Blueprint,DataRecordModel[]|DataRecordModel|NoValueType.NVY]|string[]]|string>
  public constructor(public propertiesStr:string ) {
    // todo zorg ervoor dat properties beter worden afgedwongen
    this.properties = new Map<string,[string,[Blueprint,DataRecordModel[]|DataRecordModel|NoValueType.NVY]|string[]]|string>()
    this.createProperties(propertiesStr)
  }
  public setValuesProperties(property:string,values:DataRecordModel[]|DataRecordModel){
    const val = this.properties?.get(property)
    if(val instanceof Array && val.length===2 && typeof val[0]==='string' && val[1] instanceof Array && val[1].length===2 && val[1][0] instanceof Blueprint){
      this.properties.set(property,[val[0],[val[1][0],values]])
    }
  }
  private createProperties(props:string){
    while(props.length>2){
      const propsObj = this.getNextObjFromProps(props)
      if(this.isLastProp(props)){
        props='[]'
      } else{
        props = '['+props.substring(this.getCutOff(props)+1,props.lastIndexOf(']')).trim()+']'
      }
      if(!this.hasValueProp(propsObj)){
        this.properties.set(this.getNameFromPropsObj(propsObj),this.getTypeFromPropsObj(propsObj))
      } else if(this.valueIsEnum(propsObj)){
        this.properties.set(this.getNameFromPropsObj(propsObj),[this.getTypeFromPropsObj(propsObj),this.getEnumValues(propsObj)])
      } else if(this.valueIsBlueprint(propsObj)){
        const blueprintObj = this.getBlueprintObj(propsObj)
        // marshaller
        const blueprint = new Blueprint(blueprintObj)
        if(this.getTypeFromPropsObj(propsObj) === 'list'||this.getTypeFromPropsObj(propsObj).indexOf('object:')!==-1){
          this.properties.set(this.getNameFromPropsObj(propsObj),[this.getTypeFromPropsObj(propsObj),[blueprint,NoValueType.NVY]])
        }
      }
    }
  }
  private isLastProp(props:string):boolean{
    switch(this.nextObjType(props)){
      case 'list':
        const inner = props.trim().substring(1,props.trim().length-1)
        return inner.indexOf(']')>inner.lastIndexOf(',')
      case 'object':
        throw new Error('string object type not implemented for cutoff')
      default:
        return props.indexOf('}')===props.lastIndexOf('}')
    }
  }
  private getNameFromPropsObj(propsObj:string):string{
    if(propsObj.indexOf('name:')===-1) throw new Error('props object string does not contain a name property')
    return propsObj.substring(propsObj.indexOf('name:')+5,propsObj.indexOf(';'))
  }
  private getTypeFromPropsObj(propsObj:string):string{
    if(propsObj.indexOf('type:')===-1) throw new Error('props object string does not contain a type property')
    if(propsObj.indexOf(';',propsObj.indexOf('type:'))!==-1){
      return propsObj.substring(propsObj.indexOf('type:')+5,propsObj.indexOf(';',propsObj.indexOf('type:'))).trim()
    } else{
      return propsObj.substring(propsObj.indexOf('type:')+5,propsObj.lastIndexOf('}')).trim()
    }
  }
  private nextObjType(props:string):string|false{
    if(props.indexOf('type:')===-1) return false
    const index = props.indexOf('type:')+5
    if(props.indexOf(';',index)<props.indexOf('}',index)){
      // er is een value prop
      return props.substring(index,props.indexOf(';',index)).trim()
    } else{
      // er is geen value prop
      return props.substring(index,props.indexOf('}',index)).trim()
    }
  }
  private getCutOff(props:string):number{
    let cutOff = 0
    switch(this.nextObjType(props)){
      case 'list':
        cutOff = props.indexOf(',',props.indexOf(']')+1) // todo dit is technisch niet genoeg want er kan een diepere nesting zijn!
        break
      case 'object':
        throw new Error('string object type not implemented for cutoff')
      default:
        while(props.indexOf('{',cutOff)<props.indexOf('}',cutOff)){
          cutOff = props.indexOf('{')+1
        }
        while(props.indexOf('}',cutOff)<props.indexOf('{',cutOff)){
          cutOff =  props.indexOf('}')+1
        }
    }
    return cutOff
  }
  private isLast(props:string):boolean{
    let propSan = props.replace(/ /g,'')
    propSan = propSan.replace(/\n/g,'')
    const firstChar = propSan.indexOf('{')
    propSan = propSan.substring(firstChar+1)
    const arr:string[] = []
    while(propSan.length>0){
      const openTag = propSan.indexOf('{')
      const closeTag = propSan.indexOf('}')
      if(openTag===-1&&closeTag===openTag){
        propSan = ''
      } else if((openTag<closeTag && openTag!==-1 && closeTag!==-1)||(openTag!==-1 && closeTag===-1)){
        arr.push('{')
        propSan = propSan.substring(openTag+1)
      } else if((closeTag<openTag && closeTag!==-1 && openTag!==-1)||(openTag===-1 && closeTag!==-1)){
        arr.push('}')
        propSan = propSan.substring(closeTag+1)
      }
    }
    let found = 1
    for (let i=0;i<arr.length;i++){
      if(found === 1){
        if(arr[i]==='}' && (i+1)!==arr.length){
          return false
        } else if(arr[i]==='{'){
          found++
        } else return true
      } else{
        if(arr[i]==='}') found--
        if(arr[i]==='{') found ++
      }
    }
    throw new Error('Bad build of blueprint string')
  }
  private getNextObjFromProps(props:string):string{
    if(props.indexOf(',')===-1||this.isLast(props)){
      return props.substring(props.indexOf('[')+1,props.lastIndexOf(']')).trim()
    }
    const cutoff = this.getCutOff(props)
    return props.substring(props.indexOf('{'),cutoff).trim()
  }
  private hasValueProp(propsObj:string):boolean{
    return propsObj.indexOf('value:')!==-1
  }
  private valueIsEnum(propsObj:string):boolean{
    return this.getTypeFromPropsObj(propsObj)==='enum'
  }
  private valueIsBlueprint(propsObj:string):boolean{
    return propsObj.indexOf('blueprint:')!==-1
  }
  private getEnumValues(propsObj:string):string[]{
    if(!this.valueIsEnum(propsObj)) throw new Error('Cannot get enum values because string has no enum values')
    return propsObj.substring(propsObj.indexOf('value:')+6,propsObj.lastIndexOf('}')).trim().split(',').map(el=>el.trim())
  }
  private getBlueprintObj(propsObj:string):string{
    if(!this.valueIsBlueprint(propsObj)) throw new Error('string has no blueprint value')
    propsObj = propsObj.substring(0,propsObj.lastIndexOf('}')).trim()
    return propsObj.substring(propsObj.indexOf('value:')+6,propsObj.lastIndexOf('}')+1).trim()
  }
}
