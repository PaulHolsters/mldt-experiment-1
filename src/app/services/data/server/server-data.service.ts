import {Injectable} from '@angular/core';
import {catchError, map, Subject} from "rxjs";
import {ActionsService} from "../../actions.service";
import {ConfigService} from "../../config.service";
import {ActionType} from "../../../enums/actionTypes.enum";
import {Action} from "../../../effectclasses/Action";
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {Apollo} from "apollo-angular";
import {
  ActionIdType,
  ComponentNameType, EffectIdType,
  FormTargetType,
} from "../../../types/type-aliases";
import {ClientDataService} from "../client/client-data.service";
import {
  DataRecord, isDataRecord, isList,
  List,
} from "../../../types/union-types";
import {HttpClient} from "@angular/common/http";

// todo fix
@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  //  todo een taal bedenken voor extra calculated fields based on related data and concepts
  //  todo a way to filter data
  //  todo a way to order data (sort)
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:[EffectIdType,number|undefined]|ActionIdType}>()
  constructor(private configService:ConfigService,
              private apollo: Apollo,
              private actionsService:ActionsService,
              private clientDataService:ClientDataService,
              private http: HttpClient
  ) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }

  public bindActions(){
    function createOrUpdateClientData(self:ServerDataService,
                              actionId:ActionIdType,
                              name:ComponentNameType |FormTargetType,
                              errorMessages:string[]|undefined,
                              data:List | DataRecord |undefined){
      self.clientDataService.createOrUpdateClientData(
        actionId,
        name,
        data,
        errorMessages
      )
    }
    this.actionsService.bindToAction(new Action('',ActionType.ExecuteServerAction))?.subscribe(res=>{
      // todo bij elke bindToAction moet je EffectAsSource vastellen en doorgeven ???
      if(res){
        const action = res.effect.action
        let body: {id:string}|undefined
        if(isDataRecord(res.data)){
          body = {id:res.data.id}
        }
        this.http.post('http://localhost:5000/' + action.id,body).subscribe(res=>{
          if(isList(res)||isDataRecord(res)){
            // todo controleer dat deze methode het effect aflevert na beëindiging
            createOrUpdateClientData(this,action.id, action.target,undefined,res)
          }
        })
      }
    })

    //********************     queries     ****************************/

/*    this.actionsService.bindToAction(new Action('',ActionType.GetBluePrint))?.subscribe(async res => {
      if (res && ((res.effect.action.conceptName && res.effect.action.target)||isServerDataRequestType(res.data))) {
        let concept:string|undefined
        let target:string|FormTargetType|undefined
        if(!isServerDataRequestType(res.data)){
          concept = extractConcept(res.effect.action.conceptName,this.configService) ? extractConcept(res.effect.action.conceptName,this.configService)
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
                      if(typeof target !== 'string'){
                        target.controls.forEach(t=>{
                          createClientData(this,data.blueprint,res.effect.action.id,t.target,[], data)
                          this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
                        })
                        // todo create ook clientdata voor submit button s

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
        target?:ComponentNameType|FormTargetType,
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
                  const target = typeof serverRequestData.target !== 'string' ?  serverRequestData.target.controls[0].target : serverRequestData.target
                  const blueprint = this.clientDataService.getClientDataInstanceForComponent(target)?.blueprint
                  if (blueprint) {
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
          const concept = extractConcept(res.effect.action.conceptName,this.configService)
          const info:{effect:Effect,data:string,target:EventTarget} = res as {effect:Effect,data:string,target:EventTarget}
          if (typeof res.data === 'string' && res.effect.action.target && concept) {
            const target = typeof res.effect.action.target !== 'string' ?  res.effect.action.target.controls[0].target : res.effect.action.target
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
        const concept = extractConcept(res.effect.action.conceptName,this.configService) // dit geeft nu "p" voor "product"
        function getAllRecords(self:ServerDataService, blueprint:Blueprint, res:{effect: Effect,
          data:  string | Blueprint | ClientData | [string, (List | DataRecord)]|DataRecord|List, target: EventTarget | undefined},concept:ConceptNameType){
          self.queryService.getAllRecords(concept, blueprint).subscribe(errorOrResult=>{
            const data = ServerData.getData(errorOrResult)
            if(data && data.dataMultiple){
              debugger
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

        const target = typeof res.effect.action.target !== 'string' ?  res.effect.action.target.controls[0].target : res.effect.action.target
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
    })*/

    //********************     mutations     ****************************/

/*    this.actionsService.bindToAction(new Action('',ActionType.DeleteInstance))?.subscribe(res => {
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
/!*        const clientData = this.clientDataService.getClientDataInstancesForId(res.effect.action.id)
        if(!clientData||clientData.length===0) throw new Error('No valid clientData found')
        this.mutationService.createRecordOrHandleError(clientData).subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })*!/
      }
    })

    this.actionsService.bindToAction(new Action('',ActionType.UpdateInstance))?.subscribe(res=>{
      if(res && typeof res.effect.trigger.source === 'string'){
        const clientData = this.clientDataService.getClientDataInstanceForComponent(res.effect.trigger.source)
        if(!clientData) throw new Error('No valid clientData found')
        this.mutationService.updateRecordOrHandleError(clientData).subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })
      }
    })*/

    //********************     Helpers     ****************************/

  }
}
