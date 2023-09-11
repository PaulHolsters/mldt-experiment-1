import {ResponsiveDimensioningConfigModel} from "../design-dimensions/Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveChildLayoutConfigModel} from "../design-dimensions/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ContainerModel} from "../components/container/ContainerModel";
import {ResponsiveAttributesConfigModel} from "../design-dimensions/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsivePositioningConfigModel} from "../design-dimensions/Positioning/self/ResponsivePositioningConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveStylingConfigModel} from "../design-dimensions/Styling/ResponsiveStylingConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";

export type ResponsiveConfigModelType = ResponsiveDimensioningConfigModel |
                                        ResponsiveVisibilityConfigModel |
                                        ResponsiveChildLayoutConfigModel |
                                        ResponsiveAttributesConfigModel |
                                        ResponsiveOverflowConfigModel |
                                        ResponsivePositioningConfigModel |
                                        ResponsiveContentInjectionConfigModel |
                                        ResponsiveStylingConfigModel |
                                        ResponsiveDataRepresentationConfigModel |
                                        ResponsiveDataInputConfigModel

export type ComponentModelType = ContainerModel
