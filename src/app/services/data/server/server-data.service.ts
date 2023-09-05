import {Injectable} from '@angular/core';
import {AttributeComponentModel} from "../../../models/DataRepresentation/AttributeComponentModel";
import {NoValueType} from "../../../enums/no_value_type";
import {Subject} from "rxjs";
import {DataRecordModel} from "../../../models/DataRecordModel";
import {FunctionType} from "../../../enums/functionTypes.enum";
import utilFunctions from "../../../utils/utilFunctions";
import {ActionsService} from "../../actions.service";
import {ConfigService} from "../../config.service";
import {ActionType} from "../../../enums/actionTypes.enum";
import {Action} from "../../../effectclasses/Action";
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {Apollo} from "apollo-angular";
import {QueryService} from "./queries/query.service";
import {MutationService} from "./mutations/mutation.service";
import {ActionIdType, ComponentNameType, ConceptNameType} from "../../../types/type-aliases";
import {Effect} from "../../../effectclasses/Effect";
import {Blueprint} from "../client/Blueprint";
import {ClientData} from "../client/ClientData";
import {ClientDataService} from "../client/client-data.service";
import {ServerData} from "./ServerData";

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
      if (res) {
        this.queryService.getNumberOfNesting(res.effect.action.conceptName).subscribe(resFirst=>{
          const data = ServerData.getData(resFirst)
          if(data){
            if(ServerData.dataIsNumber(data,'numberOfNesting')){
              this.queryService.getBlueprint(res.effect.action.conceptName,ServerData.getDataValue(data,'numberOfNesting')).subscribe(resOrErr=>{
                const data = ServerData.getData(resOrErr)
                if(data){
                  // todo op termijn type safety toevoegen voor data zodat dit het gewenste type is
                  createClientData(this,data.blueprint,res.effect.action.id,res.effect.action.target,[],NoValueType.NI, data)
                  this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
                } else{
                  // todo handle error
                }
              })
            }
          }
        })
      }
    })

    this.actionsService.bindToAction(new Action('',ActionType.GetInstance))?.subscribe(async res => {
      if (res) {
        if (typeof res.data === 'string') {
          // todo zie dat je hier van een ObjectId type kan uitgaan
          function getRecord(self:ServerDataService, blueprint:Blueprint, res:{effect: Effect, data: any, target: EventTarget | undefined}){
            self.queryService.getSingleRecord(res.effect.action.conceptName, blueprint, res.data).subscribe(errorOrResult=>{
              const data = ServerData.getData(errorOrResult)
              if(data){
                if(data.dataSingle){
                  self.clientDataService.updateClientData(res.effect.action.id,data.dataSingle)
                  const cd = self.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)
                  if(cd)
                    self.clientDataService.clientDataUpdated.next(cd)
                }
                self.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
              } else{
                // todo handle error
              }
            })
          }
          const blueprint = this.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)?.blueprint
          if (blueprint) {
            getRecord(this,blueprint,res)
          } else{
            this.queryService.getNumberOfNesting(res.effect.action.conceptName).subscribe(resFirst=>{
              const data = ServerData.getData(resFirst)
              if(data){
              if(ServerData.dataIsNumber(data,'numberOfNesting')){
                this.queryService.getBlueprint(res.effect.action.conceptName,data.numberOfNesting).subscribe(resOrErr=>{
                  const data = ServerData.getData(resOrErr)
                  if(data){
                    createClientData(this,data.blueprint,res.effect.action.id,res.effect.action.target,[],NoValueType.NI,data)
                    const blueprint = this.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)?.blueprint
                    if (blueprint) {
                      getRecord(this,blueprint,res)
                    }
                  } else{
                    // todo handle error
                  }
                })
              }} else{
                // todo handle error
              }
            })
          }
        }
      }
    })

    this.actionsService.bindToAction(new Action('',ActionType.GetAllInstances))?.subscribe(async res => {
      if (res) {
        function getAllRecords(self:ServerDataService, blueprint:Blueprint, res:{effect: Effect, data: any, target: EventTarget | undefined}){
          self.queryService.getAllRecords(res.effect.action.conceptName, blueprint).subscribe(errorOrResult=>{
            const data = ServerData.getData(errorOrResult)
            if(data.dataMultiple){
              self.clientDataService.updateClientData(res.effect.action.id,data.dataMultiple)
              const cd = self.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)
              if(cd){
                self.clientDataService.clientDataUpdated.next(cd)
              }
            } else{
              // todo handle error
            }
            self.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          })
        }
        const blueprint = this.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)?.blueprint
        if (blueprint) {
          getAllRecords(this,blueprint,res)
        } else{
          this.queryService.getNumberOfNesting(res.effect.action.conceptName).subscribe(resFirst=>{
            const data = ServerData.getData(resFirst)
            if(ServerData.dataIsNumber(data,'numberOfNesting')){
              const numberOfNesting = ServerData.getDataValue(data,'numberOfNesting')
              this.queryService.getBlueprint(res.effect.action.conceptName, numberOfNesting).subscribe(resOrErr => {
                const data = ServerData.getData(resOrErr)
                if(data){
                  createClientData(this, data.blueprint, res.effect.action.id,res.effect.action.target,[], NoValueType.NI, data)
                  const blueprint = this.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)?.blueprint
                  if (blueprint) {
                    getAllRecords(this, blueprint, res)
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
      if (res) {
        // todo verder uitwerken bv cverwijderen vabn client data
        this.mutationService.deleteRecordOrHandleError(res.data.id)?.subscribe(errorOrResult=>{
          if (errorOrResult) {
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })
      }
    })
    this.actionsService.bindToAction(new Action('',ActionType.CreateInstance))?.subscribe(res=>{
      if(res){
        const clientData = this.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)
        if(!clientData) throw new Error('No valid clientData found')
        this.mutationService.createRecordOrHandleError(clientData).subscribe(errorOrResult=>{
          if (errorOrResult) {
            // todo wijzigen clientdata na aanmaak van nieuwe instance in db
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })
      }
    })
    this.actionsService.bindToAction(new Action('',ActionType.UpdateInstance))?.subscribe(res=>{
      if(res){
        const clientData = this.clientDataService.getClientData(res.effect.action.id,res.effect.action.target)
        if(!clientData) throw new Error('No valid clientData found')
        this.mutationService.updateRecordOrHandleError(clientData).subscribe(errorOrResult=>{
          if (errorOrResult) {
            // todo wijzigen clientdata na wijizgen van instance in db
            this.actionFinished.next({trigger: TriggerType.ActionFinished, source: res.effect.action.id})
          }
        })
      }
    })

    //********************     Client Data Actions     ****************************/
    // todo clientdata actions moeten misschien in een aparte service?



    //********************     Helpers     ****************************/
    // todo helpers zijn verwarrend => extra klasse nodig!
    function createClientData(self:ServerDataService,
                              blueprintStr:string|undefined,
                              actionId:ActionIdType,
                              name:ComponentNameType,
                              attributes:AttributeComponentModel[],
                              errorMessages:string[]|NoValueType.NI,
                              data:(DataRecordModel|null)[]|DataRecordModel|NoValueType.NVY){
      if(blueprintStr){
        self.clientDataService.createClientData(
          actionId,
          name,
          new Blueprint(blueprintStr),
          data,
          NoValueType.NA,
          attributes,
          errorMessages
        )
        const cd = self.clientDataService.getClientData(actionId,name)
        if(cd){
          self.clientDataService.clientDataUpdated.next(cd)
        }
      }
    }
  }



  //*******************************   HELPERS ********************************************************/
  // todo maak hier een klasse rond die ook door de clientdataservice gebruikt kan worden (pure functions?)


}
