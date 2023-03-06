import {Component, OnInit,} from '@angular/core'
import {DataService} from "./data.service";
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:{components:ComponentModel[],actions:ActionModel[]}|undefined
  constructor(private dataService:DataService) {
    this.data = dataService.getAppTemplateData()
  }

  ngOnInit(): void {

  }


}
