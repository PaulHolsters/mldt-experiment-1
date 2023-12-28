import {Injectable} from '@angular/core';
import AppConfig from "./appConfig";
import {TriggerType} from "../enums/triggerTypes.enum";
import {PropertyName} from '../enums/PropertyNameTypes.enum';
import {Effect} from '../effectclasses/Effect';
import {ServiceType} from "../enums/serviceTypes.enum";
import {SystemEffects} from "../effectclasses/systemEffects";
import {ComponentModelType, isNoValueType} from "../types/union-types";
import {ScreenSize} from "../enums/screenSizes.enum";
import {NoValueType} from "../enums/NoValueTypes.enum";
import {ActionIdType, ComponentNameType} from "../types/type-aliases";
import {Action} from "../effectclasses/Action";
import {ServerAction} from "../effectclasses/ServerAction";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {
  }

  public saveConfig(config: AppConfig) {
    this._appConfig.push(config)
  }

  public get appConfig(): AppConfig {
    if (this._appConfig.length > 0) return this._appConfig[this._appConfig.length - 1]
    throw new Error('appConfig requested when not yet initialised')
  }

  private _appConfig: AppConfig[] = []

  public getEffectsForComponent(name: string): Effect[] {
    return this.appConfig.userConfig.effects.filter((effect: Effect) => {
      return effect.action.target === name
    }).concat(...SystemEffects.getSystemEffects().filter((effect: Effect) => {
      return effect.action.target === name
    }))
  }

  public get effects() {
    return this.appConfig.userConfig.effects.concat(...SystemEffects.getSystemEffects())
  }

  public getEffectsForTrigger(trigger: TriggerType) {
    return this.appConfig.userConfig.effects.filter((effect: Effect) => {
      return effect.trigger.name === trigger
    }).concat(...SystemEffects.getSystemEffects().filter((effect: Effect) => {
      return effect.trigger.name === trigger
    }))
  }
  public getEffectsForEvent(trigger: TriggerType, source:string|[ComponentNameType,string|(number|undefined)]|ServiceType): Effect[] {
    if (source instanceof Array && typeof source[1]==='string') {
      const sec = source[1]
      return this.appConfig.userConfig.effects.filter((effect) => {
        return (
          effect.trigger.source instanceof Array
          && effect.trigger.name === trigger
          && effect.trigger.source[0] === source[0]
          && effect.trigger.source[1].toLowerCase() === sec.toLowerCase())
      }).concat(...SystemEffects.getSystemEffects().filter((effect: Effect) => {
        if (trigger === TriggerType.ComponentHide) {
          return effect.trigger.name === trigger
        }
        return (
          effect.trigger.source instanceof Array
          && effect.trigger.name === trigger
          && effect.trigger.source[0] === source[0]
          && effect.trigger.source[1].toLowerCase() === sec.toLowerCase())
      }))
    } else {
      // todo filer component name out of it
      if(!(source instanceof Array)){
        return this.appConfig.userConfig.effects.filter((effect) => {
          return effect.trigger.name === trigger && effect.trigger.source === source
        }).concat(...SystemEffects.getSystemEffects().filter((effect: Effect) => {
          if (trigger === TriggerType.ComponentHide) {
            return effect.trigger.name === trigger
          }
          return effect.trigger.name === trigger && effect.trigger.source === source
        }))
      } else{
        return this.appConfig.userConfig.effects.filter((effect) => {
          return effect.trigger.name === trigger && effect.trigger.source === source[0]
        }).concat(...SystemEffects.getSystemEffects().filter((effect: Effect) => {
          if (trigger === TriggerType.ComponentHide) {
            return effect.trigger.name === trigger
          }
          return effect.trigger.name === trigger && effect.trigger.source === source[0]
        }))
      }
    }
  }

  /*
  * export const RootComponent = new AppConfig({
  components: [
    mainContainer
  ],
  effects: effects
})
  * */
  public getConfigFromComponent(nameComponent: string, component: ComponentModelType): ComponentModelType | undefined {
    if (component.name === nameComponent) return component
    if (!component.children && !component.contentInjection) return undefined
    const children = this.getAllChildren(component)
    while (children.length > 0) {
      const child = children.pop() as ComponentModelType
      if (child.name === nameComponent) return child
      children.unshift(...this.getAllChildren(child))
    }
    return undefined
  }

  public getConfigFromRoot(nameComponent: string): ComponentModelType | undefined {
    if ((this.appConfig.userConfig).components.length !== 1) throw new Error('Only one root component named content-container is allowed')
    return this.getConfigFromComponent(nameComponent, (this.appConfig.userConfig).components[0])
  }

  public getParentConfig(nameComponent: string, component: ComponentModelType): ComponentModelType | undefined {
    if (component.name === nameComponent) return undefined
    const getParentWithChildren = (parent: ComponentModelType): [ComponentModelType, ComponentModelType][] => {
      const arr: [ComponentModelType, ComponentModelType][] = []
      if (parent.children) {
        // todo via contentInjection heb je ook nog parents
        for (let child of parent.children) {
          arr.push([parent, child])
        }
      }
      return arr
    }
    const arr: ComponentModelType[][] = getParentWithChildren(component)
    while (arr.length > 0) {
      const parentChild: ComponentModelType[] = arr.pop() as ComponentModelType[]
      if (parentChild[1].name === nameComponent) return parentChild[0]
      arr.unshift(...getParentWithChildren(parentChild[1]))
    }
    return undefined
  }

  public getParentConfigFromRoot(nameComponent: string): ComponentModelType | undefined {
    if (this.appConfig.userConfig.components.length !== 1) throw new Error('Only one root component named content-container is allowed')
    if (this.appConfig.userConfig.components[0].name === nameComponent) return undefined
    return this.getParentConfig(nameComponent, this.appConfig.userConfig.components[0])
  }

  public isAncestor(nameComponent: string, nameAncestor: string): boolean {
    let parent = this.getParentConfigFromRoot(nameComponent)
    while (parent && parent.name !== nameAncestor) {
      parent = this.getParentConfigFromRoot(parent.name)
    }
    return parent !== undefined
  }

  public getFirstAncestorConfigWithProperty(nameComponent: string, component: ComponentModelType, property: PropertyName)
    : ComponentModelType | undefined {
    let parent = this.getParentConfig(nameComponent, component)
    while (parent && !(parent.hasOwnProperty(property))) {
      parent = this.getParentConfig(nameComponent, parent)
    }
    return parent
  }

  public getFirstAncestorConfigWithPropertyFromRoot(nameComponent: string, property: PropertyName): ComponentModelType | undefined {
    if (this.appConfig.userConfig.components.length !== 1) throw new Error('Only one root component named content-container is allowed')
    return this.getFirstAncestorConfigWithProperty(nameComponent, this.appConfig.userConfig.components[0], property)
  }

  isSubComponent(nameSubcomponent: string, nameParentComponent: string): boolean {
    const subComponent = this.getConfigFromRoot(nameSubcomponent)
    if (!subComponent) throw new Error('subcomponent does not exist')
    let parentOfSub = this.getParentConfigFromRoot(subComponent.name)
    while (parentOfSub && parentOfSub.name !== nameParentComponent) {
      parentOfSub = this.getParentConfigFromRoot(parentOfSub.name)
    }
    return parentOfSub !== undefined
  }

  /*  getAttributeValue(screenSize: ScreenSize, confirmationModel: PropertyName, attributes: ResponsiveAttributesConfigModel): any {
      let lastScreenSize = screenSize
      const stateModelObj = Object.create(attributes)
      while (lastScreenSize >= 0) {
        if (stateModelObj[ScreenSize[lastScreenSize]]) {
          const prop = Object.keys(stateModelObj[ScreenSize[lastScreenSize]]).find(key => {
            return key === confirmationModel
          })
          if (prop) return stateModelObj[ScreenSize[lastScreenSize]][prop]
        }
        lastScreenSize--
      }
      throw new Error('No screensize configuration was found for given ResponsiveTableConfigModel and' +
        ' property ' + confirmationModel + ' and screen ' + ScreenSize[screenSize])
    }*/

  /*  getAppTemplateData(): { components: ComponentModelType[], ef: ActionModel[] } | undefined {
      return this.convertToComponentModelTypes(this.appConfig?.userConfig)
    }*/

  getAllChildren(c: ComponentModelType, screenSize?: ScreenSize) {
    const getAllDirectChildrenViaDDChildren = function (c: ComponentModelType): ComponentModelType[] {
      if (c.children) return c.children
      else return []
    }
    const getAllDirectChildrenViaDDContentInjection = function (c: ComponentModelType, screenSize?: ScreenSize): ComponentModelType[] {
      let arr: ComponentModelType[] = []
      if (c.contentInjection) {
        const injection: {
          [key: string]: any
        } | undefined = c.contentInjection
        if (screenSize) {
          let lastScreenSize: ScreenSize = screenSize
          while (lastScreenSize >= 0) {
            if (injection[ScreenSize[lastScreenSize]] === NoValueType.CALCULATED_BY_ENGINE) {
              lastScreenSize--
            } else {
              arr = injection[ScreenSize[lastScreenSize]].getComponents()
              lastScreenSize = -1
            }
          }
        } else {
          arr = arr.concat(c.contentInjection.smartphone.getComponents())
          if (!isNoValueType(c.contentInjection.portraitTablet)) {
            arr = arr.concat(c.contentInjection.portraitTablet.getComponents())
          }
          if (!isNoValueType(c.contentInjection.tablet)) {
            arr = arr.concat(c.contentInjection.tablet.getComponents())
          }
          if (!isNoValueType(c.contentInjection.laptop)) {
            arr = arr.concat(c.contentInjection.laptop.getComponents())
          }
          if (!isNoValueType(c.contentInjection.highResolution)) {
            arr = arr.concat(c.contentInjection.highResolution.getComponents())
          }
        }
      }
      return arr
    }
    return getAllDirectChildrenViaDDChildren(c).concat(getAllDirectChildrenViaDDContentInjection(c, screenSize))
  }

  getAllDecendants(name: string): ComponentModelType[] {
    const comp = this.getConfigFromRoot(name)
    if (!comp) throw new Error('no component config found with name ' + name)
    const children = this.getAllChildren(comp)
    const childrenFound = []
    while (children.length > 0) {
      const child = children.pop() as ComponentModelType
      children.unshift(...this.getAllChildren(child))
      childrenFound.push(child)
    }
    return childrenFound
  }

  getAllComponents(screenSize?: ScreenSize): ComponentModelType[] {
    const allComponents: ComponentModelType[] = []
    const components = [...this.appConfig.userConfig.components]
    let root
    if (components.length === 1) {
      root = Object.assign({}, components[0])
    } else throw new Error('Er mag maar 1 root component zijn')
    const directChildren = this.getAllChildren(root, screenSize)
    allComponents.push(root)
    while (directChildren.length > 0) {
      const child = directChildren.pop() as ComponentModelType
      const children = this.getAllChildren(child, screenSize)
      allComponents.push(child)
      directChildren.unshift(...children)
    }
    return allComponents
  }

  getActions(id: ActionIdType | undefined): Action | ServerAction | undefined {
    return this.effects.find(e => {
      return e.action.id === id
    })?.action
  }

  effectIdExists(data: string) {
    return this.effects.find(e=>{
      return e.id === data
    }) !== undefined
  }
}

function keyof(arg0: string) {
  throw new Error('Function not implemented.');
}

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
/*  public convertToComponentModelTypes(userConfig: {
    components: ComponentModelTypeType[],
    effects: Effect[]
  }): { components: ComponentModelTypeType[], effects: Effect[] } {
    let convertedObj: { components: ComponentModelType[], effects: Effect[] } = {
      components: [],
      effects: [...userConfig.effects]
    }
    let componentsCopy = [...userConfig.components]
    if(componentsCopy.length!==1) throw new Error('Only one root component is allowed')

    convertedObj.components = [this.getTreeOfComponentModelTypes(this.convertToComponentModelType(componentsCopy[0]))]
    return convertedObj
  }*/
/*  private getTreeOfComponentModelTypes(component: ComponentModelTypeType): ComponentModelTypeType {
    // todo voeg hier de screensize ook aan toe
    const componentsWithChildrenToConvert:ComponentModelTypeType[] = this.convertChildren(component)
    while(componentsWithChildrenToConvert.length>0){
      const child:ComponentModelTypeType = componentsWithChildrenToConvert.pop() as ComponentModelTypeType
      componentsWithChildrenToConvert.unshift(...this.convertChildren(child))
    }
    return component
  }*/
/*  private convertChildren(component:ComponentModelTypeType):ComponentModelTypeType[]{
    const arr = []
    if (component.children) {
      for (let child of component.children) {
        child = this.convertToComponentModelType(child)
        arr.push(child)
      }
    } else if (component.contentInjection) {
      for (let responsiveModel of Object.values(component.contentInjection)) {
        if(responsiveModel){
          for (let v of Object.values(responsiveModel)){
            if(v instanceof ComponentModelType||this.isComponentObjectModel(v)){
              v = this.convertToComponentModelType(v)
              arr.push(v)
            } else if(v instanceof Array){
              if(v.length>0){
                for (let vChild of v){
                  if(typeof vChild === 'object' && vChild.hasOwnProperty('field')  && vChild.hasOwnProperty('header')){
                    vChild = this.convertToComponentModelType(vChild.anchor)
                    arr.push(vChild)
                  } else{
                    vChild = this.convertToComponentModelType(vChild)
                    arr.push(vChild)
                  }
                }
              }
            }
          }
        }
      }
    }
    return arr
  }*/
/*  public getComponentObjectModelPropertyValue(comp: any, prop: string): any {
    // todo deze methode moet eruit!
    if (!this.isComponentObjectModel(comp)) return undefined
    switch (prop) {
      case 'name':
        return comp.name
      case 'dimensions':
        return comp.dimensions
      case 'visibility':
        return comp.visibility
      case 'children':
        return comp.children
      case 'childLayout':
        return comp.childLayout
      case 'styling':
        return comp.styling
      case 'overflow':
        return comp.overflow
      case 'attributes':
        return comp.attributes
      case 'position':
        return comp.position
      case 'type':
        return comp.type
      case 'data':
        return comp.data
      case 'contentInjection':
        return comp.contentInjection
      default:
        throw new Error('unknown property ' + prop)
    }
  }*/
/*  public isComponentObjectModel(l: unknown): boolean {
    if (l && typeof l === 'object' && !(l instanceof ComponentModelType)) {
      const arrFoundKeys = Object.keys(l).filter(k => {
        return [
          'name',
          'dimensions',
          'position',
          'children',
          'childLayout',
          'visibility',
          'styling',
          'overflow',
          'attributes',
          'type',
          'data',
          'contentInjection'].includes(k)
      })
      return arrFoundKeys.length === Object.keys(l).length
    }
    return false
  }*/

