import utilFunctions from "../utils/utilFunctions";
import {StateService} from "../services/state.service";
import {StoreService} from "../services/store.service";
import {EventsService} from "../services/events.service";
import {DataService} from "../services/data.service";
import {ChangeDetectorRef, Directive, Input} from "@angular/core";
import {StylesService} from "../services/styles.service";
import {EventType} from "../enums/eventTypes.enum";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {ComponentType} from "../enums/componentTypes.enum";
import {InputFontSizeType} from "../enums/inputFontSizeType.enum";
import {NoValueType} from "../enums/no_value_type";
import {RestrictionType} from "../enums/restrictionType.enum";
import {FontWeightType} from "../enums/fontWeightType.enum";
import {FontSizeType} from "../enums/fontSizeType.enum";
import {FontStyleType} from "../enums/fontStyleType.enum";
import {TextColorType} from "../enums/textColorType.enum";
import {TextDecorationType} from "../enums/textDecorationType.enum";
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
  protected readonly EventType = EventType
  protected readonly PropertyName = PropertyName
  protected readonly componentType = ComponentType
  protected readonly NoValueType = NoValueType
  protected readonly RestrictionType = RestrictionType
  protected readonly InputFontSizeType = InputFontSizeType
  protected readonly Math = Math
  protected readonly FontWeightType = FontWeightType
  protected readonly FontSizeType = FontSizeType
  protected readonly FontStyleType = FontStyleType
  protected readonly TextColorType = TextColorType
  protected readonly TextDecorationType = TextDecorationType
  getPropValue(key:string,index?:number){
    return typeof index === 'number' ? this.props?.get(key)[index] : this.props?.get(key)
  }
  trigger(event: EventType){
    this.eventsService.triggerEvent(event,this.name)
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
