import AppConfig from "../../services/appConfig";
import {effects} from "./effects";
import {Container} from "../../components/container/Container";
import {CalculatedSizeConfigModel} from "../../design-dimensions/Size/CalculatedSizeConfigModel";
import {NonCalculatedSizeConfigModel} from "../../design-dimensions/Size/NonCalculatedSizeConfigModel";
import {
  ColumnLayoutConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ColumnLayoutConfigModel";
import {
  ChildPropertiesConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ChildPropertiesConfigModel";
import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {SizeConfigModel} from "../../design-dimensions/Size/SizeConfigModel";
import {mainTable} from "./table";
import {dialog} from "./dialog";

// main container
const mainContainer: Container = new Container('content-container')
mainContainer.size.smartphone.setHeight(new CalculatedSizeConfigModel('(100vh - 16px)'))
mainContainer.componentSpecificLayout.smartphone.setLayout(new ColumnLayoutConfigModel().setWrap(false));
(mainContainer.componentSpecificLayout
  .setChildConfig(new ChildPropertiesConfigModel())
  .childConfig as ChildPropertiesConfigModel).size?.smartphone.setWidth(new NonCalculatedSizeConfigModel(100, SizeUnitConfigType.Percentage));
((mainContainer.componentSpecificLayout.childConfig as ChildPropertiesConfigModel).size?.setTablet(new SizeConfigModel()).tablet as SizeConfigModel)
  .setWidth(new NonCalculatedSizeConfigModel(50, SizeUnitConfigType.Percentage))
mainContainer.setChildren([
  mainTable,
  dialog
])
export const RootComponent = new AppConfig({
  components: [
    mainContainer
  ],
  effects: effects
})

// todo hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
//      de condities zoals gedefinieerd in de overeenkomstige actie
