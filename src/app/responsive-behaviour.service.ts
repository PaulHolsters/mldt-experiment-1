import {Injectable} from '@angular/core';
import {ComponentModel} from "./models/ComponentModel";
import {StoreService} from "./store.service";
@Injectable({
  providedIn: 'root'
})
export class ResponsiveBehaviourService{
  constructor(private storeService:StoreService) {
    console.log('rbs')
  }
  private setState(component: ComponentModel, screenSize: number) {
    if (component.visibility){
      this.storeService.setRBSState(component.name, this.storeService.getVisibilityComponentProps(component.name, component.visibility, screenSize))
    }
    if (component.position)
      this.storeService.setRBSState(component.name, this.storeService.getPositionComponentProps(component.name, component.position, screenSize))
    if (component.dimensions){
      this.storeService.setRBSState(component.name, this.storeService.getDimensionsComponentProps(component.name, component.dimensions, screenSize))
    }
    if (component.overflow)
      this.storeService.setRBSState(component.name, this.storeService.getOverflowComponentProps(component.name, component.overflow, screenSize))
    if (component.childLayout){
      this.storeService.setRBSState(component.name, this.storeService.getChildLayoutComponentProps(component.name, component.childLayout, screenSize))
    }
    if (component.children && component.children.length > 0) {
      this.storeService.setRBSState(component.name, component.children as ComponentModel[])
      component.children.forEach(child => {
        if (typeof child === 'string') {

        } else {
          this.setState(child, screenSize)
        }
      })
    }
    if (component.attributes){
      Object.values(this.storeService.getAttributesComponentProps(component.name, component.attributes, screenSize)).filter(val=>{
        return val instanceof ComponentModel
      }).forEach(val=>{
        this.setState(val,screenSize)
      })
      this.storeService.setRBSState(component.name, this.storeService.getAttributesComponentProps(component.name, component.attributes, screenSize))
    }
    if (component.styling)
      this.storeService.setRBSState(component.name, this.storeService.getStylingComponentProps(component.name, component.styling, screenSize))

  }
  public setComponentStates( screenSize: number) {
    this.storeService.appConfig?.userConfig.components.forEach(comp => {
      this.setState(comp, screenSize)
    })
  }

}
