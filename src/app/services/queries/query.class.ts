import {MutationType} from "../../enums/mutationTypes.enum";
import utilFunctions from "../../utils/utilFunctions";
import {ClientDataConfigModel} from "../../models/Data/ClientDataConfigModel";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {QueryType} from "../../enums/queryTypes";
import {ConceptNameType, ObjectIdType} from "../../types/type-aliases";
import {FilterModel} from "../../models/FilterModel";
export class Query {
  public constructor(
    public readonly type:QueryType,
    public readonly conceptName:ConceptNameType,
    public readonly filter?:ObjectIdType|FilterModel
  ) {
  }
  private getAllAttributes(compName: string, data: ClientDataConfigModel | string[]): string {
    if (data instanceof ClientDataConfigModel && data.attributes && data.attributes instanceof Array && data.attributes.length > 0) {
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
    throw new Error('Methode getAllAttributes onvolledig of incorrect')
  }
  private getParams():string|Error{
    switch (this.type){
      case QueryType.:
        return ''
      case MutationType.CreateMultiple:
        return ''
      case MutationType.Update:
        return ''
      case MutationType.UpdateMultiple:
        return ''
      case MutationType.Delete:
        return ''
      case MutationType.DeleteMultiple:
        return ''
      default:
        return new Error('Querytype '+this.type+ ' does not exist')
    }
  }
  public getStr(): string {
    return `
    mutation Mutation{
      get${utilFunctions.capitalizeFirst(this.data.conceptName)}(${this.getParams()}){
        ${this.getReturnValues()}
      }
    }
    `
  }
}
