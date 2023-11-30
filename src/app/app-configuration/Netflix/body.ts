import {Container} from "../../components/container/Container";
import {CalculatedSizeConfigModel} from "../../design-dimensions/Size/CalculatedSizeConfigModel";
import {
  ChildPropertiesConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ChildPropertiesConfigModel";
import {NonCalculatedSizeConfigModel} from "../../design-dimensions/Size/NonCalculatedSizeConfigModel";
import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import AppConfig from "../../services/appConfig";
import {effects} from "./effects";
import {menu} from "./menu";
import {footer} from "./footer";
import {
  ColumnLayoutConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ColumnLayoutConfigModel";
import {VerticalColumnLayoutConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";

const mainContainer: Container = new Container('content-container')
mainContainer.size.smartphone.setHeight(new CalculatedSizeConfigModel('(100vh - 16px)'));
(mainContainer.componentSpecificLayout
  .setChildConfig(new ChildPropertiesConfigModel())
  .childConfig as ChildPropertiesConfigModel).size?.smartphone.setWidth(new NonCalculatedSizeConfigModel(100, SizeUnitConfigType.Percentage));
(mainContainer.componentSpecificLayout.smartphone
  .setLayout(new ColumnLayoutConfigModel()).layout as ColumnLayoutConfigModel)
  .setVerticalLayoutOfChildren(VerticalColumnLayoutConfigType.Between);
mainContainer.setChildren([
  menu,
  footer
])

export const RootComponent = new AppConfig({
  components: [
    mainContainer
  ],
  effects: effects
})

// todo hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
//      de condities zoals gedefinieerd in de overeenkomstige actie
