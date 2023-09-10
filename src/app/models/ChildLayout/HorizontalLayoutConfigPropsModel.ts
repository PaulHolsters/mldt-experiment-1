import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {MainAxisHorizontalPositioningConfigType} from "../../enums/mainAxisHorizontalLayoutConfigTypes.enum";
import {FixedDimensioningConfigModel} from "../Dimensioning/self/FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "../Dimensioning/self/DynamicDimensioningConfigModel";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisHorizontalLayoutConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "./VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalLayoutConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../enums/crossAxisVerticalLayoutConfigTypes.enum";
import {WidthConfigPropsModel} from "../Dimensioning/self/WidthConfigPropsModel";
import {HeightConfigPropsModel} from "../Dimensioning/self/HeightConfigPropsModel";
import {WidthValueConfigType} from "../../enums/WidthValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {ComponentDimensionValueConfigType} from "../../enums/componentDimensionValueConfigTypes.enum";
import {RowPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";
import {ColumnPositioningConfigType} from "../../enums/columnPositioningConfigTypes.enum";

export class HorizontalLayoutConfigPropsModel {
  constructor(
    public axis: AxisConfigType,
    public wrap: boolean | undefined,
    public scroll: boolean,
    public position: MainAxisHorizontalPositioningConfigType | CrossAxisHorizontalPositioningConfigType,
    public width: WidthConfigPropsModel|WidthValueConfigType.NA|WidthValueConfigType.NC,
    public lanes: RowPositioningConfigType) {
    // todo add constraints
  }
  public getComponentProperties(propName: string, verticalLayout: VerticalLayoutConfigPropsModel): {parent?:any[][],children?:any[][]} {
    switch (propName) {
      case 'axis':
        return {parent:[['row', this.axis === AxisConfigType.Main], ['column', this.axis === AxisConfigType.Cross]],children:[
          ['isRow',this.axis === AxisConfigType.Main],['isColumn',this.axis === AxisConfigType.Cross]]}
      case 'wrap':
        return {parent:[['wrap', (this.wrap||verticalLayout.wrap)]]}
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
        if ((this.width instanceof WidthConfigPropsModel
            && this.width.dynamic instanceof DynamicDimensioningConfigModel
            && this.width.dynamic.stretch===true)
          || (verticalLayout.height instanceof HeightConfigPropsModel
            && verticalLayout.height.dynamic instanceof DynamicDimensioningConfigModel
            && verticalLayout.height.dynamic.stretch===true)) {
          Object.assign(layout,{parent:[['alignItemsStretch', true]]})
        }
        if(this.width instanceof WidthConfigPropsModel
          && this.width.fixed instanceof FixedDimensioningConfigModel ){
          Object.assign(layout,
            {children:[['width',this.width.fixed.getDimension()],['calcWidth',this.width.fixed.getDimensionCalc()]]})
        }
        if(this.width instanceof WidthConfigPropsModel
          && (this.width.dynamic instanceof DynamicDimensioningConfigModel || this.width.dynamic === DynamicDimensionValueConfigType.Parent)
          && !(this.width.dynamic instanceof DynamicDimensioningConfigModel && this.width.dynamic.stretch === true)){
          if(this.width.dynamic instanceof DynamicDimensioningConfigModel){
            Object.assign(layout,
              {children:[['grow',this.width.dynamic.grow ],['shrink',this.width.dynamic.shrink ]]})
          } else{
            Object.assign(layout,
              {children:[['grow',ComponentDimensionValueConfigType.Parent ],['shrink',ComponentDimensionValueConfigType.Parent]]})
          }
        }
        if(verticalLayout.height instanceof HeightConfigPropsModel && verticalLayout.height.fixed instanceof FixedDimensioningConfigModel){
          if(layout.hasOwnProperty('children')){
            layout.children.push(['height',verticalLayout.height.fixed.getDimension()])
            layout.children.push(['calcHeight',verticalLayout.height.fixed.getDimensionCalc()])
          } else{
            Object.assign(layout,
              {children:[['height',verticalLayout.height.fixed.getDimension()],['calcHeight',verticalLayout.height.fixed.getDimensionCalc()]]})
          }
        }
        if(verticalLayout.height instanceof HeightConfigPropsModel
          && (verticalLayout.height.dynamic instanceof DynamicDimensioningConfigModel || verticalLayout.height.dynamic === DynamicDimensionValueConfigType.Parent)
          && !(verticalLayout.height.dynamic instanceof DynamicDimensioningConfigModel && verticalLayout.height.dynamic.stretch===true)){
          if(layout.hasOwnProperty('children')){
            if(verticalLayout.height.dynamic instanceof DynamicDimensioningConfigModel){
              layout.children.push(['grow',verticalLayout.height.dynamic.grow ])
              layout.children.push(['shrink',verticalLayout.height.dynamic.shrink ])
            } else{
              layout.children.push(['grow',ComponentDimensionValueConfigType.Parent ])
              layout.children.push(['shrink',ComponentDimensionValueConfigType.Parent ])
            }
          } else{
            if(verticalLayout.height.dynamic instanceof DynamicDimensioningConfigModel){
              Object.assign(layout,
                {children:[['grow',verticalLayout.height.dynamic.grow ],['shrink',verticalLayout.height.dynamic.shrink ]]})
            } else{
              Object.assign(layout,
                {children:[['grow',ComponentDimensionValueConfigType.Parent ],['shrink',ComponentDimensionValueConfigType.Parent ]]})
            }
          }
        }
        return layout
      case 'lanes':
        return {parent:[
          ['alignContentStart', this.lanes === ColumnPositioningConfigType.Left || verticalLayout.lanes === CrossAxisVerticalLanesPositioningConfigType.Top],
          ['alignContentCenter', this.lanes === CrossAxisHorizontalLanesPositioningConfigType.Center || verticalLayout.lanes === CrossAxisVerticalLanesPositioningConfigType.Center],
          ['alignContentEnd', this.lanes === CrossAxisHorizontalLanesPositioningConfigType.Right || verticalLayout.lanes === CrossAxisVerticalLanesPositioningConfigType.Bottom],
          ['alignContentBetween', this.lanes === CrossAxisHorizontalLanesPositioningConfigType.Between || verticalLayout.lanes === CrossAxisVerticalLanesPositioningConfigType.Between],
          ['alignContentEvenly', this.lanes === CrossAxisHorizontalLanesPositioningConfigType.Evenly || verticalLayout.lanes === CrossAxisVerticalLanesPositioningConfigType.Evenly],
          ['alignContentAround', this.lanes === CrossAxisHorizontalLanesPositioningConfigType.Around || verticalLayout.lanes === CrossAxisVerticalLanesPositioningConfigType.Around]]}
    }
    throw new Error('Property ?' + propName + '? does not exist HorizontalLayoutConfigPropsModel')
  }
}
