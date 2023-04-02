import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {MainAxisHorizontalPositioningConfigType} from "../../enums/mainAxisHorizontalPositioningConfigTypes.enum";
import {FixedDimensioningConfigModel} from "../Dimensioning/self/FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "../Dimensioning/self/DynamicDimensioningConfigModel";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "./VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalPositioningConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../enums/crossAxisVerticalPositioningConfigTypes.enum";

export class HorizontalLayoutConfigPropsModel {
  constructor(
    public axis: AxisConfigType,
    public wrap: boolean | undefined,
    public scroll: boolean,
    public position: MainAxisHorizontalPositioningConfigType | CrossAxisHorizontalPositioningConfigType,
    public width: FixedDimensioningConfigModel | DynamicDimensioningConfigModel |undefined,
    public lanes: MainAxisHorizontalPositioningConfigType | undefined) {
    // todo add constraints
  }

  public isParent(propName: string): boolean {
    if (Reflect.has(this, propName)) {
      return ['wrap', 'axis', 'position', 'lanes'].includes(propName) || (propName === 'width'
        && (this.width instanceof DynamicDimensioningConfigModel) && this.width.stretch !== undefined)
    }
    throw new Error('propName' + propName + ' does not exist HorizontalLayoutConfigPropsModel')
  }

  public getComponentProperties(propName: string, verticalLayout: VerticalLayoutConfigPropsModel): any[][] {
    switch (propName) {
      case 'axis':
        return [['row', this.axis === AxisConfigType.Main], ['column', this.axis === AxisConfigType.Cross]]
      case 'wrap':
        return [['wrap', this.wrap]]
      case 'scroll':
        return [['horizontalScrolling', this.scroll], ['verticalScrolling', verticalLayout.scroll]]
      case 'position':
        return [
          ['justifyContentStart', this.position === MainAxisHorizontalPositioningConfigType.Left || verticalLayout.position === MainAxisVerticalPositioningConfigType.Top],
          ['justifyContentCenter', this.position === MainAxisHorizontalPositioningConfigType.Center || verticalLayout.position === MainAxisVerticalPositioningConfigType.Center],
          ['justifyContentEnd', this.position === MainAxisHorizontalPositioningConfigType.Right || verticalLayout.position === MainAxisVerticalPositioningConfigType.Bottom],
          ['justifyContentBetween', this.position === MainAxisHorizontalPositioningConfigType.Between || verticalLayout.position === MainAxisVerticalPositioningConfigType.Between],
          ['justifyContentEvenly', this.position === MainAxisHorizontalPositioningConfigType.Evenly || verticalLayout.position === MainAxisVerticalPositioningConfigType.Evenly],
          ['justifyContentAround', this.position === MainAxisHorizontalPositioningConfigType.Around || verticalLayout.position === MainAxisVerticalPositioningConfigType.Around],
          ['alignItemsStart', this.position === CrossAxisHorizontalPositioningConfigType.Left || verticalLayout.position === CrossAxisVerticalPositioningConfigType.Top],
          ['alignItemsCenter', this.position === CrossAxisHorizontalPositioningConfigType.Center || verticalLayout.position === CrossAxisVerticalPositioningConfigType.Center],
          ['alignItemsEnd', this.position === CrossAxisHorizontalPositioningConfigType.Right || verticalLayout.position === CrossAxisVerticalPositioningConfigType.Bottom],
          ['alignItemsBaseline', this.position === CrossAxisHorizontalPositioningConfigType.Baseline || verticalLayout.position === CrossAxisVerticalPositioningConfigType.Baseline]]
      case 'width':
        // todo geef een object met keys parent en children terug per eigenschap ipv een arr
        if ((this.width instanceof DynamicDimensioningConfigModel && this.width.stretch) || (verticalLayout.height instanceof DynamicDimensioningConfigModel && verticalLayout.height.stretch)) {
          return [
            ['alignItemsStretch', true]]
        } else {
          return [
            ['grow', this.width instanceof DynamicDimensioningConfigModel ? this.width.grow : undefined],
            ['shrink', this.width instanceof DynamicDimensioningConfigModel ? this.width.shrink : undefined],
            ['width', this.width instanceof FixedDimensioningConfigModel ? this.width.getDimension() : undefined],
            ['calcWidth', this.width instanceof FixedDimensioningConfigModel ? this.width.getDimensionCalc() : undefined]
          ]
        }
      case 'lanes':
        return [['alignContentStart', this.position === MainAxisHorizontalPositioningConfigType.Left],
          ['alignContentCenter', this.position === MainAxisHorizontalPositioningConfigType.Center],
          ['alignContentEnd', this.position === MainAxisHorizontalPositioningConfigType.Right],
          ['alignContentBetween', this.position === MainAxisHorizontalPositioningConfigType.Between],
          ['alignContentEvenly', this.position === MainAxisHorizontalPositioningConfigType.Evenly],
          ['alignContentAround', this.position === MainAxisHorizontalPositioningConfigType.Around]]
    }
    throw new Error('Property ?' + propName + '? does not exist HorizontalLayoutConfigPropsModel')
  }
}
