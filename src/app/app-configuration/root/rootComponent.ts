import AppConfig from "../../services/appConfig";
import {effects} from "../effects/effects";
import {ContainerModel} from "../../components/container/ContainerModel";

export const RootComponent = new AppConfig({
  components: [
    new ContainerModel('content-container').setSize()
/*    {
      // todo  start adding constraints
      // todo add a minimum/maximum dimension
      name: ,
      type: ComponentType.Container,
      visibility: new ResponsiveVisibilityConfigModel(),
      dimensions: mainDimensions,
      childLayout: mainChildLayout,
      styling: new ResponsiveStylingConfigModel(new StylingConfigModel()),
      children: [
        table,
        filterDialog,
        //confirmation,
        dialogEditProduct
      ]
    },*/
  ],
  // hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
  // de condities zoals gedefinieerd in de overeenkomstige actie
  effects: effects
})
// uit de configuratie moet je kunnen halen of iets uniek is of niet
