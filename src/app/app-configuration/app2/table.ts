import {Table} from "../../components/table/Table";
import {TableGridType} from "../../enums/tableGridType.enum";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";
import {actionBtn, col1HeaderContainer, col2Icon, col3Icon, col4Icon} from "./tableComponents";
import {ExtraColumnModel} from "../../design-dimensions/ContentInjection/table/ExtraColumnModel";
import {TableColumnModel} from "../../design-dimensions/StructuralConfig/table/TableColumnModel";
import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";
// de eigenlijke tabel met de producten
export const mainTable = new Table('main-table')
// todo fix bug: het column en row ding wordt niet getoond
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
// todo fix bug: de layout is niet stacked
mainTable.componentSpecificLayout.smartphone.setResponsiveTableLayout(ResponsiveTableLayoutType.Stacked)
// todo : zoek uit hoe je individuele kolommen een bepaalde breedte kan geven
