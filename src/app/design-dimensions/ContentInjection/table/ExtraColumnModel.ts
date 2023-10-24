import {TableColumnModel} from "../../StructuralConfig/table/TableColumnModel";
import {ComponentModelType} from "../../../types/union-types";
export class ExtraColumnModel {
    constructor(public component:ComponentModelType,public config:TableColumnModel) {
    }
}
