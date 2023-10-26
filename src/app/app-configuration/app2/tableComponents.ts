// icons waarop je kan klikken gesitueerd in de headers van de tabel
import {Icon} from "../../components/icon/Icon";
import {IconType} from "../../enums/iconType.enum";
import {Container} from "../../components/container/Container";
import {DisplayType} from "../../enums/displayType.enum";
import {
  ChildPropertiesConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ChildPropertiesConfigModel";
import {IconSizeConfigModel} from "../../design-dimensions/Size/icon/IconSizeConfigModel";
import {NonCalculatedSizeConfigModel} from "../../design-dimensions/Size/NonCalculatedSizeConfigModel";
import {SizeUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {Button} from "../../components/button/Button";
import {IconConfigModel} from "../../design-dimensions/StructuralConfig/button/IconConfigModel";

export const col1SortIcon = new Icon('col1-sort-icon', IconType.Sort)
export const col1FilterIcon = new Icon('col1-filter-icon', IconType.Filter)
export const col1HeaderContainer = new Container('col1-container')
col1HeaderContainer.individualLayout.smartphone.setDisplayType(DisplayType.Inline);
(col1HeaderContainer.componentSpecificLayout.setChildConfig(new ChildPropertiesConfigModel())
  .childConfig as ChildPropertiesConfigModel).size.smartphone.setComponentSpecificSize(
  new IconSizeConfigModel(
    new NonCalculatedSizeConfigModel(1, SizeUnitConfigType.REM)))
col1HeaderContainer.setChildren([
  col1SortIcon,
  col1FilterIcon
])
export const col2Icon = new Icon('col2-icon', IconType.Sort)
col2Icon.size.smartphone.setComponentSpecificSize(new IconSizeConfigModel(
  new NonCalculatedSizeConfigModel(2, SizeUnitConfigType.REM)))
col2Icon.individualLayout.smartphone.setDisplayType(DisplayType.Inline)
export const col3Icon = new Icon('col3-icon', IconType.Sort)
col3Icon.individualLayout.smartphone.setDisplayType(DisplayType.Inline)
export const col4Icon = new Icon('col4-icon', IconType.Sort)
col4Icon.individualLayout.smartphone.setDisplayType(DisplayType.Inline)
col4Icon.size.smartphone.setComponentSpecificSize(
  new IconSizeConfigModel(
    new NonCalculatedSizeConfigModel(2, SizeUnitConfigType.REM)))
// in de laatste kolom komt een edit button zodat je een product kan updaten
export const actionBtn = new Button('edit-product-btn')
actionBtn.structural.smartphone.setLabel('Edit').setIcon(new IconConfigModel(IconType.Pencil))
