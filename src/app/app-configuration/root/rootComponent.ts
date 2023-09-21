import AppConfig from "../../services/appConfig";
import {effects} from "../effects/effects";
import {ContainerModel} from "../../components/container/ContainerModel";
import {CalculatedSizeConfigModel} from "../../design-dimensions/Size/CalculatedSizeConfigModel";
import {ColumnLayoutConfigModel} from "../../design-dimensions/Layout/Container/ColumnLayoutConfigModel";

const mainContainer:ContainerModel = new ContainerModel('content-container')
mainContainer.size.smartphone.setHeight(new CalculatedSizeConfigModel('(100vh - 16px)'))
mainContainer.layout.smartphone.setLayout(new ColumnLayoutConfigModel().setWrap(false))
mainContainer.setChildren([

])
export const RootComponent = new AppConfig({
  components: [
    mainContainer
  ],
  // todo hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
  //      de condities zoals gedefinieerd in de overeenkomstige actie
  effects: effects
})
