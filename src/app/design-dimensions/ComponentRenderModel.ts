import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "./datalink";
export class ComponentRenderModel {
  propsByData:[PropertyName,Datalink,Function[]]|null=null
}
