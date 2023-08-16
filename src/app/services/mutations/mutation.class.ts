import {MutationType} from "../../enums/mutationTypes.enum";
import {ClientDataRenderModel} from "../../models/Data/ClientDataRenderModel";
import {DataRecordModel} from "../../models/DataRecordModel";
import {ClientDataConfigModel} from "../../models/Data/ClientDataConfigModel";
import utilFunctions from "../../utils/utilFunctions";
import {AttributeConfigModel} from "../../models/Data/AttributeConfigModel";
import {NoValueType} from "../../enums/no_value_type";
export class Mutation {
  public constructor(
    public readonly type:MutationType,
    public readonly data:ClientDataRenderModel
  ) {
  }
  public getData():DataRecordModel|(DataRecordModel|null)[]|Error{
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
  private getMutationParams(data: AttributeConfigModel[] | NoValueType.DBI): string {
    // todo refactor: get rid of conditionals => factory pattern!
    if (data === NoValueType.DBI) return ''
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
    return strVal.charAt(strVal.length - 1) === ',' ? strVal.substring(0, strVal.length - 1) : strVal
  }
  public getStr(): string {
    /*
    * de voorwaarde voor het aanspreken van deze mutatie dus wanneer je een mutation action wil doen
    * is dat er voor deze actie een juist clientDataInstance bestaat zodat je data parameter inderdaad kqn geven alsook de conceptnaam
    *
    * VERB = Type of Action
    * ConceptName = BackendMutation
    * PARAMS = DATARECORDMODEL
    * return values = errorhandling + errormessages
    * */


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
    throw new Error('Geen geldige data configuratie.')
    // todo maar naast een create single zou je ook een create multiple kunnen hebben en zelfs een update multiple
    // todo en een delete zie ik hier precies niet dus als die er is is dt absoluut niet duidelijk en expliciet (genoeg)
    //      of liever de verb bepaald diet maar daarna is er een hoop onduidelijke mumbojumbo met parameters en methodes
    //      waarbij het niet duidelijk is wat dit doet en wat de relatie met de VERB parameter is
    //
  }
}
