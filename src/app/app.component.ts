import {Component, OnInit,} from '@angular/core'
import {ConfigService} from "./config.service";
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:{components:ComponentModel[],actions:ActionModel[]}|undefined
  constructor(private dataService:ConfigService) {
    this.data = dataService.getAppTemplateData()
  }

  ngOnInit(): void {

  }


}
