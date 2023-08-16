import { Injectable } from '@angular/core';
import {QuerySubType} from "../../enums/querySubType.enum";
import {ComponentModel} from "../../models/ComponentModel";
import {ClientDataConfigModel} from "../../models/Data/ClientDataConfigModel";
import utilFunctions from "../../utils/utilFunctions";
import {Apollo, gql} from "apollo-angular";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {Action} from "../../effectclasses/Action";
import {TargetType} from "../../enums/targetTypes.enum";
import {DataObjectModel} from "../../models/DataObjectModel";
import {DataSpecificationType} from "../../enums/dataSpecifications.enum";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private apollo:Apollo) { }
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
  public query(querySubType: QuerySubType, compConfig: ComponentModel, id?: string): any {
    switch (querySubType) {
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
  }

  /***********************************     QUERY ACTIONS         ***************************************************************/
  public getDataBluePrint(action: Action) {
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
    }
  }
  public async getAllData(action: Action) {
    if (action.targetType === TargetType.Client) {
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
    }
    // todo maak een flow waarbij je data kan doorpompen naar een volgende actie
  }

  public async getDataByID(action: Action, id: string) {
    if (action.targetType === TargetType.Client) {
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
    }
    // todo maak een flow waarbij je data kan doorpompen naar een volgende actie
  }
}
