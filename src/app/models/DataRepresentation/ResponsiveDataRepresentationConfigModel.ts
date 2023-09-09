import {DataRepresentationConfigModel} from "./DataRepresentationConfigModel";
export class ResponsiveDataRepresentationConfigModel {
  constructor(public smartphone:DataRepresentationConfigModel = new DataRepresentationConfigModel(),
              public portraitTablet?: DataRepresentationConfigModel,
              public tablet?:DataRepresentationConfigModel,
              public laptop?: DataRepresentationConfigModel,
              public highResolution?: DataRepresentationConfigModel) {
  }

  getInstance(){
    return 'data-representation'
  }
}
