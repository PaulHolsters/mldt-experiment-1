import {ContainerLayoutModel} from "./ContainerLayoutModel";
import {ChildLayoutModel} from "./ChildLayoutModel";
export interface LayoutModel {
  // dit model is de interface voor de gebruiker waarmee hij uiteindelijk de
  // properties van de betrokken component kan wijzigen via configuratie
  childLayout:ChildLayoutModel,
  containerLayout?:ContainerLayoutModel,
}
