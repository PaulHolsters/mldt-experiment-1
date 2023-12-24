import {Container} from "../../components/container/Container";
import {CalculatedSizeConfigModel} from "../../design-dimensions/Size/CalculatedSizeConfigModel";
import AppConfig from "../../services/appConfig";
import {effects} from "./effects";
import {movieDetailsDialog} from "./movie-details-dialog";
import {menu} from "./menu";
import {content} from "./content";
import {footer} from "./footer";
import {NonCalculatedSizeConfigModel} from "../../design-dimensions/Size/NonCalculatedSizeConfigModel";
import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {
  ChildPropertiesConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ChildPropertiesConfigModel";
import {
  ColumnLayoutConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ColumnLayoutConfigModel";
import {VerticalColumnLayoutConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";

const mainContainer: Container = new Container('content-container')
mainContainer.size.smartphone.setHeight(new CalculatedSizeConfigModel('(100vh - 16px)'));
(mainContainer.componentSpecificLayout.smartphone
  .setLayout(new ColumnLayoutConfigModel()).layout as ColumnLayoutConfigModel)
  .setVerticalLayoutOfChildren(VerticalColumnLayoutConfigType.Top)
  .setWrap(false)
const templateContainer = new Container('template');
templateContainer.size.smartphone.setWidth(new NonCalculatedSizeConfigModel(100,SizeUnitConfigType.Percentage));
templateContainer.size.smartphone.setHeight(new NonCalculatedSizeConfigModel(100,SizeUnitConfigType.Percentage));
(templateContainer.componentSpecificLayout.smartphone
  .setLayout(new ColumnLayoutConfigModel()).layout as ColumnLayoutConfigModel)
  .setVerticalLayoutOfChildren(VerticalColumnLayoutConfigType.Between)
  .setWrap(false)
templateContainer.componentSpecificLayout.childConfig = new ChildPropertiesConfigModel()
templateContainer.componentSpecificLayout.childConfig.size.smartphone.setWidth(new NonCalculatedSizeConfigModel(100,SizeUnitConfigType.Percentage))
templateContainer.setChildren([
  menu,
  content,
  footer
])
mainContainer.setChildren([
  templateContainer,
  movieDetailsDialog
])

// todo de template container heeft 100% width maar de omvattende divs van deze container niet waardoor het niet werkt
export const RootComponent = new AppConfig({
  components: [
    mainContainer
    // todo zie dat je dit soort component buiten de gewone content krijgt : maw zie dat je root + kan doen
  ],
  effects: effects
})

// todo hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
//      de condities zoals gedefinieerd in de overeenkomstige actie
