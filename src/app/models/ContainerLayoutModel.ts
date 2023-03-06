export class ContainerLayoutModel {
  constructor(  public direction:string = 'row',
                public wrap: boolean = true,
                public horPos:string|{lines:string,children:string} = 'left',
                public verPos:string|{lines:string,children:string} = {lines:'top',children:'top'},
                public overflow: string|{x?:string,y?:string} = {y:'scroll'},
                ) {
  }


}
