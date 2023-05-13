import {  Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../store.service";
import {EventsService} from "../../events.service";
import {EventType} from "../../enums/eventTypes.enum";
import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {ConceptModel} from "../../models/Data/ConceptModel";
import {TextAttributeModel} from "../../models/Data/TextAttributeModel";
import {NumberAttributeModel} from "../../models/Data/NumberAttributeModel";
import {Text} from "@angular/compiler";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Input() name = ''
  @ViewChild('form') form:ElementRef|undefined
  data:ConceptModel|undefined
  InputFontSize = InputFontSizeType
  RestrictionType = RestrictionType
  TextAttributeModel = TextAttributeModel
  NumberAttributeModel = NumberAttributeModel

  constructor(private storeService:StoreService,private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name, 'data')?.subscribe(res=>{
      if(res){
        this.data = res as ConceptModel
      }
    })
  }
  getIconValue(attr:TextAttributeModel|NumberAttributeModel,property:string):IconType|IconPositionType|undefined{
      if(attr instanceof TextAttributeModel && property === 'icon'){
        return attr.icon
      }
    if(attr instanceof TextAttributeModel && property === 'iconPosition'){
      return attr.iconPosition
    }
      return undefined
  }

  getAttributeType(attr:TextAttributeModel|NumberAttributeModel){
    if(attr instanceof TextAttributeModel) return TextAttributeModel
    return NumberAttributeModel
  }
}
