import {DataInputConfigModel} from "./DataInputConfigModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
import {ResponsiveDataRepresentationConfigModel} from "../DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {DataInputRenderModel} from "./DataInputRenderModel";

export class ResponsiveDataInputConfigModel extends ResponsiveConfigModel<ResponsiveDataRepresentationConfigModel>  {
  public portraitTablet: DataInputConfigModel|undefined = undefined
  public tablet:DataInputConfigModel|undefined = undefined
  public laptop: DataInputConfigModel|undefined = undefined
  public highResolution: DataInputConfigModel|undefined = undefined
  constructor(public smartphone:DataInputConfigModel) {
    super()
  }

  getInstance(){
    return 'data-input'
  }
  public getDataInputRenderProperties(componentName: string, stateModel: ResponsiveDataInputConfigModel, screenSize: number):DataInputRenderModel{
    const mapToToInputRenderProps = (config: DataInputConfigModel): DataInputRenderModel => {
      const renderInstance = new DataInputRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToInputRenderProps)
  }
}
