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
import {ButtonSizeConfigModel} from "../../design-dimensions/Size/button/ButtonSizeConfigModel";
import {ButtonSizeType} from "../../enums/buttonSizeType.enum";

const mainContainer:Container = new Container('content-container')
  mainContainer
    .size
      .smartphone.setHeight(new CalculatedSizeConfigModel('(100vh - 16px)'))
  mainContainer
    .componentSpecificLayout
      .smartphone.setLayout(new ColumnLayoutConfigModel().setWrap(false)).setChildConfig(new ChildPropertiesConfigModel())
        .childConfig?.size
          .smartphone.setWidth(new NonCalculatedSizeConfigModel(100))
const mainTable = new Table('main-table')
  mainTable.styling.smartphone.setGridType(TableGridType.Row)
  mainTable.setClientData(new ClientDataConfigModel('populate_table'))
const col1HeaderContainer = new Container('col1-container')
  col1HeaderContainer.individualLayout.smartphone.setDisplayType(DisplayType.Inline)
  col1HeaderContainer.componentSpecificLayout.smartphone.childConfig?.size.smartphone.setWidth()
const col1SortIcon = new Icon('col1-sort-icon',IconType.Sort)
const col2SortIcon = new Icon('col2-filter-icon',IconType.Filter)
  col1HeaderContainer.setChildren([
    col1SortIcon,
    col2SortIcon
  ])
const col2Icon = new Icon('col2-icon',IconType.Sort)
const col3Icon = new Icon('col3-icon',IconType.Sort)
const col4Icon = new Icon('col4-icon',IconType.Sort)
mainTable.contentInjection.smartphone.setColumnHeaderComponents([
  col1HeaderContainer,
  col2Icon,
  col3Icon,
  col4Icon
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

