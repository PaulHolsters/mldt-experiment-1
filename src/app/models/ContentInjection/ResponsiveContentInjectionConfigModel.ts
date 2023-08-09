import {ContentInjectionConfigPropsModel} from "./ContentInjectionConfigPropsModel";

export class ResponsiveContentInjectionConfigModel {
  /* aan injectie zijn een aantal voorwaarden gesteld:
  *  ofwel is de desbetreffende property een ComponentModel of een ComponentObjectModel
  *  ofwel een ander Model met een anchor property die nooit undefined is maar
  *  altijd een ComponentModel of ComponentObjectModel bevat
  *  ofwel een array met ofwel ComponentModels ofwel ComponentObjectModels ofwel een ander model
  *  indien een ander model dan MOET dat model een anchor property hebben die nooit undefined is
  *  in dat anchor model MOET vervolgens een ComponentModel of een ObjectComponentModel zitten
  * */
  constructor(public smartphone:ContentInjectionConfigPropsModel = new ContentInjectionConfigPropsModel(),
              public portraitTablet?: ContentInjectionConfigPropsModel,
              public tablet?:ContentInjectionConfigPropsModel,
              public laptop?: ContentInjectionConfigPropsModel,
              public highResolution?: ContentInjectionConfigPropsModel) {
  }

  getInstance(){
    return 'content-injection'
  }
}
