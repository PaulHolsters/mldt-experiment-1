import {DataRepresentationConfigModel} from "./DataRepresentationConfigModel";
import {DataRepresentationRenderModel} from "./DataRepresentationRenderModel";
import {ResponsiveConfigModel} from "../ResponsiveConfigModel";
export class ResponsiveDataRepresentationConfigModel extends ResponsiveConfigModel<ResponsiveDataRepresentationConfigModel> {
  public portraitTablet: DataRepresentationConfigModel|undefined = undefined
  public tablet:DataRepresentationConfigModel|undefined = undefined
  public laptop: DataRepresentationConfigModel|undefined = undefined
  public highResolution: DataRepresentationConfigModel|undefined = undefined
  constructor(public smartphone:DataRepresentationConfigModel) {
    super()
  }
  getInstance(){
    return 'data-representation'
  }
  public getDataRepresentationRenderProperties(componentName: string, stateModel: ResponsiveDataRepresentationConfigModel, screenSize: number):DataRepresentationRenderModel{
    const mapToToDataRepresentationRenderProps = (config: DataRepresentationConfigModel): DataRepresentationRenderModel => {
      // todo dit is enkel correct bij een 1 op 1 mapping => dat is dan ook de reden waarom soms het resposnive model in het componentmodel moet zitten
      const renderInstance = new DataRepresentationRenderModel()
      Object.entries(config).forEach(([k,v])=>{
        if(v) renderInstance.setProperty(k,v)
      })
      return renderInstance
    }
    return this.getRenderProperties(screenSize,mapToToDataRepresentationRenderProps)
  }
}
