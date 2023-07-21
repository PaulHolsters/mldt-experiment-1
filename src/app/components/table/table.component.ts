import {Component, Input, OnInit} from '@angular/core';
import {DataObjectModel} from "../../models/DataObjectModel";
import {StoreService} from "../../store.service";
import {EventType} from "../../enums/eventTypes.enum";
import {EventsService} from "../../events.service";
import {DataService} from "../../data.service";
import utilFunctions from "../../utils/utilFunctions";
import {Observable} from "rxjs";
import {AttributeComponentModel} from "../../models/Data/AttributeComponentModel";

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
  getColumns():{field:string,header:string,sort:boolean}[]{
    return this.attributes?.map(attr=>{
      return {field:attr.name,header:attr.tableColumn?.label ?? '',sort:attr.tableColumn?.sort ?? false}
    }) ?? []
  }
// todo: bepalen hoe je configuratiegewijs omgaat gaan met niet primitieve data
  // todo maak dat je kan aangeven hoe de data getoond wordt bv. als EUR, maw introduceer
  //      de mogelijkheid van datapresentatie
/*  getColumns():{field:string,header:string}[]{
    //    field is dan "name" van het desbtreffende attribuut
    if(this.blueprint){
      return Object.keys(this.blueprint).map(key=>{
        return {field:key,header:utilFunctions.capitalizeFirst(key)}
      }).filter(col=>{
        return col.field !== 'id' && col.field !== '__typename'
      })
    }
    return []
  }*/

}
