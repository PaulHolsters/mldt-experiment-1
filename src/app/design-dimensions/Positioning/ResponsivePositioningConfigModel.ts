import {PositioningConfigModel} from "./PositioningConfigModel";
import {PositioningRenderModel} from "./PositioningRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {DataRepresentationRenderModel} from "../DataRepresentation/DataRepresentationRenderModel";
export class ResponsivePositioningConfigModel  extends ResponsiveConfigModel<ResponsivePositioningConfigModel>{
  // todo voeg padding en margin hier ook toe
  public smartphone:PositioningConfigModel=new PositioningConfigModel()
  public portraitTablet: PositioningConfigModel|undefined=undefined
  public tablet:PositioningConfigModel|undefined=undefined
  public laptop: PositioningConfigModel|undefined=undefined
  public highResolution: PositioningConfigModel|undefined=undefined
  constructor() {
    super()
  }
  getInstance(){
    return 'position'
  }
  public getPositionRenderProperties(screenSize: number): PositioningRenderModel {
    const mapToPositioningRenderProperties =
      (config: PositioningConfigModel): PositioningRenderModel => {
        const renderInstance = new PositioningRenderModel()
        Object.entries(config).forEach(([k,v])=>{
          if(v) renderInstance.setProperty(k,v)
        })
        return renderInstance
      }
     return this.getRenderProperties(screenSize,mapToPositioningRenderProperties)
  }
}
