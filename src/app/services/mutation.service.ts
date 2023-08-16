import { Injectable } from '@angular/core';
import {AttributeConfigModel} from "../models/Data/AttributeConfigModel";
import {NoValueType} from "../enums/no_value_type";
import {ConceptConfigModel} from "../models/Data/ConceptConfigModel";
import {MutationType} from "../enums/mutationTypes.enum";
import {DataRecordModel} from "../models/DataRecordModel";
import utilFunctions from "../utils/utilFunctions";
import {Observable} from "rxjs";
import {Apollo, gql} from "apollo-angular";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Trigger} from "../effectclasses/Trigger";

@Injectable({
  providedIn: 'root'
})
export class MutationService {
  constructor(private apollo:Apollo) { }
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
  private getMutationObject(){

  }
  private createMutationStr(data: ConceptConfigModel | string[] | undefined, verb: MutationType,id?:string, dataFromServer?: DataRecordModel): string {
    if (data instanceof ConceptConfigModel) {
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
  public mutate(mutationStr:string): Observable<any> | undefined {
    return this.apollo
      .mutate({
        mutation: gql`${mutationStr}`
      }) as unknown as Observable<any>
  }
  /***********************************     MUTATION ACTIONS         ***************************************************************/
  public async persistNewData(trigger: Trigger,data:DataRecordModel) {
    let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
    await this.mutate(this.createMutationStr(comp?.data, MutationType.Create,data))?.subscribe(res => {
      console.log(res, 'yeah!')
    })
  }
  public async persistUpdatedData(trigger: Trigger) {
    let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
    if (comp && comp.data && comp.data instanceof ConceptConfigModel && comp.data.conceptName) {
      const cname = comp.data.conceptName
      const conceptId = this.objectData.find(d => {
        return d.conceptName === cname && d.conceptData?.id && d.conceptData.id !== NoValueType.NA
      })?.conceptData?.id
      if (conceptId) {
        await this.mutate(this.createMutationStr(comp?.data, MutationType.Update, conceptId))?.subscribe(res => {
          console.log(res, 'yeah!')
        })
      }
    } else throw new Error('No valid conceptId could be found')
  }
  public deleteDataById( id: string, target: EventTarget | undefined){
    return this.mutate(this.createMutationStr(undefined, MutationType.Delete, id))
  }
  public deleteData(trigger: Trigger) {
    let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
    if (comp && comp.data && comp.data instanceof ConceptConfigModel && comp.data.conceptName) {
      const cname = comp.data.conceptName
      let conceptId
      const dataObj = this.objectData.find(d => {
        return d.conceptName === cname && (d.conceptData?.id && d.conceptData.id !== NoValueType.NA)||(d.conceptBluePrint&&
          typeof d.attributes !== 'string' &&
          d.attributes.find(attr=>{
            if(attr.name === 'id' && attr?.text?.value && attr.text.value !== NoValueType.NA){
              conceptId = attr.text.value
              return true
            }
            return false
          }))
      })
      if(!conceptId) conceptId = dataObj?.conceptData?.id
      if (conceptId) {
        return this.mutate(this.createMutationStr(comp?.data, MutationType.Delete, conceptId))
      } else return undefined
    } else throw new Error('No valid conceptId could be found')
  }
}
