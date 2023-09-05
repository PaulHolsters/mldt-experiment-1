import utilFunctions from "../../../../utils/utilFunctions";
import {QueryType} from "../../../../enums/queryTypes";
import {AttributeNameType, ConceptNameType, ObjectIdType} from "../../../../types/type-aliases";
import {FilterModel} from "../../../../models/FilterModel";
import {NoValueType} from "../../../../enums/no_value_type";
import {Blueprint} from "../../client/Blueprint";
import {Properties} from "../../client/Properties";

export class Query {
  public constructor(
    public readonly type:QueryType,
    public readonly conceptName:ConceptNameType,
    public readonly numberOfNesting:number|NoValueType.NA=NoValueType.NA,
    public readonly blueprint:Blueprint|NoValueType.NA=NoValueType.NA,
    public readonly id:ObjectIdType|NoValueType.NA=NoValueType.NA,
    public readonly filter:FilterModel|NoValueType.NA=NoValueType.NA,
    public readonly include:AttributeNameType[]|NoValueType.NA=NoValueType.NA,
    public readonly exclude:AttributeNameType[]|NoValueType.NA=NoValueType.NA,
  ) {}
  private getAllAttributes(): string {
    function getProperties(properties:Properties):string{
      return [...properties.properties.keys()].map((a,b,c)=>{
        let returnA = a
        if((properties.properties.get(returnA) as [string,any])[0]==='list'||
          (properties.properties.get(returnA) as [string,any])[0]==='object'){
          returnA += '{\n'+getProperties((properties.properties.get(returnA) as [string,[Blueprint,any]])[1][0].properties)+'}'
        }
        return returnA+'\n'}
      ).join('')
    }
    if(!this.blueprint ||this.blueprint===NoValueType.NA) throw new Error('no blueprint client data was given while needed')
    return getProperties(this.blueprint.properties as Properties)
/*    if (data instanceof ClientDataConfigModel && data.attributes && data.attributes instanceof Array && data.attributes.length > 0) {
      return data.attributes.map(x => {
        if (x.concept && x.concept.attributes && x.concept.attributes instanceof Array) {
          // todo zie dat je eindeloos kan gaan indien nodig
          return x.name + `{\n${x.concept.attributes.map(attr => attr.name).join('\n')}}`
        }
        return x.name || ''
      }).reduce((x, y) => x += '\n' + y, '')
    } else if (!(data instanceof ClientDataConfigModel)) {
      let compConfig = this.configService.getFirstAncestorConfigWithPropertyFromRoot(compName,PropertyName.data)
      if (!compConfig) throw new Error('attributen voor ' + data.toString() + ' en component met naam ' + compName +
        ' werden niet gevonden. Kijk je configuratie na.')
      if (compConfig.data
        && (compConfig.data instanceof ClientDataConfigModel)
        && typeof compConfig.data.attributes !== 'string'
        && compConfig.data?.conceptName === data[0]) {
        const concept = compConfig.data.attributes.find(attr => {
          return attr.name === data[1]
        })?.concept
        if (concept && typeof concept.attributes !== 'string') {
          return concept.attributes.map(a => a.name).join('\n')
        }
      } else {
        throw new Error('Attributen niet gevonden. Kijk je configuratie na.')
      }
    }
    throw new Error('Methode getAllAttributes onvolledig of incorrect')*/
  }
  private getParams():string|Error{
    switch (this.type){
      case QueryType.GetNumberOfNesting:
        return 'numberOfNesting:true'
      case QueryType.GetConceptBlueprint:
        return 'blueprint:true'
      case QueryType.GetSingleRecord:
        return 'id:"'+this.id+'"'
      case QueryType.GetAllRecords:
        return 'multiple:true'
      case QueryType.GetMultipleRecords:
        return 'multiple:true'
      default:
        return new Error('Querytype '+this.type+ ' does not exist')
    }
  }
  private getReturnValues():string{
    let str = ''
    switch (this.type){
      case QueryType.GetNumberOfNesting:
        str+='numberOfNesting'
        break
      case QueryType.GetConceptBlueprint:
        str+='blueprint'
        break
      case QueryType.GetSingleRecord:
        str+='dataSingle{'+this.getAllAttributes()+'}'
        break
      case QueryType.GetAllRecords:
        str+='dataMultiple{'+this.getAllAttributes()+'}'
        break
      case QueryType.GetMultipleRecords:
        str+='dataMultiple{'+this.getAllAttributes()+'}'
        break
      default:
        break
    }
    return str
  }
  public getStr(): string {
    return `
    query Query{
      get${utilFunctions.capitalizeFirst(this.conceptName)}(${this.getParams()}){
        ${this.getReturnValues()}
      }
    }
    `
  }
}
/*
*             query{
        getProduct(multiple:true,blueprint:true){
        dataMultiple {

     id
name
price
specifications{
id
name}}
        blueprint{
name
price
specifications{
id
name}}
        }}
* */
