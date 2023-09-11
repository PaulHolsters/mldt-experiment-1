import {ResponsiveChildLayoutConfigModel} from "../../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../../models/ChildLayout/ChildLayoutConfigModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisColumnLayoutConfigTypes.enum";
import {WidthConfigModel} from "../../models/Dimensioning/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/columnPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../../models/ChildLayout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalLayoutConfigTypes.enum";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/rowPositioningConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";

export const mainChildLayout = new ResponsiveChildLayoutConfigModel(
  // todo add the other parts too like visibility, styling etc., change scroll into overflow
  new ChildLayoutConfigModel(
    new HorizontalLayoutConfigPropsModel(
      AxisConfigType.Cross,
      undefined,
      true,
      // dit zal de componenten binnen een lane positioneren
      CrossAxisHorizontalPositioningConfigType.Left,
      // breedte van de kinderen
      new WidthConfigModel(
        new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage),
        DynamicDimensionValueConfigType.NC
      ),
      // dit zal lanes positioneren ten opzichte van elkaar
      // todo dit geeft wel een soort van bug als de lanes centered zijn en het dingt overflowt dan kan je niet meer alles zien door te scrollen
      //    dit zou je kunnen oplossen door in uiterste nood een event laten gebeuren en vervolgens de waarde hier wijzigen
      CrossAxisHorizontalLanesPositioningConfigType.Left
    ),
    new VerticalLayoutConfigPropsModel(
      AxisConfigType.Main,
      false,
      // todo nagaan is hier eigenlijk iets voor geimpelmenteerd?
      true,
      MainAxisVerticalPositioningConfigType.Top,
      HeightValueConfigType.NC,
      CrossAxisVerticalLanesPositioningConfigType.NA
    )
  )
)
