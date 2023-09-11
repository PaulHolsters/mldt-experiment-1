import {ChildLayoutRenderModel} from "../design-dimensions/ChildLayout/ChildLayoutRenderModel";
import {DimensioningRenderModel} from "../design-dimensions/Dimensioning/DimensioningRenderModel";
import {VisibilityRenderModel} from "../design-dimensions/Visibility/VisibilityRenderModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveAttributesConfigModel} from "../design-dimensions/Attributes/ResponsiveAttributesConfigModel";
import {VisibilityConfigModel} from "../design-dimensions/Visibility/VisibilityConfigModel";
import {ChildLayoutConfigModel} from "../design-dimensions/ChildLayout/ChildLayoutConfigModel";
import {ResponsiveChildLayoutConfigModel} from "../design-dimensions/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsiveDimensioningConfigModel} from "../design-dimensions/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../design-dimensions/Dimensioning/DimensioningConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsivePositioningConfigModel} from "../design-dimensions/Positioning/self/ResponsivePositioningConfigModel";
import {DataRepresentationConfigModel} from "../design-dimensions/DataRepresentation/DataRepresentationConfigModel";
import {DataInputConfigModel} from "../design-dimensions/DataInput/DataInputConfigModel";
import {AttributesConfigModel} from "../design-dimensions/Attributes/AttributesConfigModel";
import {ContentInjectionConfigModel} from "../design-dimensions/ContentInjection/ContentInjectionConfigModel";
import {OverflowConfigModel} from "../design-dimensions/Overflow/self/OverflowConfigModel";
import {PositioningConfigModel} from "../design-dimensions/Positioning/self/PositioningConfigModel";
import {ContentInjectionRenderModel} from "../design-dimensions/ContentInjection/ContentInjectionRenderModel";
import {OverflowRenderModel} from "../design-dimensions/Overflow/self/OverflowRenderModel";
import {DataRepresentationRenderModel} from "../design-dimensions/DataRepresentation/DataRepresentationRenderModel";
import {PositioningRenderModel} from "../design-dimensions/Positioning/self/PositioningRenderModel";
import {AttributesRenderModel} from "../design-dimensions/Attributes/AttributesRenderModel";
import {DataInputRenderModel} from "../design-dimensions/DataInput/DataInputRenderModel";

export type ResponsiveConfigType<T> =
  T extends ResponsiveChildLayoutConfigModel ? ResponsiveChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? ResponsiveVisibilityConfigModel :
      T extends ResponsiveAttributesConfigModel ? ResponsiveAttributesConfigModel :
        T extends ResponsiveContentInjectionConfigModel ? ResponsiveContentInjectionConfigModel :
          T extends ResponsiveDataInputConfigModel ? ResponsiveDataInputConfigModel :
            T extends ResponsiveDataRepresentationConfigModel ? ResponsiveDataRepresentationConfigModel :
              T extends ResponsiveOverflowConfigModel ? ResponsiveOverflowConfigModel :
                T extends ResponsivePositioningConfigModel ? ResponsivePositioningConfigModel :
                  T extends ResponsiveDimensioningConfigModel ? ResponsiveDimensioningConfigModel : never

export type ConfigType<T> =
  T extends ResponsiveChildLayoutConfigModel ? ChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityConfigModel :
      T extends ResponsiveAttributesConfigModel ? AttributesConfigModel :
        T extends ResponsiveContentInjectionConfigModel ? ContentInjectionConfigModel :
          T extends ResponsiveDataInputConfigModel ? DataInputConfigModel :
            T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationConfigModel :
              T extends ResponsiveOverflowConfigModel ? OverflowConfigModel :
                T extends ResponsivePositioningConfigModel ? PositioningConfigModel :
                  T extends ResponsiveDimensioningConfigModel ? DimensioningConfigModel : never

export type RenderType<T> =
  T extends ResponsiveChildLayoutConfigModel ? ChildLayoutRenderModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityRenderModel :
      T extends ResponsiveAttributesConfigModel ? AttributesRenderModel :
        T extends ResponsiveContentInjectionConfigModel ? ContentInjectionRenderModel :
          T extends ResponsiveDataInputConfigModel ? DataInputRenderModel :
            T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationRenderModel :
              T extends ResponsiveOverflowConfigModel ? OverflowRenderModel :
                T extends ResponsivePositioningConfigModel ? PositioningRenderModel :
                  T extends ResponsiveDimensioningConfigModel ? DimensioningRenderModel : never
