import {NotConfigured} from "../../../types/type-aliases";

export class TableColumnModel {
    constructor(public field:string,public header:string|NotConfigured=undefined) {
    }
}
