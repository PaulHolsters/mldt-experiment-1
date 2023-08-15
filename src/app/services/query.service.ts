import { Injectable } from '@angular/core';
import {QuerySubType} from "../enums/querySubType.enum";
import {ComponentModel} from "../models/ComponentModel";
import {ConceptConfigModel} from "../models/Data/ConceptConfigModel";
import utilFunctions from "../utils/utilFunctions";
import {Apollo, gql} from "apollo-angular";
import {PropertyName} from "../enums/PropertyNameTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private apollo:Apollo) { }
  private getAllAttributes(compName: string, data: ConceptConfigModel | string[]): string {
    if (data instanceof ConceptConfigModel && data.attributes && data.attributes instanceof Array && data.attributes.length > 0) {
      return data.attributes.map(x => {
        if (x.concept && x.concept.attributes && x.concept.attributes instanceof Array) {
          // todo zie dat je eindeloos kan gaan indien nodig
          return x.name + `{\n${x.concept.attributes.map(attr => attr.name).join('\n')}}`
        }
        return x.name || ''
      }).reduce((x, y) => x += '\n' + y, '')
    } else if (!(data instanceof ConceptConfigModel)) {
      let compConfig = this.configService.getFirstAncestorConfigWithPropertyFromRoot(compName,PropertyName.data)
      if (!compConfig) throw new Error('attributen voor ' + data.toString() + ' en component met naam ' + compName +
        ' werden niet gevonden. Kijk je configuratie na.')
      if (compConfig.data
        && (compConfig.data instanceof ConceptConfigModel)
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
        if (compConfig.data instanceof ConceptConfigModel) {
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
        if (compConfig.data instanceof ConceptConfigModel) {
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
        if (compConfig.data && !(compConfig.data instanceof ConceptConfigModel)) {
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
        } else if (compConfig.data instanceof ConceptConfigModel) {
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
}
