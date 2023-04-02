import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {MainAxisHorizontalPositioningConfigType} from "../../enums/mainAxisHorizontalPositioningConfigTypes.enum";
import {FixedDimensioningConfigModel} from "../Dimensioning/self/FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "../Dimensioning/self/DynamicDimensioningConfigModel";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisHorizontalPositioningConfigTypes.enum";
export class HorizontalLayoutConfigPropsModel {
  constructor(
    public axis:AxisConfigType,
    public wrap:boolean|undefined,
    public scroll:boolean,
    public position:MainAxisHorizontalPositioningConfigType|CrossAxisHorizontalPositioningConfigType,

    public width:FixedDimensioningConfigModel|DynamicDimensioningConfigModel,
    public lanes:MainAxisHorizontalPositioningConfigType|undefined) {
    // todo add constraints
  }
  public isParent(propName:string):boolean {
    if (Reflect.has(this, propName)){
      return ['wrap','axis','position','lanes'].includes(propName) || (propName === 'width'
        && (this.width instanceof DynamicDimensioningConfigModel) && this.width.stretch !== undefined)
    }
    throw new Error('propName' + propName+' does not exist HorizontalLayoutConfigPropsModel')
  }
  public getComponentProperties(propName:string):any[][]{
    switch (propName){
      case 'axis':
        return [['row',this.axis === AxisConfigType.Main],['column',this.axis === AxisConfigType.Cross]]
      case 'wrap':
        return [['wrap',this.wrap]]
      case 'scroll':
        return [['scroll',this.scroll]]
      case 'position':
          return [[ 'justifyContentStart',this.position===MainAxisHorizontalPositioningConfigType.Left],
         ['justifyContentCenter',this.position===MainAxisHorizontalPositioningConfigType.Center],
            ['justifyContentEnd',this.position===MainAxisHorizontalPositioningConfigType.Right],
            ['justifyContentBetween',this.position===MainAxisHorizontalPositioningConfigType.Between],
            ['justifyContentEvenly',this.position===MainAxisHorizontalPositioningConfigType.Evenly],
            ['justifyContentAround',this.position===MainAxisHorizontalPositioningConfigType.Around],
            [ 'alignItemsStart',this.position === CrossAxisHorizontalPositioningConfigType.Left],
            [ 'alignItemsCenter',this.position === CrossAxisHorizontalPositioningConfigType.Center],
            [ 'alignItemsEnd',this.position === CrossAxisHorizontalPositioningConfigType.Right],
            [ 'alignItemsBaseline',this.position === CrossAxisHorizontalPositioningConfigType.Baseline]]
      case 'dimension':
        if(this.width instanceof DynamicDimensioningConfigModel && this.width.stretch){
          return [
            [ 'alignItemsStretch',true]]
        } else{
          return [
            [ 'grow',this.width instanceof DynamicDimensioningConfigModel?this.width.grow:undefined],
            [ 'shrink',this.width instanceof DynamicDimensioningConfigModel?this.width.shrink:undefined],
            [ 'width',this.width instanceof FixedDimensioningConfigModel?this.width.getDimension():undefined],
            [ 'calcWidth',this.width instanceof FixedDimensioningConfigModel?this.width.getDimensionCalc():undefined]
          ]
        }
      case 'lanes':
        return [[ 'alignContentStart',this.position===MainAxisHorizontalPositioningConfigType.Left],
          ['alignContentCenter',this.position===MainAxisHorizontalPositioningConfigType.Center],
          ['alignContentEnd',this.position===MainAxisHorizontalPositioningConfigType.Right],
          ['alignContentBetween',this.position===MainAxisHorizontalPositioningConfigType.Between],
          ['alignContentEvenly',this.position===MainAxisHorizontalPositioningConfigType.Evenly],
          ['alignContentAround',this.position===MainAxisHorizontalPositioningConfigType.Around]]
    }
    throw new Error('Property '+propName+' does not exist HorizontalLayoutConfigPropsModel')
  }
}
