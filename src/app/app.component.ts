import {Component, OnInit,} from '@angular/core'
import {ConfigService} from "./services/config.service";
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:{components:ComponentModel[],actions:ActionModel[]}|undefined
  constructor(private dataService:ConfigService, private apollo:Apollo) {
    this.data = dataService.getAppTemplateData()
  }

  ngOnInit(): void {
/*    const results = this.apollo
      .watchQuery({
        query: gql`
                    {
                      getProducts{
                        name
                      }
                    }
        `,
      })
    results.valueChanges.subscribe(res=>{
      console.log(res.data)
    })*/
  }


}
