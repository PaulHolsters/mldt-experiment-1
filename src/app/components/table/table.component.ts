import {Component, Input, OnInit} from '@angular/core';
import {DataObjectModel} from "../../models/DataObjectModel";
import {StoreService} from "../../store.service";
import {EventType} from "../../enums/eventTypes.enum";
import {EventsService} from "../../events.service";
import {DataService} from "../../data.service";
import utilFunctions from "../../utils/utilFunctions";

@Component({
  selector: 'm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataList: DataObjectModel[] |  undefined
  @Input()name!:string
  constructor(private storeService:StoreService,private eventsService:EventsService,private dataService:DataService) { }

  ngOnInit(): void {
    this.eventsService.triggerEvent(EventType.ComponentReady, this.name)
    this.storeService.bindToStateProperty(this.name,'dataConcept')?.subscribe(res=>{
      this.dataList = (res as {dataList:DataObjectModel[]} )?.dataList
      // todo door een fout op de server kan het zijn dat bepaalde records null zijn maar deze uitzondering wordt niet opgevangen in de frontend
    })
  }
// todo: bepalen hoe je configuratiegewijs omgaat gaan met niet primitieve data
  // todo maak dat je kan aangeven hoe de data getoond wordt bv. als EUR, maw introduceer
  //      de mogelijkheid van datapresentatie
  getColumns():{field:string,header:string}[]{
    if(this.dataList && this.dataList?.length > 0){
      // bij problemen op de server kan het zijn dat this.dataList[0] null is en dat mag niet!
      if(this.dataList[0] === null) return []
      return Object.keys(this.dataList[0]).map(key=>{
        return {field:key,header:utilFunctions.capitalizeFirst(key)}
      }).filter(col=>{
        return col.field !== 'id' && col.field !== '__typename'
      })
    }
    return []
  }

}
