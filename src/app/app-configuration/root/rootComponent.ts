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
import {Icon} from "../../components/icon/Icon";
import {IconType} from "../../enums/iconType.enum";
import {DisplayType} from "../../enums/displayType.enum";
import {IconSizeConfigModel} from "../../design-dimensions/Size/icon/IconSizeConfigModel";
import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {ExtraColumnModel} from "../../design-dimensions/ContentInjection/table/ExtraColumnModel";
import {Button} from "../../components/button/Button";
import {IconConfigModel} from "../../design-dimensions/StructuralConfig/button/IconConfigModel";
import {TableColumnModel} from "../../design-dimensions/StructuralConfig/table/TableColumnModel";
import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";
import {SizeConfigModel} from "../../design-dimensions/Size/SizeConfigModel";

// icons waarop je kan klikken gesitueerd in de headers van de tabel
const col1SortIcon = new Icon('col1-sort-icon', IconType.Sort)
const col1FilterIcon = new Icon('col1-filter-icon', IconType.Filter)
const col1HeaderContainer = new Container('col1-container')
col1HeaderContainer.individualLayout.smartphone.setDisplayType(DisplayType.Inline);
(col1HeaderContainer.componentSpecificLayout.setChildConfig(new ChildPropertiesConfigModel())
  .childConfig as ChildPropertiesConfigModel).size.smartphone.setComponentSpecificSize(
  new IconSizeConfigModel(
    new NonCalculatedSizeConfigModel(1, SizeUnitConfigType.REM)))
col1HeaderContainer.setChildren([
  col1SortIcon,
  col1FilterIcon
])
const col2Icon = new Icon('col2-icon', IconType.Sort)
col2Icon.size.smartphone.setComponentSpecificSize(new IconSizeConfigModel(
  new NonCalculatedSizeConfigModel(2, SizeUnitConfigType.REM)))
const col3Icon = new Icon('col3-icon', IconType.Sort)
const col4Icon = new Icon('col4-icon', IconType.Sort)
col4Icon.size.smartphone.setComponentSpecificSize(
  new IconSizeConfigModel(
    new NonCalculatedSizeConfigModel(2, SizeUnitConfigType.REM)))
// in de laatste kolom komt een edit button zodat je een product kan updaten
const actionBtn = new Button('edit-product-btn')
actionBtn.structural.smartphone.setLabel('Edit').setIcon(new IconConfigModel(IconType.Pencil))
// de eigenlijke tabel met de producten
const mainTable = new Table('main-table')
mainTable.styling.smartphone.setGridType(TableGridType.Row)
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
// zo ziet elke nieuwe app er uit: een blok dat alles omvat
// en effects die de user interactie en interacties met de server definiëren
export const RootComponent = new AppConfig({
  components: [
    mainContainer
  ],
  effects: effects
})

// todo hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
//      de condities zoals gedefinieerd in de overeenkomstige actie
