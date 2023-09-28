import AppConfig from "../../services/appConfig";
import {effects} from "../effects/effects";
import {Container} from "../../components/container/Container";
import {CalculatedSizeConfigModel} from "../../design-dimensions/Size/CalculatedSizeConfigModel";
import {Table} from "../../components/table/Table";
import {NonCalculatedSizeConfigModel} from "../../design-dimensions/Size/NonCalculatedSizeConfigModel";
import {TableGridType} from "../../enums/tableGridType.enum";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";
import {
  ColumnLayoutConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ColumnLayoutConfigModel";
import {
  ChildPropertiesConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ChildPropertiesConfigModel";

const mainContainer:Container = new Container('content-container')
mainContainer.size.smartphone.setHeight(new CalculatedSizeConfigModel('(100vh - 16px)'))
mainContainer.layout.smartphone
  .setLayout(new ColumnLayoutConfigModel().setWrap(false))
  .setChildConfig(new ChildPropertiesConfigModel()).childConfig?.size.smartphone.setWidth(new NonCalculatedSizeConfigModel(100))
const mainTable = new Table('main-table')
mainTable.styling.smartphone.setGridType(TableGridType.Row)
mainTable.setClientData(new ClientDataConfigModel('populate_table'))
const col1HeaderContainer = new Container('col1-container')
// todo add icon component
// todo vul styling icon aan
// todo add displayType bij individualLayout (wijzig naam!)
mainTable.contentInjection.smartphone.setColumnHeaderComponents([

])
mainContainer.setChildren([
  mainTable
])
export const RootComponent = new AppConfig({
  components: [
    mainContainer
  ],
  // todo hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
  //      de condities zoals gedefinieerd in de overeenkomstige actie
  effects: effects
})

