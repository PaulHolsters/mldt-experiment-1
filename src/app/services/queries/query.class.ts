import utilFunctions from "../../utils/utilFunctions";
import {QueryType} from "../../enums/queryTypes";
import {AttributeNameType, BlueprintType, ConceptNameType, ObjectIdType} from "../../types/type-aliases";
import {FilterModel} from "../../models/FilterModel";
import {NoValueType} from "../../enums/no_value_type";

export class Query {
  public constructor(
    public readonly type:QueryType,
    public readonly conceptName:ConceptNameType,
    public readonly blueprint:BlueprintType|NoValueType.NA=NoValueType.NA,
    public readonly filter:ObjectIdType|FilterModel|NoValueType.NA=NoValueType.NA,
    public readonly include:AttributeNameType[]|NoValueType.NA=NoValueType.NA,
    public readonly exclude:AttributeNameType[]|NoValueType.NA=NoValueType.NA,
  ) {
  }
  private getAllAttributes(): string {
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
      case QueryType.GetConceptBlueprint:
        return 'blueprint:true'
      case QueryType.GetSingleRecord:
        return 'blueprint:true,dataSingle:true'
      case QueryType.GetAllRecords:
        return 'blueprint:true,dataMultiple:true'
      case QueryType.GetMultipleRecords:
        return 'blueprint:true,dataMultiple:true'
      default:
        return new Error('Querytype '+this.type+ ' does not exist')
    }
  }
  private getReturnValues():string{
    // blueprint/dataSingle/dataMultiple
    let str = ''
    switch (this.type){
      case QueryType.GetConceptBlueprint:
        if(this.blueprint!==NoValueType.NA){

        } else{
          // todo hoe ken ik de attributes zonder frontend config => wat is de oplossing in de backend?
          str+='blueprint{' +
            '}'
        }
        break
      case QueryType.GetSingleRecord:

        break
      case QueryType.GetAllRecords:

        break
      case QueryType.GetMultipleRecords:

        break
      default:
        break
    }
    return
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
