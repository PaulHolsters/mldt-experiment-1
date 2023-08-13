import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {EventType} from "../../enums/eventTypes.enum";
import {Observable} from "rxjs";
import {AttributeComponentModel} from "../../models/Data/AttributeComponentModel";
import {SortEvent} from "primeng/api";
import {Table} from "../../componentclasses/Table";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {Component as AbstractComponent} from "../Component"
import {TableColumnModel} from "../../models/TableColumnModel";
import {DataRecordModel} from "../../models/DataRecordModel";
@Component({
  selector: 'm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends AbstractComponent implements OnInit,AfterViewInit{
  // todo zie dat de default waarden werken => zet die ook in de component
  @ViewChild('dt') dt:ElementRef|undefined
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
  // paginator:
  // pageChangedEvent=> fetch data for next/prev page, laat ondertussen een spinner zien,
  // ondertussen weet je wel het totaal aantal records, op basis van first, rows en het totale aantal zou
  // je de paginator correct moeten kunnen zetten
  ngOnInit(): void {
    // todo onderzoek lazy loading in de docx
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
  filterByColumn(event:MouseEvent,column:{field:string,header:string,sort:boolean,filter:boolean}){
    const field = this.getPropValue(PropertyName.attributes)?.find((attr:AttributeComponentModel) => attr.name === column.field)
    /*this.xP ? this.xP.value = event.clientX : undefined
    this.yP ? this.yP.value = event.clientY : undefined*/
    if(field && field.tableColumn?.filter){
      this.setPropValue(PropertyName.currentColumn,column)
      this.eventsService.triggerEvent(EventType.ComponentClicked,this.name)
    }
  }
  onRowSelect(event:any){
    // je kan altijd je custom event maken en het orginele includen
    this.eventsService.triggerEvent(EventType.RowSelected,this.name, this.selectedItem)
  }
  onRowUnselect(event: any) {

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
  getColumns():TableColumnModel[]{
    let columns = this.getPropValue(PropertyName.attributes)?.map((attr:AttributeComponentModel)=>{
      if(!this.cstmSort && attr.tableColumn?.sort && attr.tableColumn?.customSort instanceof Function){
        this.cstmSort = true
      }
      return {field:attr.name,header:attr.tableColumn?.label ?? '',sort:attr.tableColumn?.sort ?? false,filter:attr.tableColumn?.filter ?? false}
    }) ?? []
    const extraColumns = this.getPropValue(PropertyName.extraColumns)?.map((tcm:TableColumnModel)=>{
      if(!this.cstmSort && tcm.sort && tcm.customSort){
        this.cstmSort = true
      }
      return tcm
    })
    if(extraColumns && extraColumns.length>0){
      return columns.concat(extraColumns)
    }
    return columns
  }
// todo: bepalen hoe je configuratiegewijs omgaat gaan met niet primitieve data
  // todo maak dat je kan aangeven hoe de data getoond wordt bv. als EUR, maw introduceer
  //      de mogelijkheid van datapresentatie
  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }
  recal(event:any){

  }

  // todo in de config voorzien dat je een extra kolom kan aanmaken in de tabel en deze vullen met eigen Melementen bv buttons
  //      op zich eenvoudig aangezien

}
