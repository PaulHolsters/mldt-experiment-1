import {Container} from "../components/container/Container";
import {
  ResponsiveStructuralButtonConfigModel
} from "../design-dimensions/StructuralConfig/button/ResponsiveStructuralButtonConfigModel";
import {
  ResponsiveStructuralImageConfigModel
} from "../design-dimensions/StructuralConfig/image/ResponsiveStructuralImageConfigModel";
import {
  ResponsiveStructuralConfirmPopupConfigModel
} from "../design-dimensions/StructuralConfig/confirm-popup/ResponsiveStructuralConfirmPopupConfigModel";
import {
  ResponsiveStructuralDialogConfigModel
} from "../design-dimensions/StructuralConfig/dialog/ResponsiveStructuralDialogConfigModel";
import {
  ResponsiveStructuralTableConfigModel
} from "../design-dimensions/StructuralConfig/table/ResponsiveStructuralTableConfigModel";
import {
  ResponsiveStructuralMenubarConfigModel
} from "../design-dimensions/StructuralConfig/menubar/ResponsiveStructuralMenubarConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
import {
  ResponsiveTableLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Table/ResponsiveTableLayoutConfigModel";
import {
  DialogContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/dialog/DialogContentInjectionConfigModel";
import {
  MenubarContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/menubar/MenubarContentInjectionConfigModel";
import {
  TableContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/table/TableContentInjectionConfigModel";
import {ChildLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Container/ChildLayoutConfigModel";
import {TableLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Table/TableLayoutConfigModel";
import {
  NumberInputDataInputConfigModel
} from "../design-dimensions/DataInput/NumberInput/NumberInputDataInputConfigModel";
import {TextInputDataInputConfigModel} from "../design-dimensions/DataInput/TextInput/TextInputDataInputConfigModel";
import {
  RadioButtonGroupDataInputConfigModel
} from "../design-dimensions/DataInput/RadioButtonGroup/RadioButtonGroupDataInputConfigModel";
import {
  MultiSelectDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/MultiSelect/MultiSelectDataRepresentationConfigModel";
import {
  NumberInputDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/NumberInput/NumberInputDataRepresentationConfigModel";
import {
  RadioButtonGroupDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/RadioButtonGroup/RadioButtonGroupDataRepresentationConfigModel";
import {
  TextInputDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/TextInput/TextInputDataRepresentationConfigModel";
import {ButtonStructuralConfigModel} from "../design-dimensions/StructuralConfig/button/ButtonStructuralConfigModel";
import {
  ConfirmPopupStructuralConfigModel
} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupStructuralConfigModel";
import {DialogStructuralConfigModel} from "../design-dimensions/StructuralConfig/dialog/DialogStructuralConfigModel";
import {ImageStructuralConfigModel} from "../design-dimensions/StructuralConfig/image/ImageStructuralConfigModel";
import {MenubarStructuralConfigModel} from "../design-dimensions/StructuralConfig/menubar/MenubarStructuralConfigModel";
import {TableStructuralConfigModel} from "../design-dimensions/StructuralConfig/table/TableStructuralConfigModel";
import {ButtonStylingConfigModel} from "../design-dimensions/Styling/button/ButtonStylingConfigModel";
import {TableStylingConfigModel} from "../design-dimensions/Styling/table/TableStylingConfigModel";
import {IndividualLayoutConfigModel} from "../design-dimensions/IndividualLayout/IndividualLayoutConfigModel";
import {OverflowConfigModel} from "../design-dimensions/Overflow/OverflowConfigModel";
import {SizeConfigModel} from "../design-dimensions/Size/SizeConfigModel";
import {SpacingConfigModel} from "../design-dimensions/Spacing/SpacingConfigModel";
import {VisibilityConfigModel} from "../design-dimensions/Visibility/VisibilityConfigModel";
import {ResponsiveStylingTableConfigModel} from "../design-dimensions/Styling/table/ResponsiveStylingTableConfigModel";
import {
  ResponsiveStylingButtonConfigModel
} from "../design-dimensions/Styling/button/ResponsiveStylingButtonConfigModel";
import {
  ResponsiveDataRepresentationMultiSelectConfigModel
} from "../design-dimensions/DataRepresentation/MultiSelect/ResponsiveDataRepresentationMultiSelectConfigModel";
import {
  ResponsiveDataRepresentationRadioButtonGroupConfigModel
} from "../design-dimensions/DataRepresentation/RadioButtonGroup/ResponsiveDataRepresentationRadioButtonGroupConfigModel";
import {
  ResponsiveDataRepresentationNumberInputConfigModel
} from "../design-dimensions/DataRepresentation/NumberInput/ResponsiveDataRepresentationNumberInputConfigModel";
import {
  ResponsiveDataRepresentationTextInputConfigModel
} from "../design-dimensions/DataRepresentation/TextInput/ResponsiveDataRepresentationTextInputConfigModel";
import {
  ResponsiveDataInputTextInputConfigModel
} from "../design-dimensions/DataInput/TextInput/ResponsiveDataInputTextInputConfigModel";
import {
  ResponsiveDataInputNumberInputConfigModel
} from "../design-dimensions/DataInput/NumberInput/ResponsiveDataInputNumberInputConfigModel";
import {
  ResponsiveDataInputRadioButtonGroupConfigModel
} from "../design-dimensions/DataInput/RadioButtonGroup/ResponsiveDataInputRadioButtonGroupConfigModel";
import {
  ResponsiveContentInjectionMenubarConfigModel
} from "../design-dimensions/ContentInjection/menubar/ResponsiveContentInjectionMenubarConfigModel";
import {
  ResponsiveContentInjectionTableConfigModel
} from "../design-dimensions/ContentInjection/table/ResponsiveContentInjectionTableConfigModel";
import {
  ResponsiveContentInjectionDialogConfigModel
} from "../design-dimensions/ContentInjection/dialog/ResponsiveContentInjectionDialogConfigModel";
import {
  ResponsiveStructuralIconConfigModel
} from "../design-dimensions/StructuralConfig/icon/ResponsiveStructuralIconConfigModel";
import {IconStructuralConfigModel} from "../design-dimensions/StructuralConfig/icon/IconStructuralConfigModel";
import {Table} from "../components/table/Table";
import {Button} from "../components/button/Button";
import {Icon} from "../components/icon/Icon";
import {RadioButtonGroup} from "../components/form/radio-button/RadioButtonGroup";
import {Multiselect} from "../components/form/multiselect/Multiselect";
import {ClientData} from "../services/data/client/ClientData";
import {
  TableContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/table/TableContentInjectionRenderModel";
import {MenubarStructuralRenderModel} from "../design-dimensions/StructuralConfig/menubar/MenubarStructuralRenderModel";
import {TableLayoutRenderModel} from "../design-dimensions/ComponentSpecificLayout/Table/TableLayoutRenderModel";
import {
  RadioButtonGroupDataRepresentationRenderModel
} from "../design-dimensions/DataRepresentation/RadioButtonGroup/RadioButtonGroupDataRepresentationRenderModel";
import {
  NumberInputDataRepresentationRenderModel
} from "../design-dimensions/DataRepresentation/NumberInput/NumberInputDataRepresentationRenderModel";
import {IndividualLayoutRenderModel} from "../design-dimensions/IndividualLayout/IndividualLayoutRenderModel";
import {TableStylingRenderModel} from "../design-dimensions/Styling/table/TableStylingRenderModel";
import {SizeRenderModel} from "../design-dimensions/Size/SizeRenderModel";
import {TextInputDataInputRenderModel} from "../design-dimensions/DataInput/TextInput/TextInputDataInputRenderModel";
import {
  ConfirmPopupStructuralRenderModel
} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupStructuralRenderModel";
import {IconStructuralRenderModel} from "../design-dimensions/StructuralConfig/icon/IconStructuralRenderModel";
import {ButtonStylingRenderModel} from "../design-dimensions/Styling/button/ButtonStylingRenderModel";
import {
  RadioButtonGroupDataInputRenderModel
} from "../design-dimensions/DataInput/RadioButtonGroup/RadioButtonGroupDataInputRenderModel";
import {OverflowRenderModel} from "../design-dimensions/Overflow/OverflowRenderModel";
import {VisibilityRenderModel} from "../design-dimensions/Visibility/VisibilityRenderModel";
import {TableStructuralRenderModel} from "../design-dimensions/StructuralConfig/table/TableStructuralRenderModel";
import {
  DialogContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/dialog/DialogContentInjectionRenderModel";
import {ButtonStructuralRenderModel} from "../design-dimensions/StructuralConfig/button/ButtonStructuralRenderModel";
import {ChildLayoutRenderModel} from "../design-dimensions/ComponentSpecificLayout/Container/ChildLayoutRenderModel";
import {SpacingRenderModel} from "../design-dimensions/Spacing/SpacingRenderModel";
import {DialogStructuralRenderModel} from "../design-dimensions/StructuralConfig/dialog/DialogStructuralRenderModel";
import {ImageStructuralRenderModel} from "../design-dimensions/StructuralConfig/image/ImageStructuralRenderModel";
import {
  MultiSelectDataRepresentationRenderModel
} from "../design-dimensions/DataRepresentation/MultiSelect/MultiSelectDataRepresentationRenderModel";
import {
  NumberInputDataInputRenderModel
} from "../design-dimensions/DataInput/NumberInput/NumberInputDataInputRenderModel";
import {
  TextInputDataRepresentationRenderModel
} from "../design-dimensions/DataRepresentation/TextInput/TextInputDataRepresentationRenderModel";
import {
  MenubarContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/menubar/MenubarContentInjectionRenderModel";
import {
  ConceptNameType,
  DataLink, isConceptName, isDataLink,
  isTypeName,
  ObjectIdType,
  TypeName
} from "./type-aliases";
import {NoValueType} from "../enums/NoValueTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {Dialog} from "../components/dialog/Dialog";
import {TextInput} from "../components/form/input-text/TextInput";
import {ConfigService} from "../services/config.service";
import {NumberInput} from "../components/form/input-number/NumberInput";
import {Form} from "../components/form/Form";
import {Menubar} from "../components/menubar/Menubar";
import {Toolbar} from "../components/toolbar/Toolbar";
import {Card} from "../components/card/Card";
import {
  ResponsiveStructuralCardConfigModel
} from "../design-dimensions/StructuralConfig/card/ResponsiveStructuralCardConfigModel";
import {CardStructuralConfigModel} from "../design-dimensions/StructuralConfig/card/CardStructuralConfigModel";
import {CardStructuralRenderModel} from "../design-dimensions/StructuralConfig/card/CardStructuralRenderModel";
import {
  ResponsiveStructuralTextConfigModel
} from "../design-dimensions/StructuralConfig/Text/ResponsiveStructuralTextConfigModel";
import {CardStylingConfigModel} from "../design-dimensions/Styling/card/CardStylingConfigModel";
import {CardStylingRenderModel} from "../design-dimensions/Styling/card/CardStylingRenderModel";
import {ResponsiveStylingCardConfigModel} from "../design-dimensions/Styling/card/ResponsiveStylingCardConfigModel";

// todo deze union types moeten opnieuw aangevuld worden

export type ContentInjectionConfigModelType =
  DialogContentInjectionConfigModel |
  MenubarContentInjectionConfigModel|
  TableContentInjectionConfigModel|never
export type ComponentSpecificLayoutConfigModelType =
  ChildLayoutConfigModel |
  TableLayoutConfigModel | never
export type DataInputConfigModelType =
  NumberInputDataInputConfigModel|
  TextInputDataInputConfigModel|
  RadioButtonGroupDataInputConfigModel | never
export type DataRepresentationConfigModelType =
  MultiSelectDataRepresentationConfigModel|
  NumberInputDataRepresentationConfigModel|
  RadioButtonGroupDataRepresentationConfigModel|
  TextInputDataRepresentationConfigModel|never
export type StructuralConfigModelType =
  ButtonStructuralConfigModel|
  ConfirmPopupStructuralConfigModel|
  DialogStructuralConfigModel|
  ImageStructuralConfigModel|
  IconStructuralConfigModel|
  MenubarStructuralConfigModel|
  TableStructuralConfigModel|
  CardStructuralConfigModel|never
export type StylingConfigModelType =
  ButtonStylingConfigModel|
  TableStylingConfigModel|CardStylingConfigModel|never

export type ConfigModelType =
  ContentInjectionConfigModelType|
  ComponentSpecificLayoutConfigModelType|
  DataInputConfigModelType|
  DataRepresentationConfigModelType|
  StructuralConfigModelType|
  StylingConfigModelType|
  IndividualLayoutConfigModel|
  OverflowConfigModel|
  SizeConfigModel|
  SpacingConfigModel|
  VisibilityConfigModel|never

export type ContentInjectionRenderModelType =
  DialogContentInjectionRenderModel |
  MenubarContentInjectionRenderModel|
  TableContentInjectionRenderModel|never
export type ComponentSpecificLayoutRenderModelType =
  ChildLayoutRenderModel |
  TableLayoutRenderModel | never
export type DataInputRenderModelType =
  NumberInputDataInputRenderModel|
  TextInputDataInputRenderModel|
  RadioButtonGroupDataInputRenderModel | never
export type DataRepresentationRenderModelType =
  MultiSelectDataRepresentationRenderModel|
  NumberInputDataRepresentationRenderModel|
  RadioButtonGroupDataRepresentationRenderModel|
  TextInputDataRepresentationRenderModel|never
export type StructuralRenderModelType =
  ButtonStructuralRenderModel|
  ConfirmPopupStructuralRenderModel|
  DialogStructuralRenderModel|
  ImageStructuralRenderModel|
  IconStructuralRenderModel|
  MenubarStructuralRenderModel|
  TableStructuralRenderModel|
  CardStructuralRenderModel|never
export type StylingRenderModelType =
  CardStylingRenderModel|
  ButtonStylingRenderModel|
  TableStylingRenderModel|never

export type RenderModelType =
  ContentInjectionRenderModelType|
  ComponentSpecificLayoutRenderModelType|
  DataInputRenderModelType|
  DataRepresentationRenderModelType|
  StructuralRenderModelType|
  StylingRenderModelType|
  IndividualLayoutRenderModel|
  OverflowRenderModel|
  SizeRenderModel|
  SpacingRenderModel|
  VisibilityRenderModel|never

export type ResponsiveStylingConfigModelType =
  ResponsiveStylingTableConfigModel|ResponsiveStylingButtonConfigModel|ResponsiveStylingCardConfigModel|never
export type ResponsiveStructuralConfigModelType =
  ResponsiveStructuralTableConfigModel|
  ResponsiveStructuralButtonConfigModel|
  ResponsiveStructuralConfirmPopupConfigModel|
  ResponsiveStructuralDialogConfigModel|
  ResponsiveStructuralMenubarConfigModel|
  ResponsiveStructuralIconConfigModel|
  ResponsiveStructuralImageConfigModel|
  ResponsiveStructuralCardConfigModel|
  ResponsiveStructuralTextConfigModel|
  never
export type ResponsiveDataRepresentationConfigModelType =
  ResponsiveDataRepresentationMultiSelectConfigModel|
  ResponsiveDataRepresentationRadioButtonGroupConfigModel|
  ResponsiveDataRepresentationNumberInputConfigModel|
  ResponsiveDataRepresentationTextInputConfigModel|never
export type ResponsiveDataInputConfigModelType =
  ResponsiveDataInputRadioButtonGroupConfigModel|
  ResponsiveDataInputNumberInputConfigModel|
  ResponsiveDataInputTextInputConfigModel|never
export type ResponsiveContentInjectionConfigModelType =
  ResponsiveContentInjectionDialogConfigModel|
  ResponsiveContentInjectionMenubarConfigModel|
  ResponsiveContentInjectionTableConfigModel|never
export type ResponsiveComponentSpecificLayoutConfigModelType =
  ResponsiveContainerChildLayoutConfigModel|
  ResponsiveTableLayoutConfigModel|never

export type ComponentModelType = Container|Table|Button|Icon|RadioButtonGroup|Multiselect|Dialog|TextInput|NumberInput|Form|Menubar|Toolbar|Card
export type DataRecord= {
  [key:string]: List|DataRecord|RenderPropertyType|RenderPropertyTypeList<RenderPropertyType>
} & {
  id: ObjectIdType
}
export type List = Array<DataRecord>
export type RenderPropertyType = (boolean|number|Date|string)& {
  branded_type: 'renderpropertype'
}
export const isRenderPropertyType = function isRenderPropertyType(data:unknown):data is RenderPropertyType{
  return typeof data === 'string' || typeof data === 'number' || data instanceof Date ||typeof data === 'boolean'
}
export type RenderPropertyTypeList<K> =
  K extends boolean ? boolean[] :
  K extends string ? string[] :
  K extends Date ? Date[] :
  K extends number ? number[]: never
export type ServerData = List|DataRecord
export type OutputData = List|DataRecord|RenderPropertyType|RenderPropertyTypeList<RenderPropertyType>
export const isDataRecord = function isDataRecord(data:unknown):data is DataRecord{
  // todo voeg controle toe betreffende de andere properties rekening houdende met het feit dat hier geen restricties
  //      bestaan op hoe diep je kan nesten
  return data!==null && typeof data === 'object' && !(data instanceof Array) && 'id' in data
}
export const isList = function isList(data:unknown):data is List{
  return (data instanceof Array) && (data.length===0 || isDataRecord(data[0]))
}
export const isClientData = function isClientData(data:any):data is ClientData{
  return data instanceof ClientData
}
export type ActionValueType = 'list'|
  'object'|
  ResponsiveSizeConfigModel |
  ResponsiveOverflowConfigModel |
  ResponsiveContainerChildLayoutConfigModel |
  ResponsiveVisibilityConfigModel |
  Function|
  boolean|string|number|
  undefined
export const extractConcept = function extractConcept(concept:TypeName|ConceptNameType|undefined|DataLink,config:ConfigService):ConceptNameType|undefined{
  if(isTypeName(concept)){
    return concept.substring(0,concept.indexOf('Data'))
  }
  if(isConceptName(concept,config) && !isDataLink(concept,config)) return concept
  if(!concept) return concept
  if(concept.length===0) return undefined
  return concept[0]
}
export const isNoValueType = function isNoValueType(data:unknown):data is NoValueType{
  return (
    data === NoValueType.NO_VALUE_ALLOWED ||
    data === NoValueType.CALCULATED_BY_ENGINE ||
    data === NoValueType.NO_VALUE_NEEDED ||
    data === NoValueType.DEFAULT_VALUE_DETERMINED_BY_ENGINE ||
    data === NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE ||
    data === NoValueType.DATA_FROM_SERVER) ||
    data === NoValueType.NO_VALUE_YET
}


