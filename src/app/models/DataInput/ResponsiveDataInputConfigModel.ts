import {DataInputConfigModel} from "./DataInputConfigModel";

export class ResponsiveDataInputConfigModel {
  constructor(public smartphone:DataInputConfigModel = new DataInputConfigModel(),
              public portraitTablet?: DataInputConfigModel,
              public tablet?:DataInputConfigModel,
              public laptop?: DataInputConfigModel,
              public highResolution?: DataInputConfigModel) {
  }

  getInstance(){
    return 'data-representation'
  }
}
