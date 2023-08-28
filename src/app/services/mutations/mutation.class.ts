import {MutationType} from "../../enums/mutationTypes.enum";
import {ClientDataRenderModel} from "../../models/Data/ClientDataRenderModel";
import {DataRecordModel} from "../../models/DataRecordModel";
import utilFunctions from "../../utils/utilFunctions";
import {ConceptPropertyValueType} from "../../types/union-types";
import {ObjectIdType} from "../../types/type-aliases";
export class Mutation {
  public constructor(
    public readonly type:MutationType,
    public readonly data:ClientDataRenderModel
  ) {
  }
  private getData():DataRecordModel|(DataRecordModel|null)[]|Error{
    switch (this.type){
      case MutationType.Create:
        return this.data.record ?? new Error('data is undefined')
      case MutationType.CreateMultiple:
        return this.data.listOfRecords ?? new Error('data is undefined')
      case MutationType.Update:
        return this.data.record ?? new Error('data is undefined')
      case MutationType.UpdateMultiple:
        return this.data.listOfRecords ?? new Error('data is undefined')
      case MutationType.Delete:
        return this.data.record ?? new Error('data is undefined')
      case MutationType.DeleteMultiple:
        return this.data.listOfRecords ?? new Error('data is undefined')
      default:
        return new Error('Mutationtype '+this.type+ ' does not exist')
    }
  }
  private getParams(): string {
    const data = this.getData()
    if(data instanceof Array){
      // todo lijst met records updaten of inserten
      throw new Error('lijst met records inserten, deleten of updaten nog niet geïmplementeerd')
    } else{
      if(data instanceof Error) throw data
      return this.getParamsForRecord(data)
    }
  }
  private getParamsForRecord(data:DataRecordModel|null):string {
    if (!data) return ''
    let str = ''
    const entries = Object.entries(data)
    entries.forEach(([k, v  ],index) => {
      if(v instanceof Array && v.length>0){
        // array of DataRecordModel = lijst sub-concept zoals een product met een lijst aan specificaties
        // dit heeft altijd de vorm van een lijst met id's, een sub-concept zelf wordt nooit aangepast
        // binnen een concept door middel van dezelfde request, dit moeten dus altijd twee requests worden in dat geval
        // en wel zo dat dan de request van het sub-concept eerst gebeurd en pas na succes de request voor het hoofdconcept
        // todo werk de "as" weg
        str+='['
        v.forEach((val,index)=>{
          index+1===v.length ? str+='"'+(val as ObjectIdType).toString()+'"' : str+='"'+(val as ObjectIdType).toString()+'",'
        })
        str+=']'
      } else{
        // todo werk de "as" weg
        if(this.singularPropNeedsQuotes(k)){
          index+1===entries.length ? str += k + ':' + (v as ConceptPropertyValueType).toString():
            str += k + ':"' + (v as ConceptPropertyValueType).toString()+'",'
        } else{
          index+1===entries.length ? str += k + ':' + (v as ConceptPropertyValueType).toString():
            str += k + ':' + (v as ConceptPropertyValueType).toString()+','
        }
      }
    })
    return str
  }
  private singularPropNeedsQuotes(k:string):boolean{
    switch (this.data.blueprint?.properties.properties.get(k)){
      case "string":
        return true
      case "number":
        return false
      case "date":
        return true
      case "enum":
        return false
      case "boolean":
        return false
      default:
        throw new Error(k+' is not a singular property or type of '+k+' is not implemented')
    }
  }
  // todo refactor: get rid of conditionals => factory pattern!
/*  if (data === NoValueType.DBI) return ''
  const strVal = data.map(x => {
      return `\
${(x.number?.value || x.text?.value || x.radio?.value || x.multiselect?.selectedOptions) ? (x.name + ':' || '') : ''}\
${(x.text?.value) ? '"' : (x.multiselect?.selectedOptions) ? '[' : ''}${(x.multiselect?.selectedOptions?.length ?? 0) > 0 ? '"' : ''}\
${(x.number?.value || x.text?.value || x.radio?.value || x.multiselect?.selectedOptions?.map(opt => {
        return opt.id
      }).join('","')) || ''}${(x.multiselect?.selectedOptions?.length ?? 0) > 0 ? '"' : ''}\
${(x.text?.value) ? '"' : (x.multiselect?.selectedOptions) ? ']' : ''}
`
    }
  )
    .reduce((x, y) => x += `,` + y).trim()
  // todo zorg nog voor een meer ordelijke GQL string hier
  return strVal.charAt(strVal.length - 1) === ',' ? strVal.substring(0, strVal.length - 1) : strVal*/
  private getReturnValues():string{
    return ''
  }
  public getStr(): string {
    // todo wat als je acties wil uitvoeren waarbij je meerdere concept instanties at once wil wijzi gen?
    /*
    * de voorwaarde voor het aanspreken van deze mutatie dus wanneer je een mutation action wil doen
    * is dat er voor deze actie een juist clientDataInstance bestaat zodat je data parameter inderdaad kqn geven alsook de conceptnaam
    *
    * VERB = Type of Action
    * ConceptName = BackendMutation
    * PARAMS = DATARECORDMODEL
    * return values = errorhandling + errormessages = clientDataRenderModel.errorMessages
    * */
    return `
    mutation Mutation{
      ${this.type}${utilFunctions.capitalizeFirst(this.data.conceptName)}(${this.getParams()}){
        ${this.getReturnValues()}
      }
    }
    `
/*
    if (data instanceof ClientDataConfigModel) {
      const currentData = this.objectData.find(dataObj => {
        return dataObj.conceptName === data.conceptName
      })


      // todo ik vermoed dat dit een create is ...
      if (currentData) {
        return `mutation Mutation {
              ${verb}${utilFunctions.capitalizeFirst(data.conceptName)}(${this.getMutationParams(data.attributes)}) {
                    dataSingle{id}
              }
            }`
      }
      // todo en dit een update ...
    } else if(id){
      return `mutation Mutation {
              ${verb}${dataFromServer?.__typename.substring(0,dataFromServer?.__typename.length-4)}(id:"${id}") {
                    dataSingle{id}
              }
            }`
    }
    throw new Error('Geen geldige data configuratie.')*/
  }
}
