import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {ActionsService} from "../../actions.service";
import {ConfigService} from "../../config.service";
import {ActionType} from "../../../enums/actionTypes.enum";
import {Action} from "../../../effectclasses/Action";
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {Apollo} from "apollo-angular";
import {QueryService} from "./queries/query.service";
import {MutationService} from "./mutations/mutation.service";
import {ActionIdType, ComponentNameType, ConceptNameType, isServerDataRequestType} from "../../../types/type-aliases";
import {Effect} from "../../../effectclasses/Effect";
import {Blueprint} from "../client/Blueprint";
import {ClientDataService} from "../client/client-data.service";
import {ServerData} from "./ServerData";
import {
  DataRecord,
  extractConcept,
  isOutPutData, List,
  ServerData as ServerDataType
} from "../../../types/union-types";
import {ClientData} from "../client/ClientData";

// todo fix
@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  //  todo een taal bedenken voor extra calculated fields based on related data and concepts
  //  todo a way to filter data
  //  todo a way to order data (sort)
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:ActionIdType}>()

  constructor(private configService:ConfigService,
              private apollo: Apollo,
              private actionsService:ActionsService,
              private clientDataService:ClientDataService,
              private queryService:QueryService,
              private mutationService:MutationService
  ) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){

    //********************     queries     ****************************/

    this.actionsService.bindToAction(new Action('',ActionType.GetBluePrint))?.subscribe(async res => {
      if (res && ((res.effect.action.conceptName && res.effect.action.target)||isServerDataRequestType(res.data))) {
        let concept:string|undefined
        let target:string|{target: string, field: string}[]|undefined
        if(!isServerDataRequestType(res.data)){
          concept = extractConcept(res.effect.action.conceptName) ? extractConcept(res.effect.action.conceptName)
            : typeof res.data === 'string' ? res.data:undefined
          target = res.effect.action.target
        } else{
          concept = res.data.concept
          target = res.data.target
        }
        if(concept){
          this.queryService.getNumberOfNesting(concept).subscribe(resFirst=>{
            const data = ServerData.getData(resFirst)
            if(data && concept){
              if(ServerData.dataIsNumber(data,'numberOfNesting')){
                this.queryService
                  .getBlueprint(concept,ServerData.getDataValue(data,'numberOfNesting'))
                  .subscribe(resOrErr=>{
                    const data = ServerData.getData(resOrErr)
                    if(data && target){
                      if(target instanceof Array){
                        target.forEach(t=>{
                          createClientData(this,data.blueprint,res.effect.action.id,t.target,[], data)
                          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
                        })
                      } else{
                        createClientData(this,data.blueprint,res.effect.action.id,target,[], data)
                        this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
                      }
                    } else{
                      // todo handle error
                    }
                  })
              }
            }
          })
        }
      }
    })

    this.actionsService.bindToAction(new Action('',ActionType.GetInstance))?.subscribe(async res => {
      function getRecord(
        self:ServerDataService,
        blueprint:Blueprint,
        res:{effect: Effect, data: string, target: EventTarget | undefined},
        concept:ConceptNameType,
        target?:ComponentNameType|{target:ComponentNameType,field:string}[],
        actionId?:ActionIdType){
        self.queryService.getSingleRecord(concept, blueprint, res.data).subscribe(errorOrResult=>{
          const data = ServerData.getData(errorOrResult)
          if(data && isOutPutData(data.dataSingle)){
            const dataSingle = data.dataSingle
            if(target){
              self.clientDataService.updateClientData(target,dataSingle)
              self.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
            } else if(actionId){
              self.clientDataService.updateClientData(actionId,dataSingle)
              self.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
            } else{
              self.clientDataService.updateClientData(res.effect.action.target,dataSingle)
              self.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
            }
          } else{
            throw new Error('bad types')
          }
        })
      }

      if (res) {
        if(isServerDataRequestType(res.data)){
          const serverRequestData = res.data
          // dit betekent frontend data
          this.queryService.getNumberOfNesting(res.data.concept).subscribe(resFirst=>{
            const data = ServerData.getData(resFirst)
            if(data && data.numberOfNesting){
              this.queryService.getBlueprint(serverRequestData.concept,ServerData.getDataValue(data,'numberOfNesting')).subscribe(resOrErr=>{
                const data = ServerData.getData(resOrErr)
                if(data){
                  createClientData(this,data.blueprint,serverRequestData.actionId,serverRequestData.target,[],undefined)
                  const target = serverRequestData.target instanceof Array ?  serverRequestData.target[0].target : serverRequestData.target
                  const blueprint = this.clientDataService.getClientDataInstanceForComponent(target)?.blueprint
                  if (blueprint) {
                    // todo multiple target s in this method or not?
                    getRecord(this,blueprint,{effect:res.effect,data:serverRequestData.data, target:res.target},
                      serverRequestData.concept,serverRequestData.target,serverRequestData.actionId)
                  }
                } else{
                  // todo handle error
                }
              })} else{
              // todo handle error
            }
          })
        } else{
          // gewone opvraag
          const concept = extractConcept(res.effect.action.conceptName)
          const info:{effect:Effect,data:string,target:EventTarget} = res as {effect:Effect,data:string,target:EventTarget}
          if (typeof res.data === 'string' && res.effect.action.target && concept) {
            const target = res.effect.action.target instanceof Array ?  res.effect.action.target[0].target : res.effect.action.target
            const blueprint = this.clientDataService.getClientDataInstanceForComponent(target)?.blueprint
            if (blueprint) {
              getRecord(this,blueprint,info,concept)
            } else{
              this.queryService.getNumberOfNesting(concept).subscribe(resFirst=>{
                const data = ServerData.getData(resFirst)
                if(data && data.numberOfNesting){
                  this.queryService.getBlueprint(concept,ServerData.getDataValue(data,'numberOfNesting')).subscribe(resOrErr=>{
                    const data = ServerData.getData(resOrErr)
                    if(data){
                      createClientData(this,data.blueprint,res.effect.action.id,target,[],data)
                      const blueprint = this.clientDataService.getClientDataInstanceForComponent(target)?.blueprint
                      if (blueprint) {
                        getRecord(this,blueprint,info,concept)
                      }
                    } else{
                      // todo handle error
                    }
                  })} else{
                  // todo handle error
                }
              })
            }
          }
        }
      }
    })

    this.actionsService.bindToAction(new Action('',ActionType.GetAllInstances))?.subscribe(async res => {
      if (res && !isServerDataRequestType(res.data)) {
        // gewone getAllInstances
        const info = {effect:res.effect,data:res.data,target:res.target}
        const concept = extractConcept(res.effect.action.conceptName)
        function getAllRecords(self:ServerDataService, blueprint:Blueprint, res:{effect: Effect,
          data:  string | Blueprint | ClientData | [string, (List | DataRecord)]|DataRecord|List, target: EventTarget | undefined},concept:ConceptNameType){
          self.queryService.getAllRecords(concept, blueprint).subscribe(errorOrResult=>{
            const data = ServerData.getData(errorOrResult)
            if(data && data.dataMultiple){
              const dataC:List = data.dataMultiple
              if(isOutPutData(dataC)){
                self.clientDataService.updateClientData(res.effect.action.target,dataC)
              }
            } else{
              // todo handle error
            }
            self.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          })
        }

        const target = res.effect.action.target instanceof Array ?  res.effect.action.target[0].target : res.effect.action.target
        const blueprint = this.clientDataService.getClientDataInstanceForComponent(target)?.blueprint
        if (blueprint && concept) {
          getAllRecords(this,blueprint,info,concept)
        } else if(concept){
          this.queryService.getNumberOfNesting(concept).subscribe(resFirst=>{
            const data = ServerData.getData(resFirst)
            if(data && ServerData.dataIsNumber(data,'numberOfNesting')){
              const numberOfNesting = ServerData.getDataValue(data,'numberOfNesting')
              this.queryService.getBlueprint(concept, numberOfNesting).subscribe(resOrErr => {
                const data = ServerData.getData(resOrErr)
                if(data){
                  // todo client data wordt niet aangemaakt!
                  createClientData(this, data.blueprint, res.effect.action.id,res.effect.action.target,[], undefined)
                  const blueprint = this.clientDataService.getClientDataInstanceForComponent(target)?.blueprint
                  if (blueprint) {
                    getAllRecords(this, blueprint, info,concept)
                  }
                } else{
                  // todo handle error
                }
              })
            }
          })
        }
      }
    })

    //********************     mutations     ****************************/

    this.actionsService.bindToAction(new Action('',ActionType.DeleteInstance))?.subscribe(res => {
      // todo werk data als any weg
      if (res &&  res.data instanceof ClientData) {
        // todo verder uitwerken bv verwijderen van client data
        this.mutationService.deleteRecordOrHandleError(res.data)?.subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })
      }
    })

    this.actionsService.bindToAction(new Action('',ActionType.CreateInstance))?.subscribe(res=>{
      if(res){
        // todo gebruik target want dit bevat alle nodige fields , alleen is het zo dat een actie niet per se een target moet hebben!
/*        const clientData = this.clientDataService.getClientDataInstancesForId(res.effect.action.id)
        if(!clientData||clientData.length===0) throw new Error('No valid clientData found')
        this.mutationService.createRecordOrHandleError(clientData).subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })*/
      }
    })

    this.actionsService.bindToAction(new Action('',ActionType.UpdateInstance))?.subscribe(res=>{
      if(res){
        // todo assemble all pieces to one object for update
/*        const clientData = this.clientDataService.getClientData(res.effect.action.target)
        if(!clientData) throw new Error('No valid clientData found')
        // onderstaande methode heeft de blueprint en alle outputdata nodig
        this.mutationService.updateRecordOrHandleError(clientData).subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })*/
      }
    })

    //********************     Helpers     ****************************/
    function createClientData(self:ServerDataService,
                              blueprintStr:string|null,
                              actionId:ActionIdType,
                              name:ComponentNameType | {target: string, field: string}[],
                              errorMessages:string[]|undefined,
                              data:ServerDataType|undefined){
      // in eerste instantie is data undefined
      let outputData
      if(data?.dataMultiple){
        outputData = data?.dataMultiple
      } else if(data?.dataSingle){
        outputData = data?.dataSingle
      }
      if(blueprintStr){
        self.clientDataService.createClientData(
          actionId,
          name,
          new Blueprint(blueprintStr),
          outputData,
          errorMessages
        )
      }
    }
  }
}
