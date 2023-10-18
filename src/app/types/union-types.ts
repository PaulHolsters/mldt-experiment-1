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
import {Blueprint} from "../services/data/client/Blueprint";
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
import {BlueprintStr, BlueprintType, ConceptNameType, DataLink, ObjectIdType} from "./type-aliases";
import {NoValueType} from "../enums/NoValueTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";

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
  TableStructuralConfigModel|never
export type StylingConfigModelType =
  ButtonStylingConfigModel|
  TableStylingConfigModel|never

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
  TableStructuralRenderModel|never
export type StylingRenderModelType =
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
  ResponsiveStylingTableConfigModel|ResponsiveStylingButtonConfigModel|never
export type ResponsiveStructuralConfigModelType =
  ResponsiveStructuralTableConfigModel|
  ResponsiveStructuralButtonConfigModel|
  ResponsiveStructuralConfirmPopupConfigModel|
  ResponsiveStructuralDialogConfigModel|
  ResponsiveStructuralMenubarConfigModel|
  ResponsiveStructuralIconConfigModel|
  ResponsiveStructuralImageConfigModel|never
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



export type ComponentModelType = Container|Table|Button|Icon|RadioButtonGroup|Multiselect
export type ScreenSizeType = 'smartphone'|'portraitTablet'|'tablet'|'laptop'|'high resolution'
export type DataRecord= {
  [key:string]: List|DataRecord|RenderPropertyType|RenderPropertyTypeList<RenderPropertyType>
} & {
  id: ObjectIdType;
  __typename: string;
}

export type List = (DataRecord|null)[]
export type RenderPropertyType = boolean|number|Date|string
export type RenderPropertyTypeList<K> =
  K extends boolean ? boolean :
  K extends string ? string :
  K extends Date ? Date :
  K extends number ? number: never

export type OutputData = (
  List|
  DataRecord|
  RenderPropertyTypeList<RenderPropertyType>[] |
  RenderPropertyType)&{ __brand: 'output data'}

export type ServerData = (
  {
    dataMultiple:List|null,
    dataSingle:DataRecord|null,
    blueprint:BlueprintStr|null,
    numberOfNesting:number|null
  }
  )&{ __brand: 'server data'}

export type ActionValueType = 'list'|
  'object'|
  ResponsiveSizeConfigModel |
  ResponsiveOverflowConfigModel |
  ResponsiveContainerChildLayoutConfigModel |
  ResponsiveVisibilityConfigModel |
  Function|
  boolean|
  undefined

export const extractConcept = function extractConcept(concept:ConceptNameType|undefined|DataLink):ConceptNameType|undefined{
  if(!concept) return concept
  if(!(concept instanceof Array)) return concept
  if(concept.length===0) return undefined
  return concept[0]
}
export const isServerData = function isServerData(data:unknown):data is ServerData{
  if(typeof data !== 'object' || (data === null || data instanceof Array)) return false
  if(
    data.hasOwnProperty('dataMultiple')&&
    data.hasOwnProperty('dataSingle')&&
    data.hasOwnProperty('blueprint')&&
    data.hasOwnProperty('numberOfNesting')) {
    const dataRef:{
      [key: string]: any
    }|undefined = data
    if (!isList(dataRef['dataMultiple']) || dataRef['dataMultiple'] !== null) return false
    if (!isDataRecord(dataRef['dataSingle']) || dataRef['dataSingle'] !== null) return false
    if (typeof dataRef['blueprint'] !== 'string' && dataRef['blueprint'] !== null) return false
    if (typeof dataRef['numberOfNesting'] !== 'number' && dataRef['numberOfNesting'] !== null) return false
  }
  return true
}
export const isList = function isList(data:unknown):data is List{
  if(data instanceof Array && data.length===0) return true
  return data instanceof Array && (typeof data[0] === 'string' || data[0] === null ||
    (typeof data[0] === 'object' && !(data[0] instanceof Array) && 'id' in data[0] && '__typename' in data[0]))
}
export const isNoValueType = function isNoValueType(data:unknown){
  return (
    data === NoValueType.NO_VALUE_ALLOWED ||
    data === NoValueType.CALCULATED_BY_ENGINE ||
    data === NoValueType.NO_VALUE_NEEDED ||
    data === NoValueType.DEFAULT_VALUE_DETERMINED_BY_ENGINE ||
    data === NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE ||
    data === NoValueType.DATA_FROM_SERVER)
}

export const isDataRecord = function isDataRecord(data:unknown):data is DataRecord{
  return data!==null && typeof data === 'object' && !(data instanceof Array) && 'id' in data && '__typename' in data
}
export const isOutPutData = function isOutputData(data:any): data is OutputData{
  if(data===undefined) return true
  if(typeof data === 'string') return true
  if(isDataRecord(data)) return true
  return (isList(data))
}
export const isClientData = function isClientData(data:any):data is ClientData{
  return data instanceof ClientData
}
export const isBlueprintValue=function isBlueprintValue(data:any): data is BlueprintValue{
  if(typeof data === 'string' && ['string','number','Date','boolean'].includes(data)) return true
  if(data instanceof Array && data.length===2){
    if(data[0]==='enum' && data[1] instanceof Array) return true
    return (data[0] === 'object' || data[0] === 'list') && data[1][0] instanceof Blueprint
  }
  return false
}
export type UIData = OutputData

export type BlueprintValue = RenderPropertyType|['enum',string[]]|['object',[Blueprint,DataRecord]]|['list',[Blueprint,List]]

