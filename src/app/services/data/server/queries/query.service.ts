import {Injectable} from '@angular/core';
import {QueryType} from "../../../../enums/queryTypes";
import {Apollo, gql} from "apollo-angular";
import {Observable} from "rxjs";
import {Query} from "./query.class";
import {ConceptNameType, ObjectIdType} from "../../../../types/type-aliases";
import {Blueprint} from "../../client/Blueprint";
import {FilterModel} from "../../../../design-dimensions/FilterModel";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private apollo:Apollo) { }

  private query(query:Query): Observable<{data:Object}>{
    return this.apollo
      .mutate({
        mutation: gql`${query.getStr()}`
      }) as unknown as Observable<{data:Object}>
  }
  /*
  *     switch (querySubType) {
      case QuerySubType.GetDataBluePrint:
        if (compConfig.data instanceof ClientDataConfigModel) {
          const GET_BLUEPRINT = `
                    {
                      get${utilFunctions.capitalizeFirst(compConfig.data.conceptName)}(blueprint:true){
                      blueprint{
                        ${this.getAllAttributes(compConfig.name, compConfig.data)}
                      }
                      }
                    }
        `
          return this.apollo
            .watchQuery<any>({
              query: gql`${GET_BLUEPRINT}`
            }).valueChanges
        }
        break
      case QuerySubType.GetDataByID:
        if (compConfig.data instanceof ClientDataConfigModel) {
          const GET_BY_ID = `{
        get${utilFunctions.capitalizeFirst(compConfig.data.conceptName)}(id:"${id}",blueprint:true){
        dataSingle{
        id
        ${this.getAllAttributes(compConfig.name, compConfig.data)}
        }
        blueprint{${this.getAllAttributes(compConfig.name, compConfig.data)}}
        }
        }`
          return this.apollo
            .watchQuery<any>({
              query: gql`${GET_BY_ID}`
            }).valueChanges
        }
        break
      case QuerySubType.GetAllData:
        // typisch voor een component zoals een tabel
        if (compConfig.data && !(compConfig.data instanceof ClientDataConfigModel)) {
          // dit is voor als je enkel een subconcept nodig zou hebben, mogelijk is dat zelfs nooit het geval
          const GET_ALL = `
                    {
                      get${utilFunctions.capitalizeFirst(compConfig.data[compConfig.data.length - 1])}{
                      id
                        ${this.getAllAttributes(compConfig.name, compConfig.data)}
                      }
                    }
        `
          return this.apollo.watchQuery<any>({
            query: gql`${GET_ALL}`
          }).valueChanges
        } else if (compConfig.data instanceof ClientDataConfigModel) {
          const GET_ALL = `
                    {
                      get${utilFunctions.capitalizeFirst(compConfig.data.conceptName)}(multiple:true,blueprint:true){
                                            blueprint{
                        ${this.getAllAttributes(compConfig.name, compConfig.data)}
                      }
                              dataMultiple{
                              id
        ${this.getAllAttributes(compConfig.name, compConfig.data)}
        }
                      }
                    }
        `
          return this.apollo
            .watchQuery<any>({
              query: gql`${GET_ALL}`
            }).valueChanges
        }
        break
    }
  * */

  /***********************************     QUERY ACTIONS         ***************************************************************/
  public getNumberOfNesting(conceptName:ConceptNameType):Observable<{data:Object}> {
    return this.query(new Query(QueryType.GetNumberOfNesting, conceptName))
    /*    return await this.query(new Query(QueryType.GetConceptBlueprint, ))
        if (action.targetType === TargetType.Client) {
          let compModel = this.configService.getConfigFromRoot(action.target)
          if (compModel !== undefined) {
            this.query(QuerySubType.GetDataBluePrint, compModel).subscribe((res: unknown) => {
              if (res && typeof res === 'object' && res.hasOwnProperty('data') && compModel?.data) {
                const bluePrintData = (res as { data: {} })['data']
                const value = Object.values(bluePrintData)[0] as DataObjectModel
                const compObj = this.createExtendedConceptModel(action.target, value, compModel.data)
                if (compObj) {
                  this.objectData.push(compObj)
                  this.setDataObjectState(compModel.name, compModel.type, [DataSpecificationType.Blueprint], compObj)
                }
              }
            })
          }
        }*/
  }
  public getBlueprint(conceptName:ConceptNameType,numberOfNesting:number):Observable<{data:Object}> {
      return this.query(new Query(QueryType.GetConceptBlueprint, conceptName,numberOfNesting))
/*    return await this.query(new Query(QueryType.GetConceptBlueprint, ))
    if (action.targetType === TargetType.Client) {
      let compModel = this.configService.getConfigFromRoot(action.target)
      if (compModel !== undefined) {
        this.query(QuerySubType.GetDataBluePrint, compModel).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && compModel?.data) {
            const bluePrintData = (res as { data: {} })['data']
            const value = Object.values(bluePrintData)[0] as DataObjectModel
            const compObj = this.createExtendedConceptModel(action.target, value, compModel.data)
            if (compObj) {
              this.objectData.push(compObj)
              this.setDataObjectState(compModel.name, compModel.type, [DataSpecificationType.Blueprint], compObj)
            }
          }
        })
      }
    }*/
  }
  public getAllRecords(conceptName:ConceptNameType,blueprint:Blueprint):Observable<{data:Object}> {
    return this.query(new Query(QueryType.GetAllRecords, conceptName,undefined,blueprint))
/*    if (action.targetType === TargetType.Client) {
      let comp = this.configService.getConfigFromRoot(action.target)
      if (comp && comp.data) {
        await this.query(QuerySubType.GetAllData, comp).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && comp?.data) {
            const allData = (res as { data: {} })['data']
            const data = Object.values(allData)[0] as DataObjectModel
            const compObj = this.createExtendedConceptModel(action.target, data, comp.data)
            const error = compObj?.dataList?.includes(null) || compObj?.dataList === null
              || compObj?.conceptBluePrint === null || (compObj?.conceptBluePrint &&  Object.values(compObj?.conceptBluePrint).includes(null))
            if (comp.data && !(comp.data instanceof ClientDataConfigModel) && !error) {
              const attributeModel = this.getDataObject(comp.data, comp.type, [DataSpecificationType.DataList])
              // TODO ik denk niet dat een datalist nog nodig is
              if (attributeModel) {
                attributeModel.dataList = []
                data?.dataMultiple?.forEach(record => {
                  if (comp && comp.data && !(comp.data instanceof ClientDataConfigModel)) {
                    attributeModel?.dataList?.push(record)
                  }
                })
                this.setDataObjectState(comp.name, comp.type, [DataSpecificationType.DataList])
              }
            } else if (compObj && !error) {
              this.objectData.push(compObj)
              this.setDataObjectState(comp.name, comp.type, [DataSpecificationType.DataList], compObj)
            } else throw new Error('Error on the graphQL server')
          }
        })
      }
    }*/
    // todo maak een flow waarbij je data kan doorpompen naar een volgende actie
  }
  public getSingleRecord(conceptName:ConceptNameType,blueprint:Blueprint, id: ObjectIdType):Observable<{data:Object}> {
    return this.query(new Query(QueryType.GetSingleRecord, conceptName,undefined,blueprint,id))
/*    if (action.targetType === TargetType.Client) {
      let comp = this.configService.getConfigFromRoot(action.target)
      if (comp !== undefined && comp.data) {
        await this.query(QuerySubType.GetDataByID, comp, id).subscribe((res: unknown) => {
          if (res && typeof res === 'object' && res.hasOwnProperty('data') && comp?.data) {
            const dataByID = (res as { data: {} })['data']
            const data = Object.values(dataByID)[0] as DataObjectModel
            // todo in deze methode zal voor beide dataobjecten de formcontrols referen naar dezelfde data in het geheugen
            // todo dit stukje herbruiken in initialize form waarbij eerst wordt gepusht dan geset
            const compObj = this.createExtendedConceptModel(action.target, data, comp.data)
            const error = compObj?.conceptData === undefined
              || compObj?.conceptBluePrint === null || (compObj?.conceptBluePrint &&  Object.values(compObj?.conceptBluePrint).includes(null))
            if (compObj && !error) {
              this.saveData(compObj)
              this.setDataObjectState(comp.name, comp.type, [DataSpecificationType.Id, DataSpecificationType.Blueprint], compObj)
              // todo bij error de desbtreffende component vervangen door een standaard errortext component
            } else throw new Error('Error on the graphQL server: voor het id '+id+' bestaat geen record (meer). Mogelijks is het verwijderd geweest door een ' +
              'andere gebruiker.')
          }
        })
      }
    }*/
    // todo maak een flow waarbij je data kan doorpompen naar een volgende actie
  }
  public getMultipleRecords(conceptName:ConceptNameType,blueprint:Blueprint,filter:FilterModel):Observable<{data:Object}>{
    return this.query(new Query(QueryType.GetMultipleRecords, conceptName,undefined,blueprint,undefined,filter))
  }
}
