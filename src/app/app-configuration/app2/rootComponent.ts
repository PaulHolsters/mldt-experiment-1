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
import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {ExtraColumnModel} from "../../design-dimensions/ContentInjection/table/ExtraColumnModel";
import {TableColumnModel} from "../../design-dimensions/StructuralConfig/table/TableColumnModel";
import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";
import {SizeConfigModel} from "../../design-dimensions/Size/SizeConfigModel";
import {actionBtn, col1HeaderContainer, col2Icon, col3Icon, col4Icon} from "./tableComponents";

// de eigenlijke tabel met de producten
const mainTable = new Table('main-table')
mainTable.styling.smartphone.setGridType(TableGridType.ColumnAndRow)
mainTable
  .setClientData(new ClientDataConfigModel('populate_table'))
  .contentInjection.smartphone
    .setColumnHeaderComponents([
      col1HeaderContainer,
      col2Icon,
      col3Icon,
      col4Icon])
    .setExtraColumns([new ExtraColumnModel(actionBtn, new TableColumnModel('actions'))])
mainTable.structural.smartphone
  .setTextWhenEmpty('Er bestaan nog geen producten')
  .setColumns([
    new TableColumnModel('price', 'Prijs'),
    new TableColumnModel('name', 'Product'),
    new TableColumnModel('specifications', 'Product specificaties'),
    new TableColumnModel('options', 'Opties'),
  ])
mainTable.componentSpecificLayout.smartphone.setResponsiveTableLayout(ResponsiveTableLayoutType.Stacked)
// todo fix: display block voor icons

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
  mainTable
])
export const RootComponent = new AppConfig({
  components: [
    mainContainer
  ],
  effects: effects
})

// todo hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
//      de condities zoals gedefinieerd in de overeenkomstige actie
