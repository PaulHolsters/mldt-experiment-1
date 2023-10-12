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
import {DataRecordModel} from "../design-dimensions/DataRecordModel";
import {RadioButtonGroup} from "../components/form/radio-button/RadioButtonGroup";
import {Multiselect} from "../components/form/multiselect/Multiselect";
import {Blueprint} from "../services/data/client/Blueprint";
import {ClientData} from "../services/data/client/ClientData";

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
export type ResponseData = string|List|DataRecordModel
export type Info = ResponseData|UIData
export type List = (DataRecordModel|null)[]
export type RenderPropertyType = boolean|number|Date|string
export type RenderPropertyTypeList<K> =
  K extends boolean ? boolean :
  K extends string ? string :
  K extends Date ? Date :
  K extends number ? number : never
export type OutputData = (
  List|
  DataRecordModel|
  RenderPropertyTypeList<RenderPropertyType>[] |
  RenderPropertyType)&{ __brand: 'output data'}
export const isOutPutData = function isOutputData(data:any): data is OutputData{
  if(!data) return true
  if(typeof data === 'string') return true
  if((typeof data === 'object' && !(data instanceof Array) && 'id' in data && '__typename' in data)) return true
  if(data instanceof Array && data.length===0) return true
  return data instanceof Array && (typeof data[0] === 'string' || data[0] === null ||
    (typeof data[0] === 'object' && !(data[0] instanceof Array) && 'id' in data[0] && '__typename' in data[0])
  )
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

export type BlueprintValue = RenderPropertyType|['enum',string[]]|['object',[Blueprint,DataRecordModel]]|['list',[Blueprint,List]]

