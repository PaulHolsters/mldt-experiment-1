import {ClientDataConfigModel} from "../../models/Data/ClientDataConfigModel";
import {AttributeConfigModel} from "../../models/Data/AttributeConfigModel";
import {TextAttributeConfigModel} from "../../models/Data/TextAttributeConfigModel";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {NoValueType} from "../../enums/no_value_type";

// todo nieuw datamodel
export const dataModel = new ClientDataConfigModel('')
/*export const dataModel = new ClientDataConfigModel(
  'product',
  [
    // todo to test: zien of je ook enkel de naam kan wijzigen
    new AttributeConfigModel(
      'name',
      undefined,
      undefined,
      false,
      false,
      new TextAttributeConfigModel(
        RestrictionType.Alphanumeric,
        RestrictionType.NA,
        IconType.NI,
        IconPositionType.NA,
        InputFontSizeType.Base,
        NoValueType.NVY
      ),
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Product',
      'Voer de naam in van je product'
    )
  ])*/
// todo
//  verbind dit met de actie omdat de advisory text bv. verschillend
//  kan zijn naargelang het gaat om een create dan wel een update
