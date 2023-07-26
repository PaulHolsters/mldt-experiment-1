import {Injectable} from '@angular/core';
import {ActionModel} from "./models/ActionModel";
import {ComponentModel} from "./models/ComponentModel";
import {StoreService} from "./store.service";
import {ActionsService} from "./actions.service";
import AppConfig from "./app-configuration/appConfig";
import {DataService} from "./data.service";
import {ResponsiveVisibilityConfigModel} from "./models/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveAttributesConfigModel} from "./models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveDimensioningConfigModel} from "./models/Dimensioning/self/ResponsiveDimensioningConfigModel";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }
  public saveConfig(config:AppConfig){
    // todo laat dit verlopen via een event!
    this._appConfig.push(Object.create(config))
  }
  public get appConfig():AppConfig|undefined{
    if(this._appConfig.length>0)
      return Object.create(this._appConfig[this._appConfig.length-1])
    return undefined
  }
  private _appConfig:AppConfig[]=[]

/*  private resolve(value: CalculationModel): MixedArrayModel {
    let paramsArr: MixedArrayModel = []
    for (let v of value.values) {
      if (typeof v === 'object' && v.hasOwnProperty('calc')) {
        paramsArr = paramsArr.concat(this.resolve(v))
      } else if (typeof v === 'object') {
        Object.values(v).forEach(val => {
          paramsArr.push(val)
        })
      } else {
        paramsArr.push(v)
      }
    }
    paramsArr.push(this.storeService.getStatePropertySubjects())
    for (let [attr, val] of Object.entries(myFunctions)) {
      if (attr === value.calc) {
        const calcRes = Reflect.apply(val.fun, null, paramsArr)
        if (typeof calcRes === 'object') {
          const result = []
          for (let val of Object.values(calcRes)) {
            result.push(val)
          }
          return result
        }
        return [calcRes]
      }
    }
    throw ('no calculation found to be executed for ' + value.calc)
  }*/

/*  private emitNewPropValueFor(componentName: string, propName: string, value: string | boolean | number | CalculationModel) {
    let valueToSet
    if (typeof value === 'object') {
      valueToSet = this.resolve(value)[0]
    } else {
      valueToSet = value
    }
    this.storeService.getStatePropertySubjects().find(subj => {
      return subj.componentName === componentName && subj.propName === propName
    })?.propValue.next(valueToSet)
  }*/

  /*  executeAction(action: ActionModel) {
      if (action.action === 'set') {
        action.props.forEach(prop => {
          if (this.conditionsMet(prop)) {
            this.emitNewPropValueFor(action.target, prop.name, prop.value)
          }
        })
      } else {
        action.props.forEach(prop => {
          for (let [attr, val] of Object.entries(myFunctions)) {
            if (attr === action.action) {
              if (this.conditionsMet(prop)) {
                const paramsArr = [
                  action.target,
                  prop.name,
                  this.storeService.getStatePropertySubjects()
                ]
                this.emitNewPropValueFor(action.target, prop.name, Reflect.apply(val.fun, null, paramsArr))
              }
              break
            }
          }
        })
      }
    }*/

/*  private conditionsMet(prop: CalculationConfigModel): boolean {
    for (let [attr, val] of Object.entries(comparisons)) {
      if (attr === prop.condition?.comparison) {
        let valuesArr: any[] = []
        prop.condition.values.forEach(v => {
          if (typeof v === 'object' && v.hasOwnProperty('calc')) {
            valuesArr = valuesArr.concat(this.resolve(v))
          } else if (typeof v === 'object') {
            // dan zijn er geen dieperliggende calculation verboregen in dit object!
            Object.values(v).forEach(val => {
              valuesArr.push(val)
            })
          } else {
            valuesArr.push(v)
          }
        })
        valuesArr.push(this.storeService.getStatePropertySubjects())
        return Reflect.apply(val.fun, null, valuesArr)
      }
    }
    return true
  }*/

  getAppTemplateData(): { components: ComponentModel[], actions: ActionModel[] }|undefined {
    return this.appConfig?.userConfig
  }
}
