import {VisibilityModel} from "./VisibilityModel";

export class ResponsiveVisibilityStateModel {
  constructor(
    public smartphone?:VisibilityModel,
    public portraitTablet?: VisibilityModel,
    public tablet?:VisibilityModel,
    public laptop?: VisibilityModel,
    public highResolution?: VisibilityModel) {
  }
}
