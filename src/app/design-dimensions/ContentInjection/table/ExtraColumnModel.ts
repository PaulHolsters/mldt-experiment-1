import {ComponentModel} from "../../ComponentModel";
import {TableColumnModel} from "../../StructuralConfig/table/TableColumnModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class ExtraColumnModel {
    constructor(public component:ComponentModel,public config:TableColumnModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED) {
    }
}
