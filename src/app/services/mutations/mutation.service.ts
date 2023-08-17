import { Injectable } from '@angular/core';
import {MutationType} from "../../enums/mutationTypes.enum";
import {Observable} from "rxjs";
import {Apollo, gql} from "apollo-angular";
import {ConfigService} from "../config.service";
import {ClientDataRenderModel} from "../../models/Data/ClientDataRenderModel";
import {Mutation} from "./mutation.class";
import {ErrorHandlingService} from "../error-handling.service";

@Injectable({
  providedIn: 'root'
})
export class MutationService {
  constructor(private apollo:Apollo,private configService:ConfigService,private errorHandlingService:ErrorHandlingService) { }
  private mutate(mutation:Mutation): Observable<any> | undefined {
      return this.apollo
        .mutate({
          mutation: gql`${mutation.getStr()}`
        }) as unknown as Observable<any>
  }
  /***********************************     MUTATION ACTIONS         ***************************************************************/
  public async createRecordOrHandleError(clientDataInstance:ClientDataRenderModel) {
    //this.createMutationStr(comp?.data, MutationType.Create,data)
    // let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
    await this.mutate(new Mutation(MutationType.Create,clientDataInstance))?.subscribe(res => {
      // todo errorHandling
    })
  }
  public async updateRecordOrHandleError(clientDataInstance:ClientDataRenderModel) {
    await this.mutate(new Mutation(MutationType.Update,clientDataInstance))?.subscribe(res => {
      // todo errorHandling
    })
    // let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
/*    if (comp && comp.data && comp.data instanceof ClientDataConfigModel && comp.data.conceptName) {
      const cname = comp.data.conceptName
      const conceptId = this.objectData.find(d => {
        return d.conceptName === cname && d.conceptData?.id && d.conceptData.id !== NoValueType.NA
      })?.conceptData?.id
      if (conceptId) {
        await this.mutate(this.createMutationStr(comp?.data, MutationType.Update, conceptId))?.subscribe(res => {
          console.log(res, 'yeah!')
        })
      }
    } else throw new Error('No valid conceptId could be found')*/
  }
  public deleteRecordOrHandleError( clientDataInstance:ClientDataRenderModel){
    return this.mutate(new Mutation(MutationType.Update,clientDataInstance))?.subscribe(res => {
      // todo errorHandling
    })
  }
  public async createMultipleRecordsOrHandleError(clientDataInstance:ClientDataRenderModel) {
    //this.createMutationStr(comp?.data, MutationType.Create,data)
    // let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
    await this.mutate(new Mutation(MutationType.Create,clientDataInstance))?.subscribe(res => {
      // todo errorHandling
    })
  }
  public async updateMultipleRecordsOrHandleError(clientDataInstance:ClientDataRenderModel) {
    await this.mutate(new Mutation(MutationType.Update,clientDataInstance))?.subscribe(res => {
      // todo errorHandling
    })
    // let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
    /*    if (comp && comp.data && comp.data instanceof ClientDataConfigModel && comp.data.conceptName) {
          const cname = comp.data.conceptName
          const conceptId = this.objectData.find(d => {
            return d.conceptName === cname && d.conceptData?.id && d.conceptData.id !== NoValueType.NA
          })?.conceptData?.id
          if (conceptId) {
            await this.mutate(this.createMutationStr(comp?.data, MutationType.Update, conceptId))?.subscribe(res => {
              console.log(res, 'yeah!')
            })
          }
        } else throw new Error('No valid conceptId could be found')*/
  }
  public deleteMultipleRecordsOrHandleError( clientDataInstance:ClientDataRenderModel){
    return this.mutate(new Mutation(MutationType.Update,clientDataInstance))?.subscribe(res => {
      // todo errorHandling
    })
  }
/*  public deleteData(trigger: Trigger) {
    let comp = this.configService.getFirstAncestorConfigWithPropertyFromRoot(trigger.source, PropertyName.data)
    if (comp && comp.data && comp.data instanceof ClientDataConfigModel && comp.data.conceptName) {
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
  }*/
}
