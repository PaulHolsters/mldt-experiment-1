import {LayoutModel} from "./LayoutModel";
export class ResponsiveLayoutStateModel {
  constructor(
                public smartphone:LayoutModel,
                public portraitTablet?: LayoutModel,
                public tablet?:LayoutModel,
                public laptop?: LayoutModel,
                public highResolution?: LayoutModel) {
  }
}
