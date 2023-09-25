import AppConfig from "../../services/appConfig";
import {effects} from "../effects/effects";
import {Container} from "../../components/container/Container";
import {CalculatedSizeConfigModel} from "../../design-dimensions/Size/CalculatedSizeConfigModel";
import {ColumnLayoutConfigModel} from "../../design-dimensions/Layout/Container/ColumnLayoutConfigModel";
import {Table} from "../../components/table/Table";
import {ChildPropertiesConfigModel} from "../../design-dimensions/Layout/Container/ChildPropertiesConfigModel";
import {NonCalculatedSizeConfigModel} from "../../design-dimensions/Size/NonCalculatedSizeConfigModel";
import {TableStylingConfigModel} from "../../design-dimensions/Styling/table/TableStylingConfigModel";
import {TableGridType} from "../../enums/tableGridType.enum";
import {TableConfigModel} from "../../design-dimensions/StructuralConfig/table/TableConfigModel";


const mainContainer:Container = new Container('content-container')
mainContainer.size.smartphone.setHeight(new CalculatedSizeConfigModel('(100vh - 16px)'))
mainContainer.layout.smartphone
  .setLayout(new ColumnLayoutConfigModel().setWrap(false))
  .setChildConfig(new ChildPropertiesConfigModel()).childConfig?.size.smartphone.setWidth(new NonCalculatedSizeConfigModel(100))
const mainTable = new Table('main-table')
// todo dit suckt natuurlijk => dit patroon veranderen en elke component apart een responsive model geven
  (mainTable.componentSpecificConfig.smartphone as TableConfigModel).set

if(mainTable.styling.smartphone.componentConfigModel instanceof TableStylingConfigModel){
  mainTable.styling.smartphone.componentConfigModel.setGridType(TableGridType.Row)
}

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
// config needed for main table
styling:
gridlines
stacked

