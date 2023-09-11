import {DataRepresentationConfigModel} from "./DataRepresentationConfigModel";
import {DataRepresentationRenderModel} from "./DataRepresentationRenderModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
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
  public getDataRepresentationRenderProperties(componentName: string, stateModel: ResponsiveDataRepresentationConfigModel, screenSize: number):DataRepresentationRenderModel{
    const translateToDataRepresentationRenderProps = (dataRep: DataRepresentationConfigModel): DataRepresentationRenderModel => {
      // todo
      return new DataRepresentationRenderModel()
    }
    // todo zet om in een aparte functie
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToDataRepresentationRenderProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    // todo zet om in een log functie of werk exceptions weg
    throw new Error('No screensize configuration was found for given ResponsiveChildLayoutConfigModel and screen ' + ScreenSize[screenSize])
  }


}
