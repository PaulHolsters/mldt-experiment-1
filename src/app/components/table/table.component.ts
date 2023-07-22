import {Component, Input, OnInit} from '@angular/core';
import {DataObjectModel} from "../../models/DataObjectModel";
import {StoreService} from "../../store.service";
import {EventType} from "../../enums/eventTypes.enum";
import {EventsService} from "../../events.service";
import {DataService} from "../../data.service";
import {Observable} from "rxjs";
import {AttributeComponentModel} from "../../models/Data/AttributeComponentModel";
import {SortEvent} from "primeng/api";
import {NoValueType} from "../../enums/no_value_type";

@Component({
  selector: 'm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataList: DataObjectModel[] |  undefined
  blueprint: Object |  undefined
  attributes: AttributeComponentModel[] | undefined
  textWhenEmpty$:Observable<any> | undefined
  caption$:Observable<any>|undefined
  summary$:Observable<any>|undefined
  style$:Observable<any>|undefined
  responsiveLayout$:Observable<any>|undefined
  paginator$:Observable<any>|undefined
  rows = 5
  rowsPerPage:number[] = [10,25,50]
  breakpoint = '960px'
  cstmSort = false
  @Input()name!:string
  constructor(private storeService:StoreService,private eventsService:EventsService,private dataService:DataService) { }

  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name,'dataConcept')?.subscribe(res=>{
      this.dataList = (res as {dataList:DataObjectModel[],conceptBluePrint:Object} )?.dataList
      this.blueprint = (res as {dataList:DataObjectModel[],conceptBluePrint:Object} )?.conceptBluePrint
      this.attributes =  (res as {dataList:DataObjectModel[],conceptBluePrint:Object,attributes:AttributeComponentModel[]} )?.attributes
    })
    this.textWhenEmpty$ = this.storeService.bindToStateProperty(this.name,'textWhenEmpty')
    this.caption$ = this.storeService.bindToStateProperty(this.name,'caption')
    this.summary$ = this.storeService.bindToStateProperty(this.name,'summary')
    this.style$ = this.storeService.bindToStateProperty(this.name,'tableStyle')
    this.responsiveLayout$ = this.storeService.bindToStateProperty(this.name,'responsiveTableLayout')
    this.paginator$ = this.storeService.bindToStateProperty(this.name,'paginator')
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
  customSort(event: SortEvent) {
    const field = this.attributes?.find(attr => attr.name === event.field)
    if (field && field.tableColumn?.sort && field.tableColumn?.customSort === NoValueType.NA) {
      // default sorting: sorteer volgens event.field in alfabetische volgorde oplopend dan wel aflopend
      event.data?.sort((val1,val2)=>{
        const val1temp = Object.entries(val1).find(([k,v])=>{
          return (k===event.field)
        }) ?? ''
        const val2temp = Object.entries(val2).find(([k,v])=>{
          return (k===event.field)
        }) ?? ''
        return ((val1temp < val2temp)?-1:(val1temp === val2temp)?0:1)*(event.order??1)
      })
    } else if (field && field.tableColumn?.sort) {
      // todo test!
      event.data?.sort((data1, data2) => {
        let value1 = event.field ? data1[event.field] : undefined // de overige zijn wellicht header, sort , ...
        let value2 = event.field ? data2[event.field] : undefined
        let result = -1
        debugger
        if (field.tableColumn?.customSort instanceof Function)
          return field.tableColumn?.customSort(value1, value2, result)
      })
    }
  }
  getColumns():{field:string,header:string,sort:boolean}[]{
    // todo test total default sort
    return this.attributes?.map(attr=>{
      if(!this.cstmSort && attr.tableColumn?.sort && attr.tableColumn?.customSort instanceof Function){
        this.cstmSort = true
      }
      return {field:attr.name,header:attr.tableColumn?.label ?? '',sort:attr.tableColumn?.sort ?? false}
    }) ?? []
  }
// todo: bepalen hoe je configuratiegewijs omgaat gaan met niet primitieve data
  // todo maak dat je kan aangeven hoe de data getoond wordt bv. als EUR, maw introduceer
  //      de mogelijkheid van datapresentatie

}
