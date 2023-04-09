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
    public position: MainAxisHorizontalPositioningConfigType | CrossAxisHorizontalPositioningConfigType|undefined,
    public width: FixedDimensioningConfigModel | DynamicDimensioningConfigModel |undefined,
    public lanes: MainAxisHorizontalPositioningConfigType) {
    // todo add constraints
  }
  public getComponentProperties(propName: string, verticalLayout: VerticalLayoutConfigPropsModel): {parent?:any[][],children?:any[][]} {
    switch (propName) {
      case 'axis':
        return {parent:[['row', this.axis === AxisConfigType.Main], ['column', this.axis === AxisConfigType.Cross]]}
      case 'wrap':
        return {parent:[['wrap', this.wrap]]}
      case 'scroll':
        return {children:[['horizontalScrolling', this.scroll], ['verticalScrolling', verticalLayout.scroll]]}
      case 'position':
        return {
          parent: [
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
        }
      case 'width':
        const layout:{parent:any[],children:any[]} = {parent:[],children:[]}
        if ((this.width instanceof DynamicDimensioningConfigModel && this.width.stretch)
          || (verticalLayout.height instanceof DynamicDimensioningConfigModel && verticalLayout.height.stretch)) {
          Object.assign(layout,{parent:[['alignItemsStretch', true]]})
        }
        if(this.width instanceof FixedDimensioningConfigModel){
          Object.assign(layout,
            {children:[['width',this.width.getDimension()],['calcWidth',this.width.getDimensionCalc()]]})
        } else if(this.width instanceof DynamicDimensioningConfigModel && !this.width.stretch){
          Object.assign(layout,
            {children:[['grow',this.width.grow ],['shrink',this.width.shrink ]]})
        }
        if(verticalLayout.height instanceof FixedDimensioningConfigModel){
          if(layout.hasOwnProperty('children')){
            layout.children.push(['height',verticalLayout.height.getDimension()])
            layout.children.push(['calcHeight',verticalLayout.height.getDimensionCalc()])
          } else{
            Object.assign(layout,
              {children:[['height',verticalLayout.height.getDimension()],['calcHeight',verticalLayout.height.getDimensionCalc()]]})
          }
        } else if(verticalLayout.height instanceof DynamicDimensioningConfigModel && !verticalLayout.height.stretch){
          if(layout.hasOwnProperty('children')){
            layout.children.push(['grow',verticalLayout.height.grow ])
            layout.children.push(['shrink',verticalLayout.height.shrink ])
          } else{
            Object.assign(layout,
              {children:[['grow',verticalLayout.height.grow ],['shrink',verticalLayout.height.shrink ]]})
          }
        }
        return layout
      case 'lanes':
        return {parent:[
          ['alignContentStart', this.lanes === MainAxisHorizontalPositioningConfigType.Left],
          ['alignContentCenter', this.lanes === MainAxisHorizontalPositioningConfigType.Center],
          ['alignContentEnd', this.lanes === MainAxisHorizontalPositioningConfigType.Right],
          ['alignContentBetween', this.lanes === MainAxisHorizontalPositioningConfigType.Between],
          ['alignContentEvenly', this.lanes === MainAxisHorizontalPositioningConfigType.Evenly],
          ['alignContentAround', this.lanes === MainAxisHorizontalPositioningConfigType.Around]]}
    }
    throw new Error('Property ?' + propName + '? does not exist HorizontalLayoutConfigPropsModel')
  }
}
