import {ComponentModel} from "../../ComponentModel";
import {TableColumnModel} from "../../StructuralConfig/table/TableColumnModel";
import {NotConfigured} from "../../../types/type-aliases";
export class ExtraColumnModel {
    constructor(public component:ComponentModel,public config:TableColumnModel|NotConfigured=undefined) {
    }
}
