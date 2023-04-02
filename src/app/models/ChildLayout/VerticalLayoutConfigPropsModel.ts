import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {FixedDimensioningConfigModel} from "../Dimensioning/self/FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "../Dimensioning/self/DynamicDimensioningConfigModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalPositioningConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../enums/crossAxisVerticalPositioningConfigTypes.enum";
import {MainAxisHorizontalPositioningConfigType} from "../../enums/mainAxisHorizontalPositioningConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisHorizontalPositioningConfigTypes.enum";

export class VerticalLayoutConfigPropsModel {
  constructor(    public axis:AxisConfigType,
                  public wrap:boolean|undefined,
                  public scroll:boolean,
                  public position:MainAxisVerticalPositioningConfigType|CrossAxisVerticalPositioningConfigType,
                  public height:FixedDimensioningConfigModel|DynamicDimensioningConfigModel,
                  public lanes:MainAxisVerticalPositioningConfigType|undefined ) {
  }
  public isParent(propName:string):boolean {
    if (Reflect.has(this, propName)){
      return ['wrap','axis','position','lanes'].includes(propName) || (propName === 'height' && (this.height instanceof DynamicDimensioningConfigModel) && this.height.stretch !== undefined)
    }
    throw new Error('propName' + propName+' does not exist on VerticalLayoutConfigPropsModel')
  }
  public getComponentProperties(propName:string):any[][]{
    switch (propName){
      case 'axis':
        return [['row',this.axis === AxisConfigType.Cross],['column',this.axis === AxisConfigType.Main]]
      case 'wrap':
        return [['wrap',this.wrap]]
      case 'scroll':
        return [['scroll',this.scroll]]
      case 'position':
        return [[ 'justifyContentStart',this.position===MainAxisVerticalPositioningConfigType.Top],
          ['justifyContentCenter',this.position===MainAxisVerticalPositioningConfigType.Center],
          ['justifyContentEnd',this.position===MainAxisVerticalPositioningConfigType.Bottom],
          ['justifyContentBetween',this.position===MainAxisVerticalPositioningConfigType.Between],
          ['justifyContentEvenly',this.position===MainAxisVerticalPositioningConfigType.Evenly],
          ['justifyContentAround',this.position===MainAxisVerticalPositioningConfigType.Around],
          [ 'alignItemsStart',this.position === CrossAxisVerticalPositioningConfigType.Top],
          [ 'alignItemsCenter',this.position === CrossAxisVerticalPositioningConfigType.Center],
          [ 'alignItemsEnd',this.position === CrossAxisVerticalPositioningConfigType.Bottom],
          [ 'alignItemsBaseline',this.position === CrossAxisVerticalPositioningConfigType.Baseline]]
      case 'dimension':
        if(this.height instanceof DynamicDimensioningConfigModel && this.height.stretch){
          return [
            [ 'alignItemsStretch',true]]
        } else{
          return [
            [ 'grow',this.height instanceof DynamicDimensioningConfigModel?this.height.grow:undefined],
            [ 'shrink',this.height instanceof DynamicDimensioningConfigModel?this.height.shrink:undefined],
            [ 'width',this.height instanceof FixedDimensioningConfigModel?this.height.getDimension():undefined],
            [ 'calcWidth',this.height instanceof FixedDimensioningConfigModel?this.height.getDimensionCalc():undefined]
          ]
        }
      case 'lanes':
        return [[ 'alignContentStart',this.position===MainAxisVerticalPositioningConfigType.Top],
          ['alignContentCenter',this.position===MainAxisVerticalPositioningConfigType.Center],
          ['alignContentEnd',this.position===MainAxisVerticalPositioningConfigType.Bottom],
          ['alignContentBetween',this.position===MainAxisVerticalPositioningConfigType.Between],
          ['alignContentEvenly',this.position===MainAxisVerticalPositioningConfigType.Evenly],
          ['alignContentAround',this.position===MainAxisVerticalPositioningConfigType.Around]]
    }
    throw new Error('Property '+propName+' does not exist HorizontalLayoutConfigPropsModel')
  }
}
