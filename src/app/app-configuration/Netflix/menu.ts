import {Menubar} from "../../components/menubar/Menubar";
import {NonCalculatedSizeConfigModel} from "../../design-dimensions/Size/NonCalculatedSizeConfigModel";
import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";

export const menu = new Menubar('menu')
menu.structural.smartphone.menuItems =
    [
      {
        label: 'Films',
      },
      {
        label: 'Series'
      },
      {
        label: 'Alle artefacten'
      },
      {
        label: 'Mijn lijst'
      },
      {
        label: 'Admin'
      },
]
//menu.size.smartphone.width = new NonCalculatedSizeConfigModel(100,SizeUnitConfigType.Percentage)
