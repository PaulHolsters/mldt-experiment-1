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

@Component({
  selector: 'm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  concept:string|undefined
  dataList: {key:string,value:DataRecordModel[]|undefined} |  undefined
  dataListP: {key:string,value:DataRecordModel[]|undefined} |  undefined
  currentDataListP: {key:string,value:DataRecordModel[]|undefined} |  undefined
  currentDataList: {key:string,value:DataRecordModel[]|undefined} |  undefined
  blueprint: Object |  undefined
  attributes: AttributeComponentModel[] | undefined
  textWhenEmpty$:Observable<any> | undefined
  caption$:Observable<any>|undefined
  summary$:Observable<any>|undefined
  footer$:Observable<any>|undefined
  style$:Observable<any>|undefined
  responsiveLayout$:Observable<any>|undefined
  filterComponent$:Observable<any>|undefined
  paginator$:Observable<any>|undefined
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
  @Input()name!:string
  constructor(private stateService:StateService,private storeService:StoreService,private eventsService:EventsService,private dataService:DataService) {

  }
  ngOnInit(): void {

    const ss = this.stateService
    const name = this.name

    this.dataList = {
      key:'dataList',
      value:undefined
    }
    this.dataListP = new Proxy(this.dataList,{
      set(dataList,value,newValue){
        if(!utilFunctions.areEqual(value,newValue)){
          dataList.value = newValue
          ss.syncData(name,dataList)
        }
        return true
      }
    })
    this.currentDataList = {
      key:'currentDataList',
      value:undefined
    }
    this.currentDataListP = new Proxy(this.currentDataList,{
      set(currentDataList,value,newValue,target){
        if(!utilFunctions.areEqual(currentDataList.value,newValue)){
          currentDataList.value = newValue
          ss.syncData(name,currentDataList)
        }
        return true
      }
    })

    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name,'dataConcept')?.subscribe(res=>{
      if (this.dataListP) this.dataListP.value = (res as {dataList:DataRecordModel[]})?.dataList
      if (this.currentDataListP) this.currentDataListP.value = (res as {dataList:DataRecordModel[]})?.dataList
      this.blueprint = (res as {conceptBluePrint:Object} )?.conceptBluePrint
      this.attributes =  (res as {attributes:AttributeComponentModel[]} )?.attributes
      this.concept =  (res as {conceptName:string} )?.conceptName
    })
    this.textWhenEmpty$ = this.storeService.bindToStateProperty(this.name,'textWhenEmpty')
    this.caption$ = this.storeService.bindToStateProperty(this.name,'caption')
    this.summary$ = this.storeService.bindToStateProperty(this.name,'summary')
    this.footer$ = this.storeService.bindToStateProperty(this.name,'footer')
    this.style$ = this.storeService.bindToStateProperty(this.name,'tableStyle')
    this.responsiveLayout$ = this.storeService.bindToStateProperty(this.name,'responsiveTableLayout')
    this.paginator$ = this.storeService.bindToStateProperty(this.name,'paginator')
    this.filterComponent$ = this.storeService.bindToStateProperty(this.name,'filterComponent')
    this.storeService.bindToStateProperty(this.name,'tableBreakpoint')?.subscribe(res=>{
      if(res && typeof res === 'number'){
        this.breakpoint = res+'px'
      }
    })
    this.storeService.bindToStateProperty(this.name,'rows')?.subscribe(res=>{
      if(res && typeof res === 'number'){
        this.rows = res
      }
    })
    this.storeService.bindToStateProperty(this.name,'rowsPerPage')?.subscribe(res=>{
        this.rowsPerPage = res as number[]
    })
  }
  filterByColumn(event:MouseEvent,column:{field:string,header:string,sort:boolean,filter:boolean},columns:{field:string,header:string,sort:boolean,filter:boolean}[]){
    const field = this.attributes?.find(attr => attr.name === column.field)
/*    this.xP ? this.xP.value = event.clientX : undefined
    this.yP ? this.yP.value = event.clientY : undefined*/
    if(field  && field.tableColumn?.filter && field.tableColumn?.customFilter instanceof Function){
      const func = field.tableColumn?.customFilter
      // todo pas alle info door naar de filter component
      // todo zorg dat de filtering terug doorgaat naar hier => oplossing: zorg dat de functie altijd naar de desbetreffende component gestuurd kan worden
      //  in dit geval is dat een filterfunctie die je toevoegt gewoon via een nromale dataproperty in de filter component
/*      if(this.currentDataListP){
        // todo debug de areEqual methode die is niet goed
        this.currentDataListP.value  = this.currentDataListP.value?.filter(record=>{
          const entry = Object.entries(record).find(([k,v])=>{
            return k === column.field
          })
          if(entry){
            return func({key:entry[0],value:entry[1],record:record,allData:this.currentDataList,column:column,allColumns:columns})
          }
          return false
        })
      }*/
    }
    //{allData:this.currentDataList,column:column,allColumns:columns}
    this.eventsService.triggerEvent(EventType.ColumnFilterClicked,this.name)
  }
  handleRow(){
    this.eventsService.triggerEvent(EventType.RowSelected,this.name, this.selectedItem)
  }
  customSort(event: SortEvent) {
    // todo voeg functionaliteit toe waarmee je op meerdere kolommen
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
    }
  }
  getColumns():{field:string,header:string,sort:boolean,filter:boolean}[]{
    return this.attributes?.map(attr=>{
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
