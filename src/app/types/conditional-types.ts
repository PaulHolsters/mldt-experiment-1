import {ResponsiveContentInjectionConfigModelType} from "./union-types";
import {
  ResponsiveContentInjectionTableConfigModel
} from "../design-dimensions/ContentInjection/table/ResponsiveContentInjectionTableConfigModel";
import {
  ResponsiveContentInjectionDialogConfigModel
} from "../design-dimensions/ContentInjection/dialog/ResponsiveContentInjectionDialogConfigModel";
import {
  ResponsiveContentInjectionMenubarConfigModel
} from "../design-dimensions/ContentInjection/menubar/ResponsiveContentInjectionMenubarConfigModel";

export type ResponsiveContentInjectConfigModelTypeSingle<T extends ResponsiveContentInjectionConfigModelType> =
  T extends ResponsiveContentInjectionTableConfigModel ? ResponsiveContentInjectionTableConfigModel :
    T extends ResponsiveContentInjectionDialogConfigModel ? ResponsiveContentInjectionDialogConfigModel :
      T extends ResponsiveContentInjectionMenubarConfigModel? ResponsiveContentInjectionMenubarConfigModel : never
