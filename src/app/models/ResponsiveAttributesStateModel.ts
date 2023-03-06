import {AttributesModel} from "./AttributesModel";

export class ResponsiveAttributesStateModel {
  constructor(
    public smartphone?:AttributesModel,
    public portraitTablet?: AttributesModel,
    public tablet?:AttributesModel,
    public laptop?: AttributesModel,
    public highResolution?: AttributesModel) {
  }
}
