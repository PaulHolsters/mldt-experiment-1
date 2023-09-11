import AppConfig from "../../services/appConfig";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {mainDimensions} from "./mainDimensions";
import {mainChildLayout} from "./mainChildLayout";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {BackgroundColorType} from "../../enums/backgroundColorType.enum";
import {deleteContainer} from "../deleteContainer/deleteContainer";
import {table} from "../table/table";
import {filterDialog} from "../dialog/dialog";
import {confirmation} from "../confirmation/confirmation";
import {dialogEditProduct} from "../dialog-edit-product/dialog-edit-product";
import {effects} from "../effects/effects";

export const RootComponent = new AppConfig({
  components: [
    {
      // todo  start adding constraints
      // todo add a minimum/maximum dimension
      name: 'content-container',
      type: ComponentType.Container,
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
      dimensions: mainDimensions,
      childLayout: mainChildLayout,
      styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(BackgroundColorType.Background_Color_White)),
      children: [
        table,
        filterDialog,
        //confirmation,
        dialogEditProduct
      ]
    },
  ],
  // hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
  // de condities zoals gedefinieerd in de overeenkomstige actie
  effects: effects
})
// uit de configuratie moet je kunnen halen of iets uniek is of niet
