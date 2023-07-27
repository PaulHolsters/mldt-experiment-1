import {Component,  Input,  OnInit} from '@angular/core';
import {StoreService} from "../../store.service";
import {EventType} from "../../enums/eventTypes.enum";
import {EventsService} from "../../events.service";
import {DataService} from "../../data.service";
import {Observable} from "rxjs";
import {AttributeComponentModel} from "../../models/Data/AttributeComponentModel";
import {SortEvent} from "primeng/api";
import {NoValueType} from "../../enums/no_value_type";
import {DataRecordModel} from "../../models/DataRecordModel";
import {StateService} from "../../state.service";
import utilFunctions from "../../utils/utilFunctions";
import {Table} from "../../componentclasses/Table";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";

@Component({
  selector: 'm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  props:Map<string,any>|undefined
  @Input()name!:string
  propNames = PropertyName
  filterComponent$:Observable<any>|undefined
  // todo zie dat de default waarden werken
  rows = 5
  rowsPerPage:number[] = [10,25,50]
  breakpoint = '960px'
  cstmSort = false
  selectedItem:{}|undefined
/*  x:{key:string,value:number}
  xP:{key:string,value:number}
  y:{key:string,value:number}
  yP:{key:string,value:number}*/
  singleRowSelect$:Observable<any>|undefined
  constructor(private stateService:StateService,private storeService:StoreService,private eventsService:EventsService,private dataService:DataService) {
  }
  ngOnInit(): void {
    this.props = Table.getProperties()
      this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        if(k===PropertyName.dataConcept){
          this.setPropValue(
            k,
            res,
            [
              PropertyName.dataList,
              PropertyName.conceptName,
              PropertyName.conceptBluePrint,
              PropertyName.attributes
            ],
            [{prop:PropertyName.currentDataList,use:PropertyName.dataList}]
          )
        } else{
          this.setPropValue(k,res)
        }
      })
    })
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
  }
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
            }
          })
        }
        if(useProps){
          useProps.forEach(p=>{
            if(this.props && typeof value === 'object'
              && !utilFunctions.areEqual(this.props.get(p.prop),this.props.get(p.use))){
              this.props.set(p.prop,this.props.get(p.use))
            }
          })
        }
      }
    }
  }
  filterByColumn(event:MouseEvent,column:{field:string,header:string,sort:boolean,filter:boolean}){
/*    const field = this.attributes?.find(attr => attr.name === column.field)
/!*    this.xP ? this.xP.value = event.clientX : undefined
    this.yP ? this.yP.value = event.clientY : undefined*!/
    if(field && field.tableColumn?.filter && this.getPropValue(PropertyName.currentColumn)){
      this.setPropValue(PropertyName.currentColumn,column)
      this.eventsService.triggerEvent(EventType.ColumnFilterClicked,this.name)
    }*/
  }
  handleRow(){
    this.eventsService.triggerEvent(EventType.RowSelected,this.name, this.selectedItem)
  }
  customSort(event: SortEvent) {
/*    // todo voeg functionaliteit toe waarmee je op meerdere kolommen
    //  kan sorteren => dit zou bv. een mooie feature zijn waarvoor mensen moeten betalen!
    const field = this.attributes?.find(attr => attr.name === event.field)
    if (field && field.tableColumn?.sort && field.tableColumn?.customSort === NoValueType.NA) {
      (event.data as (string|number|Date|boolean)[])?.sort((val1,val2)=>{
        // todo code kan korter door het field attribuut als indexer
        const val1temp = Object.entries(val1).find(([k,v])=>{
          return (k===event.field)
        })
        const val2temp = Object.entries(val2).find(([k,v])=>{
          return (k===event.field)
        })
        if(val1temp && val2temp){
          return ((val1temp[1] < val2temp[1])?-1:(val1temp[1] === val2temp[1])?0:1)*(event.order??1)
        }
        return 0
      })
    } else if (field && field.tableColumn?.sort && field.tableColumn?.customSort instanceof Function) {
      const func = field.tableColumn?.customSort
      event.data?.sort((data1, data2) => {
        let value1 = event.field ? data1[event.field] : undefined // de overige zijn wellicht header, sort , ...
        let value2 = event.field ? data2[event.field] : undefined
        let result = -1
          return func(value1, value2, result)*(event.order??1)
      })
    }*/
  }
  getColumns():{field:string,header:string,sort:boolean,filter:boolean}[]{
    // todo fix/controleer
    return this.getPropValue(PropertyName.attributes).map((attr:AttributeComponentModel)=>{
      if(!this.cstmSort && attr.tableColumn?.sort && attr.tableColumn?.customSort instanceof Function){
        this.cstmSort = true
      }
      return {field:attr.name,header:attr.tableColumn?.label ?? '',sort:attr.tableColumn?.sort ?? false,filter:attr.tableColumn?.filter ?? false}
    }) ?? []
  }
// todo: bepalen hoe je configuratiegewijs omgaat gaan met niet primitieve data
  // todo maak dat je kan aangeven hoe de data getoond wordt bv. als EUR, maw introduceer
  //      de mogelijkheid van datapresentatie

}
