import {PositionDirectionConfigType} from "../../../enums/positionDirectionConfigTypes.enum";
import {HorizontalPositioningConfigType} from "../../../enums/horizontalPositioningConfigTypes.enum";
import {CrossAxisColumnPositioningConfigType} from "../../../enums/crossAxisColumnPositioningConfigTypes.enum";
import {VerticalPositioningConfigType} from "../../../enums/verticalPositioningConfigTypes.enum";
import {CrossAxisRowPositioningConfigType} from "../../../enums/crossAxisRowPositioningConfigTypes.enum";

export class ChildPositioningConfigPropsModel {
  constructor(  public direction:PositionDirectionConfigType = PositionDirectionConfigType.Row,
                public wrap: boolean = true,
                public horPos:HorizontalPositioningConfigType|{lanes:HorizontalPositioningConfigType,children:CrossAxisColumnPositioningConfigType}
                  = HorizontalPositioningConfigType.Left,
                public verPos:VerticalPositioningConfigType|{lanes:VerticalPositioningConfigType,children:CrossAxisRowPositioningConfigType
                  } = {lanes:VerticalPositioningConfigType.Top,children:CrossAxisRowPositioningConfigType.Top}
                ) {
    if(direction === PositionDirectionConfigType.Row && horPos.hasOwnProperty('lanes')) throw new Error('If direction is set to "row" horPos should be of type ' +
      'HorizontalPositionConfigType')
    if(direction === PositionDirectionConfigType.Row && !verPos.hasOwnProperty('lanes')) throw new Error('If direction is set to "row" ' +
      'you need to configure the vertical positioning of lanes')
    if(direction === PositionDirectionConfigType.Column && verPos.hasOwnProperty('lanes')) throw new Error('If direction is set to "column" ' +
      'verPos should be of type ' +
      'VerticalPositionConfigType')
    if(direction === PositionDirectionConfigType.Column && !horPos.hasOwnProperty('lanes')) throw new Error('If direction is set to "column" ' +
      'you need to configure the horizontal positioning of lanes')
    // todo add constraints die aangeven dat je geen lanes kan hebben als je geen wrap hebt!!!

  }
}
