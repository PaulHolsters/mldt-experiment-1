import utilFunctions from "../utils/utilFunctions";
import {StateService} from "../services/state.service";
import {RenderPropertiesService} from "../services/renderProperties.service";
import {EventsService} from "../services/events.service";
import {ChangeDetectorRef, Directive, ElementRef, Input} from "@angular/core";
import {StylesService} from "../services/styles.service";
import {TriggerType} from "../enums/triggerTypes.enum";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {ComponentType} from "../enums/componentTypes.enum";
import {InputFontSizeType} from "../enums/inputFontSizeType.enum";
import {RestrictionType} from "../enums/restrictionType.enum";
import {FontWeightType} from "../enums/fontWeightType.enum";
import {FontSizeType} from "../enums/fontSizeType.enum";
import {FontStyleType} from "../enums/fontStyleType.enum";
import {TextColorType} from "../enums/textColorType.enum";
import {TextDecorationType} from "../enums/textDecorationType.enum";
import {ConfirmationService, MessageService} from "primeng/api";
import {ClientDataService} from "../services/data/client/client-data.service";
import {ConfigService} from "../services/config.service";
import {DataRecord, isDataRecord, List, OutputData, RenderPropertyType} from "../types/union-types";
import {DataLink} from "../types/type-aliases";
import {Datalink} from "../design-dimensions/datalink";

@Directive()
export class Component {
  @Input() public name!: string
  @Input() data: any | undefined

  constructor(
    protected element: ElementRef,
    protected cd: ChangeDetectorRef,
    protected stateService: StateService,
    protected storeService: RenderPropertiesService,
    protected eventsService: EventsService,
    protected clientDataService: ClientDataService,
    protected stylesService: StylesService,
    protected confirmationService: ConfirmationService,
    protected configService: ConfigService,
    protected messageService: MessageService) {

  }

  protected props: Map<string, any> | undefined
  protected readonly TriggerType = TriggerType
  protected readonly PropertyName = PropertyName
  protected readonly ComponentType = ComponentType
  protected readonly RestrictionType = RestrictionType
  protected readonly InputFontSizeType = InputFontSizeType
  protected readonly Math = Math
  protected readonly FontWeightType = FontWeightType
  protected readonly FontSizeType = FontSizeType
  protected readonly FontStyleType = FontStyleType
  protected readonly TextColorType = TextColorType
  protected readonly TextDecorationType = TextDecorationType

  getPropValue(key: string, index?: number) {
    return typeof index === 'number' && this.props?.get(key) ? this.props?.get(key)[index] : this.props?.get(key)
  }

  getData(data: DataRecord, link: Datalink, pipe?: Function[]) {
    let head: string
    let tail: OutputData = data
    const dl: string[] = [];
    if (link.dataChunk instanceof Array) {
      dl.push(...link.dataChunk)
    } else dl.push(link.dataChunk);
    while (dl.length > 0) {
      head = dl.shift() as string
      if (dl.length > 0 && !(isDataRecord(tail))) throw new Error('bad datalink config')
      if (isDataRecord(tail)) {
        const entry: [string, (DataRecord | List | RenderPropertyType | string[] | number[] | boolean[] | Date[])] | undefined
          = Object.entries(tail).find(ent => {
          return ent[0] === head
        }) as [string, (DataRecord | List | RenderPropertyType | string[] | number[] | boolean[] | Date[])] | undefined
        if (entry) {
          tail = entry[1]
        }
      }
    }
    if (!pipe) return tail
    return pipe.reduce((prev,curr)=>{
      return curr(prev)
    },tail)
  }

  trigger(trigger: TriggerType, nativeEvent?: any) {
    this.eventsService.triggerEvent(trigger, this.name, this.data, nativeEvent?.target)
  }

  setPropValue(key: string, value: any, setProps?: string[], useProps?: { prop: string, use: string }[]) {
    // todo add more typesafety
    if (this.props) {
      if(this.name === 'add') debugger
      if (!utilFunctions.areEqual(this.props.get(key), value)) {
        if(this.name === 'add') debugger
        if (key === PropertyName.propsByData) {
          if (this.getPropValue(key) instanceof Array) {
            if(this.name === 'add') debugger
            const newArr = this.getPropValue(key) as Array<[PropertyName, Datalink, Function[]]>
            (value as Array<[PropertyName, Datalink, Function[]]>).forEach((v: [PropertyName, Datalink, Function[]]) => {
              const existing = newArr.findIndex(val => {
                return val[0] === v[0]
              })
              if (existing === -1) {
                if(this.name === 'add') debugger
                newArr.push(v)
              } else {
                if(this.name === 'add') debugger
                newArr.splice(existing, 1, v)
              }
            })
            if(this.name === 'add') debugger
          } else {
            if(this.name === 'add') debugger
            this.props.set(key, value)
          }
          if (this.getPropValue(key) instanceof Array) {
            (this.getPropValue(key) as Array<[PropertyName, Datalink, Function[]]>).forEach(p => {
              this.props?.set(p[0], this.getData(this.data,p[1],p[2]))
            })
          }
        }  else this.props.set(key, value)
        this.stateService.syncData(this.name, {key: key, value: value})
        if (setProps) {
          setProps.forEach(p => {
            if (this.props && typeof value === 'object' && value.hasOwnProperty(p) && !utilFunctions.areEqual(this.props.get(p), value[p])) {
              this.props.set(p, value[p])
              this.stateService.syncData(this.name, {key: p, value: this.getPropValue(p)})
            }
          })
        }
        if (useProps) {
          useProps.forEach(p => {
            if (this.props && typeof value === 'object'
              && !utilFunctions.areEqual(this.props.get(p.prop), this.props.get(p.use))) {
              this.props.set(p.prop, this.props.get(p.use))
              this.stateService.syncData(this.name, {key: p.prop, value: this.getPropValue(p.prop)})
            }
          })
        }
      }
    }
  }
}
