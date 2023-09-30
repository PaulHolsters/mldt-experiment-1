import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ComponentModel} from "../../ComponentModel";
import {TableColumnModel} from "../../StructuralConfig/table/TableColumnModel";
export class ExtraColumnModel {
    constructor(public component:ComponentModel,public config:TableColumnModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured) {
    }
}
