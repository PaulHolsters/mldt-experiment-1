import {MutationType} from "../../../../enums/mutationTypes.enum";
import utilFunctions from "../../../../utils/utilFunctions";
import {ObjectIdType} from "../../../../types/type-aliases";
import {ConfigService} from "../../../config.service";
import {ClientData} from "../../client/ClientData";
import { OutputData} from "../../../../types/union-types";

export class Mutation {
  public constructor(
    public readonly type:MutationType,
    public readonly data:ClientData,
    private configService:ConfigService
  ) {
  }
  private getData():OutputData|Error{
    return this.data.outputData ? this.data.outputData : new Error('data is not defined')
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
  // todo: zie dat als je een geselecteerd subconcept wijzigt dat je hier de ID's voor kunt meesturen en dat het werkt ...
  private getParamsForRecord(data:OutputData):string {
    if (!data) return ''
    let str = ''
    const entries = Object.entries(data)
    entries.forEach(([k, v  ],index) => {
      if(v instanceof Array && v.length>0){
        index+2===entries.length ? str+=k+':['+v.map(val=>{
          return '"'+val.id+'"'
        }).toString()+']' :
          str+=k+':['+v.map(val=>{
            return '"'+val.id+'"'
          }).toString()+'],'
      } else if(v instanceof Array){
        index+2===entries.length ? str += k + ':[]':
          str += k + ':[],'
      } else if(k!=='__typename'){
        if(this.singularPropNeedsQuotes(k)){
          index+2===entries.length ? str += k + ':' + (v).toString():
            str += k + ':"' + (v).toString()+'",'
        } else{
          index+2===entries.length ? str += k + ':' + (v).toString():
            str += k + ':' + (v).toString()+','
        }
      }
    })
    return str
  }
  private singularPropNeedsQuotes(k:string):boolean{
    const prop = this.data.blueprint?.properties.properties.get(k)
    switch (prop){
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
      case "objectId":
        return true
      default:
        if(!prop || (prop instanceof Array && (prop[0]==='enum'||prop[0]==='list'))) return false
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
/*    const cn = extractConcept(this.configService.appConfig.userConfig.effects.find(e=>{
      return e.action.target === this.data.name
    })?.action.conceptName,this.configService)*/
    if(this.data.blueprint.conceptName){
      const str =  `
    mutation Mutation{
      ${this.type}${utilFunctions.capitalizeFirst(this.data.blueprint.conceptName)}(${this.getParams()}){
        __typename
      }
    }
    `
      debugger
      return str
    } else throw new Error('No concept found so mutation could not be done '+this.type)

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
