export class ChildLayoutModel {
  // todo verander selfAlignment in horPosException, verPosException
  constructor(  public selfAlignment?:{horPos?:string,verPos?:string},
                public height?:{unit:string,value:number},
                public width?:{unit:string,value:number},
                public shrink?:number,
                public grow?:number,
                public order?:number
                ) {
  }


}
// margin, padding, border, ...
