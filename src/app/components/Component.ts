import utilFunctions from "../utils/utilFunctions";
import {StateService} from "../state.service";
import {StoreService} from "../store.service";
import {EventsService} from "../events.service";
import {DataService} from "../data.service";
import {ChangeDetectorRef, Directive, Input} from "@angular/core";
import {StylesService} from "../styles.service";
@Directive()
export class Component{
  @Input() public name!:string
  constructor(
    protected cd: ChangeDetectorRef,
    protected stateService:StateService,
    protected storeService:StoreService,
    protected eventsService:EventsService,
    protected dataService:DataService,
    protected stylesService:StylesService) {
  }
  protected props:Map<string,any>|undefined
  getPropValue(key:string){
    return this.props?.get(key)
  }
  setPropValue(key:string,value:any,setProps?:string[],useProps?:{prop:string,use:string}[]){
    if(this.props){
      if(!utilFunctions.areEqual(this.props.get(key),value)){
        this.props.set(key,value)
        this.stateService.syncData(this.name,{key:key,value:value})
        if(setProps){
          setProps.forEach(p=>{
            if(this.props && typeof value === 'object' && value.hasOwnProperty(p) && !utilFunctions.areEqual(this.props.get(p),value[p])){
              this.props.set(p,value[p])
              this.stateService.syncData(this.name,{key:p,value:this.getPropValue(p)})
            }
          })
        }
        if(useProps){
          useProps.forEach(p=>{
            if(this.props && typeof value === 'object'
              && !utilFunctions.areEqual(this.props.get(p.prop),this.props.get(p.use))){
              this.props.set(p.prop,this.props.get(p.use))
              this.stateService.syncData(this.name,{key:p.prop,value:this.getPropValue(p.prop)})
            }
          })
        }
      }
    }
  }
}
