import AppConfig from "../appConfig";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {mainDimensions} from "./mainDimensions";
import {mainChildLayout} from "./mainChildLayout";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {BackgroundColorType} from "../../enums/backgroundColorType.enum";
import {deleteContainer} from "../deleteContainer/deleteContainer";
import {table} from "../table/table";
import {actions} from "../actions/actions";

export const RootComponent = new AppConfig({
  components: [
    {
      // todo start adding constraints
      // todo add a minimum/maximum dimension
      name: 'content-container',
      type: ComponentType.Container,
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
      dimensions: mainDimensions,
      childLayout: mainChildLayout,
      styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(BackgroundColorType.Background_Color_White)),
      children: [
        //header,
        deleteContainer,
        //form,
        table
      ]
    },
  ],
  // hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
  // de condities zoals gedefinieerd in de overeenkomstige actie
  // todo: test of dbp nog werkt
  actions: actions
})