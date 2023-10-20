import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TriggerType} from "../../enums/triggerTypes.enum";
import {Observable} from "rxjs";
import {SortEvent} from "primeng/api";
import {Table} from "../../componentclasses/Table";
import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {Component as AbstractComponent} from "../Component";
import {TableColumnModel} from "../../design-dimensions/StructuralConfig/table/TableColumnModel";

@Component({
  selector: 'm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends AbstractComponent implements OnInit,AfterViewInit{
  // todo zie dat de default waarden werken => zet die ook in de component
  @ViewChild('dt') dt:ElementRef|undefined
  rows = 5 // todo zet dit als default in de configuratie (builder pattern!)
  rowsPerPage:number[] = [10,25,50] // todo zet dit als default in de configuratie (builder pattern!)
  breakpoint = '960px' // todo zet dit als default in de configuratie (builder pattern!)
  cstmSort = false // todo zet dit als default in de configuratie (builder pattern!)
  selectedItem:{}|undefined
/*
todo
x:{key:string,value:number}
  xP:{key:string,value:number}
  y:{key:string,value:number}
  yP:{key:string,value:number}*/

  singleRowSelect$:Observable<any>|undefined
  ngOnInit(): void {
    // todo onderzoek lazy loading in de docx
    this.props = Table.getProperties()
      this.props.forEach((v,k)=>{
      this.storeService.bindToStateProperty(this.name,k)?.subscribe(res=>{
        // todo als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!

        //todo zie dat de binnenkomende data correct verwerkt wordt
        if(k===PropertyName.outputData){
          this.setPropValue(
            k,
            res,
            undefined,
            [{prop:PropertyName.currentDataList,use:PropertyName.outputData}]
          )
        } else{
          // todo Hier komen no value needed zaken binnen wat niet mag dit moet null zijn
          // todo ook voor de andere schermen is dat het geval ...
          this.setPropValue(k,res)
        }
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentReady, this.name)
  }
/*  filterByColumn(event:MouseEvent,column:{field:string,header:string,sort:boolean,filter:boolean}){
    const field = this.getPropValue(PropertyName.attributes)?.find((attr:AttributeComponentModel) => attr.name === column.field)
    /!*this.xP ? this.xP.value = event.clientX : undefined
    this.yP ? this.yP.value = event.clientY : undefined*!/
    if(field && field.tableColumn?.filter){
      this.setPropValue(PropertyName.currentColumn,column)
      this.eventsService.triggerEvent(TriggerType.ComponentClicked,this.name)
    }
  }*/
  onRowSelect(event:any){
    // je kan altijd je custom event maken en het orginele includen
    this.eventsService.triggerEvent(TriggerType.RowSelected,this.name, this.selectedItem)
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
    let columns = this.getPropValue(PropertyName.columns)
    let extraColumns= this.getPropValue(PropertyName.extraColumns)
    if(this.getPropValue(PropertyName.conceptBlueprint)
      && this.getPropValue(PropertyName.conceptBlueprint).properties?.properties){
      // todo fix bug: de conceptBlueprint overschrijft de gegevens van de columns property!
      debugger
      columns =
        Array.from((this.getPropValue(PropertyName.conceptBlueprint).properties.properties as Map<string,any>).keys()).map(k=>{
        return {field:k,header:k}
      })
    }
    if(columns){
      if(extraColumns && extraColumns.length>0){
        // todo de action column komt er niet bij in de html omdat deze van een andere snit is maar de data is er wel
        const cols = columns.concat(extraColumns)
        debugger
        return cols
      }
      return columns
    }
    return []
  }
// todo: bepalen hoe je configuratiegewijs omgaat gaan met niet primitieve data
  // todo maak dat je kan aangeven hoe de data getoond wordt bv. als EUR, maw introduceer
  //      de mogelijkheid van datapresentatie
  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }

  // todo in de config voorzien dat je een extra kolom kan aanmaken in de tabel en deze vullen met eigen Melementen bv buttons
  //      op zich eenvoudig aangezien

}
