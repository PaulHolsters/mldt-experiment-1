import {ComponentModel} from "../../ComponentModel";
import {TableColumnModel} from "../../StructuralConfig/table/TableColumnModel";
export class ExtraColumnModel {
    constructor(public component:ComponentModel,public config:TableColumnModel) {
    }
}
