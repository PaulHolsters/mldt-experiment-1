import {Component, OnInit,} from '@angular/core'
import {Apollo} from "apollo-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private apollo:Apollo) {
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
