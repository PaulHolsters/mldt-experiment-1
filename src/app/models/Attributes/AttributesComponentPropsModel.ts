export class AttributesComponentPropsModel {
  // dit model representeert de verschillende props betreffende de typische HTML attributen van een component
  // zoals ze uiteindelijk geconsumeerd zullen worden door de component
  constructor(  public src?:string|undefined,
                public alt?:string|undefined,
                public name?:string|undefined,
                public icon?:string|undefined,
                public label?:string|undefined,
                public width?:number|undefined) {
  }

  public setProperty(propName: string, value: string | undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
